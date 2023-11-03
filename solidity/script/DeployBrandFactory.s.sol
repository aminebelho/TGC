// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {BrandFactory} from "../src/BrandFactory.sol";

contract DeployBrandFactory is Script {
    function run() external returns(BrandFactory) {
        vm.startBroadcast();

        BrandFactory brandFactory = new BrandFactory(
            0xF9D6a5359DC794Dd29155b594f1dFd815A307722,
            0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
        );

        vm.stopBroadcast();

        return brandFactory;
}
}