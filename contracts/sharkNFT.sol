// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SharkNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721 ("Shark", "SRK") {}

    function mintShark(address _to, string memory tokenURI) 
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();
        
        uint256 currentId = _tokenIds.current();
        _mint(_to, currentId);
        _setTokenURI(currentId, tokenURI);

        return currentId;
    }
}