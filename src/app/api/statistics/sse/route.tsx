import {
  getRioCirculationData,
  getEthereumData,
  getStellarData,
  getAlgorandData,
  getBnbData,
  getNativeHolderData,
  getVolumePriceData,
} from "@/utils/api";

// Use Edge Runtime for better streaming performance
export const runtime = "edge";

export async function GET() {
  const encoder = new TextEncoder();
  let isStreamActive = true;

  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(encoder.encode(": heartbeat\n\n"));

      while (isStreamActive) {
        try {
          console.log("Fetching new statistics...");

          const [rioData, ethereumData, stellarData, algorandData, bnbData, nativeData, volumePriceData] = await Promise.all(
            [
              getRioCirculationData(),
              getEthereumData(),
              getStellarData(),
              getAlgorandData(),
              getBnbData(),
              getNativeHolderData(),
              getVolumePriceData(),
            ]
          );

          const data = {
            timestamp: new Date().toISOString(),
            circulating: rioData.circulating ?? 0,
            holders: {
              ethereum: ethereumData.holders,
              stellar: stellarData.holders,
              algorand: algorandData.holders,
              bnb: bnbData.holders,
              native: nativeData.holders,
            },
            price: volumePriceData.price,
            volume: volumePriceData.volume,
          };

          if (!isStreamActive) break;

          const message = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(encoder.encode(message));

          await new Promise((resolve) => setTimeout(resolve, 30000));
        } catch (error) {
          console.error("Error fetching statistics:", error);
          if (isStreamActive) {
            controller.enqueue(
              encoder.encode(`event: error\ndata: ${JSON.stringify({error: "Failed to fetch statistics"})}\n\n`)
            );
          }
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }
    },
    cancel() {
      isStreamActive = false;
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
