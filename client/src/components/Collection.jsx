import {
  groupe3ContractAbi,
  groupe3ContractAddress,
} from "../contracts/Groupe3";
import React, { useEffect, useState } from "react";
import { ChainId } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

function Collection() {
  const [nfts, setNfts] = useState([]);
  const sdk = new ThirdwebSDK(ChainId.Mumbai);

  function convertIpfsUriToHttpUrl(ipfsUri) {
    const ipfsPrefix = "ipfs://";
    const httpPrefix = "https://ipfs.io/ipfs/";

    if (ipfsUri.startsWith(ipfsPrefix)) {
      return ipfsUri.replace(ipfsPrefix, httpPrefix);
    } else {
      console.error("Invalid IPFS URI:", ipfsUri);
      return null;
    }
  }

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const contract = await sdk.getContractFromAbi(
          groupe3ContractAddress,
          groupe3ContractAbi
        );
        console.log({ contract });
        const [tokenIds, ipfsURI] = await contract.call("getAllCollectionData");
        console.log({ tokenIds, ipfsURI });
        const nfts = tokenIds.map((tokenId, index) => {
          return {
            id: tokenIds[index].toString(),
            ipfsURI: convertIpfsUriToHttpUrl(ipfsURI[index]),
          };
        });
        console.log({ nfts });
        setNfts(nfts);
      } catch (error) {
        console.error("Failed to fetch NFTs: ", error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-20 items-center bg-blue-100">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">The whole NFT Collection</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {nfts.map((nft, index) => (
            <div
              key={index}
              className="nft-item bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src='https://ipfs.io/ipfs/QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE'
                alt={nft.ipfsURI}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-medium">NFT #{nft.id}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
