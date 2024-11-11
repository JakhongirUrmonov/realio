import {GET} from "./route";
import * as api from "@/utils/api";

interface MockData {
  getRioCirculationData: {circulating: number};
  getEthereumData: {holders: number};
  getStellarData: {holders: number};
  getAlgorandData: {holders: number};
  getBnbData: {holders: number};
  getNativeHolderData: {holders: number};
  getVolumePriceData: {price: number; volume: number};
}

jest.mock("@/utils/api", () => ({
  getRioCirculationData: jest.fn(),
  getEthereumData: jest.fn(),
  getStellarData: jest.fn(),
  getAlgorandData: jest.fn(),
  getBnbData: jest.fn(),
  getNativeHolderData: jest.fn(),
  getVolumePriceData: jest.fn(),
}));

describe("SSE Statistics Route", () => {
  beforeEach(() => {
    const mockData: MockData = {
      getRioCirculationData: {circulating: 1000000},
      getEthereumData: {holders: 100},
      getStellarData: {holders: 200},
      getAlgorandData: {holders: 300},
      getBnbData: {holders: 400},
      getNativeHolderData: {holders: 500},
      getVolumePriceData: {price: 1.5, volume: 1000000},
    };

    Object.keys(mockData).forEach((key) => {
      (api[key as keyof MockData] as jest.Mock).mockResolvedValue(mockData[key as keyof MockData]);
    });
  });

  it("should stream data correctly", async () => {
    const response = await GET();
    expect(response).toBeInstanceOf(Response);
    expect(response.headers.get("Content-Type")).toBe("text/event-stream");

    const reader = response.body?.getReader();
    const result = await reader?.read();
    const text = new TextDecoder().decode(result?.value);

    expect(text).toContain(": heartbeat");

    const dataMatch = text.match(/data: ({.*})/);
    if (dataMatch) {
      const data = JSON.parse(dataMatch[1]);
      expect(data).toHaveProperty("timestamp");
      expect(data).toHaveProperty("circulating");
      expect(data.holders).toHaveProperty("ethereum");
    }
  });

  it("should handle errors gracefully", async () => {
    // Simulate error
    (api.getRioCirculationData as jest.Mock).mockRejectedValue(new Error("API Error"));

    const response = await GET();
    const reader = response.body?.getReader();

    // Read multiple chunks until getting the error
    let text = "";
    for (let i = 0; i < 2; i++) {
      const result = await reader?.read();
      if (result?.value) {
        text += new TextDecoder().decode(result.value);
      }
    }

    expect(text).toContain("event: error");
    expect(text).toContain("Failed to fetch statistics");
  });
});
