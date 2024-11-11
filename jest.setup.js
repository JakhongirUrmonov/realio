const {TextEncoder, TextDecoder} = require("util");
const {ReadableStream, WritableStream, TransformStream} = require("web-streams-polyfill");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
global.TransformStream = TransformStream;
global.Response = require("node-fetch").Response;

// Response mock to use ReadableStream
const originalResponse = require("node-fetch").Response;
global.Response = class extends originalResponse {
  constructor(body, init) {
    // Create ReadableStream with the body content
    const stream = new ReadableStream({
      start(controller) {
        if (typeof body === "string") {
          // Directly enqueue the string without encoding for SSE
          controller.enqueue(new TextEncoder().encode(body));
        } else if (body instanceof Uint8Array) {
          controller.enqueue(body);
        } else if (body instanceof ReadableStream) {
          // Handle existing ReadableStream
          body.pipeTo(
            new WritableStream({
              write(chunk) {
                controller.enqueue(chunk);
              },
              close() {
                controller.close();
              },
            })
          );
          return;
        }
        controller.close();
      },
    });

    super(stream, init);
    this._stream = stream;
  }

  get body() {
    return this._stream;
  }
};
