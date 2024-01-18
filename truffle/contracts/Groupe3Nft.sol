// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GROUPE3 is ERC721, ERC721URIStorage, Ownable {
    uint256 public _totalImagesAvailable; // Ajout de la variable pour le nombre total d'images disponibles
    uint256[] private _mintedTokenIds;
    string[] private _imageURIs;

    constructor(
        address initialOwner,
        string[] memory imagesURIS
    ) ERC721("GROUPE3", "GP3") Ownable(initialOwner) {
        _imageURIs = imagesURIS;
        _totalImagesAvailable = _imageURIs.length; // Initialisation avec le nombre total d'images
    }

    function publicMint() public {
        require(_totalImagesAvailable > 0, "All images have been assigned");
        uint256 tokenId = _mintedTokenIds.length;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _imageURIs[tokenId]);
        _mintedTokenIds.push(tokenId);
        _totalImagesAvailable--;
    }

    function getAllCollectionData()
        public
        view
        returns (uint256[] memory, string[] memory)
    {
        uint256[] memory ids = new uint256[](_mintedTokenIds.length);
        string[] memory uris = new string[](_mintedTokenIds.length);

        for (uint256 i = 0; i < _mintedTokenIds.length; i++) {
            ids[i] = _mintedTokenIds[i];
            uris[i] = tokenURI(_mintedTokenIds[i]);
        }

        return (ids, uris);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
