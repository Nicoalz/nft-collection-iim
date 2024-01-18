// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GROUPE3 is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    uint256 private _totalImagesAvailable; // Ajout de la variable pour le nombre total d'images disponibles
    uint256[] private _mintedTokenIds;
    string[] private _imageURIs;
    mapping(uint256 => bool) private _imageAssigned;

    constructor(address initialOwner)
        ERC721("GROUPE3", "GP3")
        Ownable(initialOwner)
    {
        _imageURIs = [
            'ipfs://bafybeicefp4gw74adzrneu4mgm4crhdorablnpndrp5jz735gy3gfypkba',
            'ipfs://bafybeigu7j3q3bur7xbxd4jrebkgin63zdj2jvnyu3xvp5enozzgznprqm',
            'ipfs://bafybeiddqbyqcwzcw3o7otbmdncfkix2wtbgsts7ol3uggeztblq2na6ga',
            'ipfs://bafybeigr65ngxeeuak3dyfu6rghvzly7pyxeqwqdl4u4mxjb5xjua4ksia',
            'ipfs://bafybeicrtxwekyquafup53vi5pgrw4ixj652xmrsipql2yehala3hfmnha',
            'ipfs://bafybeic7qi7vh6k45jn5zjbh3monyirlgxobpnirvd6xxnfpczcl7e6pu4',
            'ipfs://bafybeihn3cnwpef5x7xhbzuomtravkwqzubfhldcujsm547hw7ighdxwpq',
            'ipfs://bafybeih3lqc2awcm426fkcwyckgcolrsladamhvu2m5woi344nczndhcl4',
            'ipfs://bafybeib2l2tynrgua5bm3bsxkj3tmtcbjrgrig4slu25g5mtgfcepyuooa',
            'ipfs://bafkreibmdzd4eafjq53xpfvvhvjf3vfyjgfgcafttkemwvq5utnda7mqha',
            'ipfs://bafybeia3pupyvyagfmmgcauw5veibugkec3vz6as5q3vs44233tyth26dm'
        ];
        _totalImagesAvailable = _imageURIs.length; // Initialisation avec le nombre total d'images
    }

    function safeMint(address to) public onlyOwner {
        require(_totalImagesAvailable > 0, "All images have been assigned"); // Vérification du nombre d'images disponibles

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);

        uint256 imageIndex = _randomIndex(tokenId);
        _setTokenURI(tokenId, _imageURIs[imageIndex]);
        _imageAssigned[imageIndex] = true;
        _mintedTokenIds.push(tokenId);

        _totalImagesAvailable--; // Décrémentation du nombre d'images disponibles
    }

    function _randomIndex(uint256 tokenId) internal view returns (uint256) {
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, tokenId))) % _imageURIs.length;
        while (_imageAssigned[random]) {
            random = (random + 1) % _imageURIs.length;
        }
        return random;
    }

    function getAllCollectionData() public view returns (uint256[] memory, string[] memory) {
        uint256[] memory ids = new uint256[](_mintedTokenIds.length);
        string[] memory uris = new string[](_mintedTokenIds.length);

        for (uint256 i = 0; i < _mintedTokenIds.length; i++) {
            ids[i] = _mintedTokenIds[i];
            uris[i] = tokenURI(_mintedTokenIds[i]);
        }

        return (ids, uris);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}