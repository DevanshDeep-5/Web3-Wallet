import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import solana from "../assets/solana.png";

export const Navbar = () => {
  return (
    <div className="bg-black h-16 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4 text-white">
        <img className="w-10 h-10 my-auto" src={solana} alt="" />
      </div>
      <div className="my-auto text-xl ml-36 text-white">
        Welcome to your Wallet 😊
      </div>
      <div className="mr-4 my-auto">
        <WalletMultiButton />
      </div>
    </div>
  );
};
