import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendToken() {

    const wallet = useWallet()
    const { connection } = useConnection()

    if (!wallet.connected) {
        return (
            <div className="text-white">
                Please connect your wallet to send tokens.
            </div>
        );
    }

    async function sendToken() {
        const to = document.getElementById("to").value
        const amount = document.getElementById("amount").value
        if (!to || !amount) {
            alert("Please fill in all fields")
            return
        }
        const transaction = new Transaction();
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL
            })
        )

        await wallet.sendTransaction(transaction, connection)
            .then(() => {
                alert("Transaction successful!")
            })
            .catch((error) => {
                console.error("Transaction failed:", error);
                alert("Transaction failed. Check console for details.");
            });
    }


    return (
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className=" h-[69vh] w-[32vw] mx-auto mt-40 rounded-lg bg-[#00091d] border-solid border-slate-600 border-2 cursor-pointer hover:bg-[#00091d] hover:border-slate-300 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center justify-center gap-4 mt-20 text-white">
          <h1 className="text-3xl underline decoration-slate-300 font-bold mb-3">
            Send Token
          </h1>
          <p className="text-lg text-gray-500 mb-14">
            Enter details to Send some Solana!
          </p>
            <input
                className="bg-gray-500 focus:bg-white focus:text-black p-2 rounded-md"
                id="to"
                type="text"
                placeholder="Sending To..."
            />
            <input
                className="bg-gray-500 focus:bg-white focus:text-black p-2 rounded-md"
                id="amount"
                type="text"
                placeholder="Amount"
            />
            <button
                className="bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-violet-600 transition-all duration-300 text-white"
                onClick={sendToken}
            >
                Send Token
            </button>
        </div>
        </div>
        </div>
    );
}