import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import solana from "../assets/solana.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function HomePage() {
  const navigate = useNavigate();
  const wallet = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    if (wallet.connected && wallet.publicKey) {
      navigate("/dashboard");
    }
  }, [wallet.connected, wallet.publicKey, navigate]);

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="mx-auto my-16 bg-black rounded-lg  border-double border-white border-4 h-[10vh] w-[45vw]">
          <h1 className="text-white text-5xl py-3 font-medium flex justify-center items-center gap-2">
            Welcome to SOL-Wallet
            <img className="h-14 w-14" src={solana} alt="" />
          </h1>
          <div className="flex justify-center items-center pt-5">
            <h3 className=" mx-auto text-white text-xl font-medium">
              "Your own go to Web3 Wallet"
            </h3>
          </div>
        </div>

        <div class="h-[40vh] w-[35vw] mx-auto mt-44 bg-slate-950 rounded-lg border-solid border-slate-500 border-2">
          <div className="flex flex-col justify-center items-center mt-24 gap-16 ">
            <h2 className="text-white text-4xl">Connect your wallet!</h2>
            <div>
              <WalletMultiButton className="w-[60px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
