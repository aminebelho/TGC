// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Brand{
    uint256 public EIN;
    string public brandsName;
    string info;

    constructor(uint256 _EIN, string memory _brandsName){
        EIN = _EIN;
        brandsName = _brandsName;
    }

    function addInfo(string memory _info) public{
        info = _info;
    }

    function changeBrandsName(string memory newBrandsName) public{
        brandsName = newBrandsName;
    }

    function changeBrandsEIN(uint256 newEIN) public{
        EIN = newEIN;
    }

    function upgradeBrandsInfo(string memory _info) public{
        info = _info;
    }

    function getBrand() public view returns(uint256, string memory){
        return (EIN, brandsName);
    }
}