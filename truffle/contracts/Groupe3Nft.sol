// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GROUPE3 is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    // Ajout d'un tableau pour stocker les IDs de tokens mintés
    uint256[] private _mintedTokenIds;

    constructor(
        address initialOwner
    ) ERC721("GROUPE3", "GP3") Ownable(initialOwner) {}

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        // Enregistrer l'ID du token minté
        _mintedTokenIds.push(tokenId);
    }

    // Fonction pour obtenir toutes les données de la collection
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
