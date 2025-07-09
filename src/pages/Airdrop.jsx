import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amt = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey, amt * 1000000000);
    alert("You got some Sol 🎉");
  }

  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className=" h-[69vh] w-[32vw] mx-auto mt-40 rounded-lg bg-[#00091d] border-solid border-slate-600 border-2 cursor-pointer hover:bg-[#00091d] hover:border-slate-300 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center justify-center gap-4 mt-20 text-white">
          <h1 className="text-3xl underline decoration-slate-300 font-bold mb-3">
            Solana Faucet
          </h1>
          <p className="text-lg text-gray-500 mb-14">
            Enter the amount of SOL you want to Airdrop!
          </p>
          <input
            className="bg-gray-500 focus:bg-white focus:text-black p-2 rounded-md mb-3"
            id="amount"
            type="text"
            placeholder="Amount..."
          />
          <button
            className="bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-violet-600 transition-all duration-300 text-white"
            onClick={sendAirdropToUser}
          >
            Get Airdrop
          </button>
        </div>
      </div>
    </div>
  );
}
