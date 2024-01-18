import React from "react";
import { useAddress, useContract } from "@thirdweb-dev/react";

const nftContractAddress = "your_nft_contract_address_here";
const nftContractABI = []; // Remplacez ceci par l'ABI de votre contrat NFT

function Mint() {
  const address = useAddress(); // Récupère l'adresse du portefeuille connecté
  const nftContract = useContract(nftContractAddress, nftContractABI); // Initialiser le contrat NFT

  const mintNFT = async () => {
    if (!address) {
      console.error("Wallet not connected!");
      return;
    }

    try {
      const tx =
        await nftContract.functions.mintNft(/* Paramètres requis par la fonction mintNft */);
      console.log("NFT minted!", tx);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

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
          <button
            onClick={mintNFT}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Mint NFT
          </button>
        ) : (
          <p className="text-xl text-red-500">Please connect your wallet.</p>
        )}
      </div>
    </div>
  );
}

export default Mint;
