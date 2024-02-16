import { KaminoMarket } from "@hubbleprotocol/kamino-lending-sdk";
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));
console.log("ping")

// There are three levels of data you can request (and cache) about the lending market.
// 1. Initalize market with parameters and metadata
const market = await KaminoMarket.load(
    connection,
    new PublicKey("7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF") // main market address. Defaults to 'Main' market
);
console.log(market.reserves.map((reserve) => reserve.config.loanToValueRatio));

// 2. Refresh reserves
await market.loadReserves();

const usdcReserve = market.getReserve("USDC");
console.log(usdcReserve?.stats.totalDepositsWads.toString());


// Refresh all cached data
market.refreshAll();

//   const obligation = market.getObligationByWallet("WALLET_PK");
//   console.log(obligation.stats.borrowLimit);