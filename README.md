# Next.js Application

This project is a Next.js app utilizing the App Router structure. The application integrates with various blockchain-related APIs and services through environment variables, making it customizable for different networks and data sources.

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Learn More](#learn-more)

---

## Getting Started

To run this project locally, follow these steps:


1. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Create a `.env` file in the root of your project and add the following environment variables:

   ```bash
   NEXT_PUBLIC_REST_API_URL=<your-api-url>
   NEXT_PUBLIC_RIO_STELLAR_HOLDERS_URL=<your-stellar-holders-url>
   RIO_NATIVE_SUPPLY_URL=<your-native-circulating-supply-url>
   RIO_VOLUME_PRICE_DATA_URL=<your-volume-price-data-url>
   CRYPTO_COMPARE_API_KEY=<your-crypto-compare-api-key>
   NEXT_PUBLIC_RIO_NATIVE_SUPPLY_CAP=<your-native-supply-cap>
   RIO_ETHEREUM_DATA_URL=<your-ethereum-data-url>
   RIO_STELLAR_HOLDERS_URL=<your-react-stellar-holders-url>
   RIO_ALGORAND_HOLDERS_URL=<your-react-algorand-holders-url>
   NEXT_PUBLIC_REACT_APP_CHAIN_ID_HEX=<your-chain-id-hex>
   NEXT_PUBLIC_REACT_APP_RPC_URL=<your-rpc-url>
   NEXT_PUBLIC_REACT_APP_BLOCK_EXPLORE_URL=<your-block-explore-url>
   NEXT_PUBLIC_REACT_APP_CHAIN_ID=<your-chain-id>
   NEXT_PUBLIC_REACT_APP_RPC=<your-rpc>
   NEXT_PUBLIC_REACT_APP_REST=<your-rest-endpoint>
   NEXT_PUBLIC_COINMARKETCAP=<your-coinmarketcap-api-key>
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app running locally.

---

## Environment Variables

This project relies on several environment variables for API integrations and blockchain interactions. Below is a list of the required variables and their descriptions:

| Variable Name                                 | Description                                                 |
| --------------------------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_REST_API_URL`                    | The base URL for the REST API used by the application.       |
| `NEXT_PUBLIC_RIO_STELLAR_HOLDERS_URL`         | URL for retrieving Stellar holders data.                    |
| `RIO_NATIVE_SUPPLY_URL`           | URL for retrieving Cosmos circulating supply data.          |
| `NEXT_PUBLIC_RIO_NATIVE_SUPPLY_CAP`           | Cosmos supply cap.                                         |
| `RIO_VOLUME_PRICE_DATA_URL`       | URL for retrieving volume and price data.                   |
| `CRYPTO_COMPARE_API_KEY`                       | API key for CryptoCompare to retrieve volume and price data. |
| `RIO_ETHEREUM_DATA_URL`           | URL for Ethereum data (e.g., transaction, holders info).     |
| `RIO_STELLAR_HOLDERS_URL` | Frontend endpoint for Stellar holders data retrieval.        |
| `RIO_ALGORAND_HOLDERS_URL` | Frontend endpoint for Algorand holders data retrieval.       |
| `NEXT_PUBLIC_REACT_APP_CHAIN_ID_HEX`          | Hexadecimal chain ID for the blockchain network.             |
| `NEXT_PUBLIC_REACT_APP_RPC_URL`               | RPC URL for interacting with the blockchain network.         |
| `NEXT_PUBLIC_REACT_APP_BLOCK_EXPLORE_URL`     | URL of the block explorer for transaction tracking.          |
| `NEXT_PUBLIC_REACT_APP_CHAIN_ID`              | Numeric chain ID for the blockchain network.                 |
| `NEXT_PUBLIC_REACT_APP_RPC`                   | Another RPC endpoint for blockchain interactions.            |
| `NEXT_PUBLIC_REACT_APP_REST`                  | REST API endpoint for other data interactions.               |
| `NEXT_PUBLIC_COINMARKETCAP`                   | API key for CoinMarketCap to retrieve crypto price data.     |

Make sure to set these variables in your `.env` file before running the project.

---

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Runs the app in the development mode.
- `npm run build` or `yarn build`: Builds the app for production to the `.next` folder.
- `npm start` or `yarn start`: Runs the built app in production mode.

---

## Project Structure

```
.
├── app/                  # Main app directory for the App Router
│   ├── layout.tsx        # Root layout for the app (using TypeScript)
│   ├── page.tsx          # Main entry page
│   └── (nested-routes)/  # Example of nested routes (optional)
├── assets/               # Custom static assets (images, icons, fonts)
├── components/           # Reusable UI components
├── ts/                   # TypeScript configuration and helper modules
├── types/                # Global TypeScript types and interfaces
├── utils/                # Utility functions and helper modules
├── .env                  # Environment variables for local development
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation


```

---

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Environment Variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)

--- 

