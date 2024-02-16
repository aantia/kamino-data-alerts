import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';

import Kamino from "@hubbleprotocol/kamino-lending-sdk";

const connection = new Connection(clusterApiUrl('mainnet-beta'));
console.log("ping")
const exampleKey = new PublicKey("7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF")
console.log(await connection.getBalance(exampleKey))//connection works

const markets = await Kamino.getMarketsFromApi()
console.log(markets)
const market = await Kamino.KaminoReserve.load(connection, new PublicKey("EAA3VVsxUuQB1Tm5x7TJkq9ATtiX5Qwq8ok7gXwim7oo"))
console.log(market)
//const reserve = await Kamino.KaminoMarket.prototype.getReservesForMarket

// // There are three levels of data you can request (and cache) about the lending market.
// // 1. Initalize market with parameters and metadata
// const market = await KaminoMarket.load(
//     connection,
//     new PublicKey("7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF") // main market address. Defaults to 'Main' market
// );
// console.log(market.reserves.map((reserve) => reserve.config.loanToValueRatio));

// // 2. Refresh reserves
// await market.loadReserves();

// const usdcReserve = market.getReserve("USDC");
// console.log(usdcReserve?.stats.totalDepositsWads.toString());


// // Refresh all cached data
// market.refreshAll();

// //   const obligation = market.getObligationByWallet("WALLET_PK");
// //   console.log(obligation.stats.borrowLimit);