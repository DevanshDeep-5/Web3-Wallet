import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowBalance() {
    const wallet = useWallet()
    const {connection} = useConnection()
    const [balanceText, setBalanceText] = useState("Checking balance...");

    async function getUserBalance(){
        setBalanceText("Checking balance...")
        try {
        const balance = await connection.getBalance(wallet.publicKey)
        setBalanceText(balance / LAMPORTS_PER_SOL + " " + "SOL")
        }
        catch (error) {
            console.error("Error fetching balance:", error);
            setBalanceText("Error fetching balance");
        }
    }

    useEffect(() => {
        if (wallet.connected && wallet.publicKey) {
            getUserBalance()
        } else {
        setBalanceText("wallet not connected")
    }
    }, [wallet.publicKey, connection])

    return (<>
    <div>
        <span id="amount">{balanceText}</span>  
        </div>
    </>)
}