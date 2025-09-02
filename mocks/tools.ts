// data/tools.ts
export const tools = [
    {
      id: "1",
      name: "Weather Fetcher",
      description: "Fetches live weather data for a city",
      version: "1.0.0",
      author: "Harrison Su",
      schema: {
        input: { type: "string", description: "City name" },
        output: { type: "object", description: "Weather details" }
      }
    },
    {
      id: "2",
      name: "Crypto Price Checker",
      description: "Gets the current price of a cryptocurrency",
      version: "0.9.2",
      author: "Jane Doe",
      schema: {
        input: { type: "string", description: "Crypto symbol (e.g., BTC)" },
        output: { type: "number", description: "Price in USD" }
      }
    }
  ];
  