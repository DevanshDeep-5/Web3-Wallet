import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Navbar } from "../components/Navbar";
import { ShowBalance } from "../ShowBalance";
import dollar from "../assets/dollar.svg";
import share from "../assets/share.svg";
import receive from "../assets/receive.svg";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export function DashBoard() {

    const navigate = useNavigate()
    const wallet = useWallet()
    
      useEffect(() => {
        if (!wallet.connected && !wallet.publicKey) {
          navigate("/");
        }
      }, [wallet.connected, wallet.publicKey, navigate]);

    function buyButton() {
        navigate("/airdrop")
    }
    function sendButton() {
        navigate("/send")
    }
    function getButton() {
        navigator.clipboard.writeText(wallet.publicKey.toString())
        alert("Copied your public key to clipboard: " + wallet.publicKey.toString())
    }

  return (
    <>
      <Navbar />

      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="bg-slate-950 h-[69vh] w-[32vw] mx-auto mt-40 rounded-lg border-solid text-white border-white border-2">
          <div className="flex flex-col items-center justify-center h-[20vh]">
            <span className=" text-2xl font-bold">
              <ShowBalance />
            </span>
          </div>

          <div className="bg-white h-[1px]"></div>

          <div className="flex flex-col items-center  justify-center gap-5 mt-16">
            <button onClick={buyButton} className="flex items-center justify-between w-[20vw] h-[8vh] rounded-lg bg-[#00091d] border-solid border-slate-600 border-2 cursor-pointer hover:bg-[#00091d] hover:border-slate-300 hover:scale-105 transition-all duration-300 ease-in-out">
              <span className="flex items-center gap-2 w-[83px] text-black bg-white rounded-2xl p-2 ml-3">
                <img src={dollar} alt="" /> Buy
              </span>
              <span className="text-white font-bold mr-10">Airdrop SOL</span>
            </button>

            <button onClick={sendButton} className="flex items-center justify-between w-[20vw] h-[8vh] rounded-lg bg-[#00091d] border-solid border-slate-600 border-2 cursor-pointer hover:bg-[#00091d] hover:border-slate-300 hover:scale-105 transition-all duration-300 ease-in-out">
              <span className="flex items-center gap-2 w-[84px] text-black bg-white rounded-2xl p-2 ml-3">
                <img width={21} height={21} src={share} alt="" /> Send
              </span>
              <span className="text-white font-bold mr-14">Send SOL</span>
            </button>

            <button onClick={getButton} className="flex items-center justify-between w-[20vw] h-[8vh] rounded-lg bg-[#00091d] border-solid border-slate-600 border-2 cursor-pointer hover:bg-[#00091d] hover:border-slate-300 hover:scale-105 transition-all duration-300 ease-in-out">
              <span className="flex items-center gap-3 w-[83px] text-black bg-white rounded-2xl p-2 ml-3">
                <img src={receive} alt="" /> Get
              </span>
              <span className="text-white font-bold mr-8">Receive SOL</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
