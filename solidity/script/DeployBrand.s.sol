// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {Brand} from "../src/Brand.sol";

contract DeployBrand is Script {
    function run() external returns(Brand) {
        vm.startBroadcast();
        Brand brand = new Brand(0, "");
        vm.stopBroadcast();

        return brand;
    }
}
