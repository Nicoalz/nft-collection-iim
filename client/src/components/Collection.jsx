import React from "react";

const mockNFTs = [
  { name: "NFT 1", imageUrl: "https://picsum.photos/200/300?1" },
  { name: "NFT 2", imageUrl: "https://picsum.photos/200/300?2" },
  // Ajoutez plus d'objets NFT si nécessaire
];

function Collection() {
  return (
    <div className="min-h-screen flex flex-col pt-20 items-center bg-blue-100">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">The whole NFT Collection</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {mockNFTs.map((nft, index) => (
            <div
              key={index}
              className="nft-item bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={nft.imageUrl}
                alt={nft.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-medium">{nft.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
