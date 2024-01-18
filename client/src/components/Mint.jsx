import React from "react";
import { useAddress, Web3Button } from "@thirdweb-dev/react";
import {
  groupe3ContractAbi,
  groupe3ContractAddress,
} from "../contracts/Groupe3";

function Mint() {
  const address = useAddress(); // Récupère l'adresse du portefeuille connecté

  return (
    <div className="min-h-screen flex flex-col pt-20 items-center bg-blue-100">
      <div className="text-center  flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Mint a NFT</h1>
        <div className="w-32 h-48 bg-gray-400 rounded-lg shadow-lg mb-4 relative overflow-hidden">
          <img
            src="https://picsum.photos/200/300"
            alt="Hidden NFT"
            className="absolute w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-50" />
        </div>
        {address ? (
          <Web3Button
            contractAddress={groupe3ContractAddress}
            contractAbi={groupe3ContractAbi}
            action={(contract) => contract.call("publicMint")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Mint NFT
          </Web3Button>
        ) : (
          <p className="text-xl text-red-500">Please connect your wallet.</p>
        )}
      </div>
    </div>
  );
}

export default Mint;
