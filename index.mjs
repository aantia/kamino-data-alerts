import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import say from 'say';
const connection = new Connection(clusterApiUrl('mainnet-beta'));

const targetAddress = new PublicKey(process.env.ADDRESS)
const initialBalance = await connection.getTokenAccountBalance(targetAddress)
console.log("Initial balance: ", initialBalance.value.uiAmount)

setInterval(async () => {
    const currentBalance = await connection.getTokenAccountBalance(targetAddress)
    const absDifference = Math.abs(currentBalance.value.uiAmount - initialBalance.value.uiAmount)
    console.log("Current balance:", currentBalance.value.uiAmount, " |  Difference:", absDifference)
    if (absDifference > process.env.THRESHOLD) {
        say.speak(process.env.MESSAGE);
    }
}, 1000 * process.env.INTERVAL); // 10000 milliseconds = 10 seconds
