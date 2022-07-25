// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import './IERC721.sol';
import './IERC721Metadata.sol';

// interface를 상속 받았으면 interface 안에 있는 모든 함수를 구현해줘야 한다.
// Solidity에서는 다중 상속이 된다.

contract ERC721 is IERC721, IERC721Metadata {
    
    /* Function */
    // 부모의 함수를 자식이 덮어씌울 때 override 사용

    function name() external override view returns (string memory);
    
    function symbol() external override view returns (string memory);

    function tokenURI(uint256 _tokenId) external override view returns (string memory);

    function balanceOf(address _owner) external override view returns (uint);

    function ownerOf(uint _tokenId) external override view returns (address);

    function transferFrom(address _from, address _to, uint _tokenId) external override;

    function approve(address _to, uint _tokenId) external override;

    function getApproved(uint _tokenId) external override view returns (address);

    function setApprovalForAll(address _operator, bool _approved) external override;

    function isApprovalForAll(address _owner, address _operator) external override view returns (bool);
}