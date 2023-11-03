// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./Brand.sol"; 
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";


contract BrandFactory is AccessControl, Pausable{

    //mappings related to MODERATING
    mapping(address => bool) isModerator;
    mapping(address => uint8) voteCounter_addModerator;
    mapping(address => uint8) voteCounter_removeModerator;
    mapping(address => mapping(address => bool)) hasVotedFor_addModerator;
    mapping(address => mapping(address => bool)) hasVotedFor_removeModerator;

    //mappings relted to BRANDS
    mapping(uint256 => bool) isEinTaken;
    mapping(uint256 => Brand) listOfBrands;
    mapping(uint256 => uint8) voteCounter_addBrand;
    mapping(uint256 => uint8) voteCounter_removeBrand;
    mapping(address => mapping(uint256 => bool)) hasVotedFor_addBrand;
    mapping(address => mapping(uint256 => bool)) hasVotedFor_removeBrand;

    //mappings related to PAUSER
    mapping(address => uint8) voteCounter_pauser;
    mapping(address => mapping(address => bool)) hasVotedForPauser;

    address contractPauser;
    address[] public moderators;

    bytes32 public constant MODERATOR_ROLE = keccak256("MODERATOR_ROLE");
    bytes32 constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    modifier doesExist(uint256 EIN){
        require(isEinTaken[EIN], "The brand isn't in the list");
        _;
    }

    uint8 constant minVotes_Moderator = 3;
    uint8 constant minVotes_brand     = 2;
    uint8 constant minVotes_pauser    = 2;

    error BrandFactory__SamePauser();
    error BrandFactory__NotModerator();
    error BrandFactory__NotEnoughVotes();
    error BrandFactory__AlreadyModerator();
    error BrandFactory__AlreadyVotedForThisPauser();
    error BrandFactory__HaventVotedForThisPauserYet();
    error BrandFactory__AlreadyVotedForThisModerator();
    error BrandFactory__HaventVotedForThisModeratorYet();

    constructor(address _contractPauser, address initialModerator) {
        _grantRole(PAUSER_ROLE, _contractPauser);
        contractPauser = _contractPauser;

        _grantRole(MODERATOR_ROLE, initialModerator);
            isModerator[initialModerator] = true;
            moderators.push(initialModerator);

        if(hasRole(MODERATOR_ROLE, _msgSender()) == false){
            _grantRole(MODERATOR_ROLE, _msgSender());
            isModerator[_msgSender()] = true;
            moderators.push(_msgSender());          
        }
    }

    function setNewPauser(address newContractPauser) public onlyRole(MODERATOR_ROLE) whenNotPaused {
        if(newContractPauser == contractPauser) {revert BrandFactory__SamePauser();}
        if(moderators.length >= 2 && voteCounter_pauser[newContractPauser] < minVotes_pauser) {revert BrandFactory__NotEnoughVotes();}
        _grantRole(PAUSER_ROLE, newContractPauser);
        _revokeRole(PAUSER_ROLE, contractPauser);
        contractPauser = newContractPauser;
    }

    function upVotePauser(address newContractPauser) public onlyRole(MODERATOR_ROLE) whenNotPaused {
        if(newContractPauser == contractPauser) {revert BrandFactory__SamePauser();}
        if(hasVotedForPauser[_msgSender()][newContractPauser]) {revert BrandFactory__AlreadyVotedForThisPauser();}
        hasVotedForPauser[_msgSender()][newContractPauser] = true;
        voteCounter_pauser[contractPauser] += 1;
    }

    function downVotePauser(address newContractPauser) public onlyRole(MODERATOR_ROLE) whenNotPaused {
        if(newContractPauser == contractPauser) {revert BrandFactory__SamePauser();}
        if(hasVotedForPauser[_msgSender()][newContractPauser] == false) {revert BrandFactory__AlreadyVotedForThisPauser();}
        hasVotedForPauser[_msgSender()][newContractPauser] = true;
        voteCounter_pauser[contractPauser] -= 1;
    }

    function attributeModeratorRole(address _to) public onlyRole(MODERATOR_ROLE){
        if(isModerator[_to]) {revert BrandFactory__AlreadyModerator();}
        if(moderators.length > minVotes_Moderator){
            if(voteCounter_addModerator[_to] < minVotes_Moderator) {revert BrandFactory__NotEnoughVotes();}
            _grantRole(MODERATOR_ROLE, _to);
            isModerator[_to] = true;
        }
        else{
            if(voteCounter_addModerator[_to] < moderators.length) {revert BrandFactory__NotEnoughVotes();}
            _grantRole(MODERATOR_ROLE, _to);
            isModerator[_to] = true;
        }
        moderators.push(_to);
    }

    function upVoteModerator_add(address _for) public onlyRole(MODERATOR_ROLE){
        if(isModerator[_for]) {revert BrandFactory__AlreadyModerator();}
        if(hasVotedFor_addModerator[_msgSender()][_for]) {revert BrandFactory__AlreadyVotedForThisModerator();}
        voteCounter_addModerator[_for] += 1;
        hasVotedFor_addModerator[_msgSender()][_for] = true;
    }

    function downVoteModerator_add(address _for) public onlyRole(MODERATOR_ROLE){
        if(isModerator[_for] == false) {revert BrandFactory__NotModerator();}
        if(hasVotedFor_addModerator[_msgSender()][_for] == false) {revert BrandFactory__HaventVotedForThisModeratorYet();}
        voteCounter_addModerator[_for] -= 1;
        hasVotedFor_addModerator[_msgSender()][_for] = false;
    }

    function removeModeratorRole(address _from) public onlyRole(MODERATOR_ROLE){
        if(isModerator[_from] == false) {revert BrandFactory__NotModerator();}
        if(moderators.length > minVotes_Moderator){
            if(voteCounter_removeModerator[_from] < minVotes_Moderator) {revert BrandFactory__NotEnoughVotes();}
            _revokeRole(MODERATOR_ROLE, _from);
            isModerator[_from] = false;
        }
        else{
            if(voteCounter_removeModerator[_from] < moderators.length -1) {revert BrandFactory__NotEnoughVotes();}
            _revokeRole(MODERATOR_ROLE, _from);
            isModerator[_from] = false;
        }

        require(moderators.length > 1, "There should be at least one moderator");
        for (uint256 i = 0; i < moderators.length; i++) {
            if (moderators[i] == _from) {
                if (i != moderators.length - 1) {
                    moderators[i] = moderators[moderators.length - 1];
                }
                moderators.pop();
                break;
            }
        }    
    }

    function upVoteModerator_remove(address _for) public onlyRole(MODERATOR_ROLE){
        if(hasVotedFor_removeModerator[_msgSender()][_for]) {revert BrandFactory__AlreadyVotedForThisModerator();}
        voteCounter_removeModerator[_for] += 1;
        hasVotedFor_removeModerator[_msgSender()][_for] = true;
    }

    function downVoteModerator_remove(address _for) public onlyRole(MODERATOR_ROLE){
        if(hasVotedFor_removeModerator[_msgSender()][_for] == false) {revert BrandFactory__HaventVotedForThisModeratorYet();}
        voteCounter_removeModerator[_for] -= 1;
        hasVotedFor_removeModerator[_msgSender()][_for] = false;
    }

    function addBrand(uint256 EIN, string memory brandsName) public whenNotPaused onlyRole(MODERATOR_ROLE) {
        require(!isEinTaken[EIN], "This brand has already been added");
        if(moderators.length >= 2 && voteCounter_addBrand[EIN] < minVotes_brand) {revert BrandFactory__NotEnoughVotes();}
        isEinTaken[EIN] = true;
        listOfBrands[EIN] = new Brand(EIN, brandsName);
    }

    function upVoteBrand_add(uint256 EIN) public whenNotPaused onlyRole(MODERATOR_ROLE){
        if(hasVotedFor_addBrand[_msgSender()][EIN]) {revert BrandFactory__AlreadyVotedForThisModerator();}
        voteCounter_addBrand[EIN] += 1;
        hasVotedFor_addBrand[_msgSender()][EIN] = true;
    }

    function downVoteBrand_add(uint256 EIN) public whenNotPaused onlyRole(MODERATOR_ROLE){
        if(hasVotedFor_addBrand[_msgSender()][EIN] == false) {revert BrandFactory__HaventVotedForThisModeratorYet();}
        voteCounter_addBrand[EIN] -= 1;
        hasVotedFor_addBrand[_msgSender()][EIN] = false;
    }

    function removeBrand(uint256 EIN) public whenNotPaused doesExist(EIN) onlyRole(MODERATOR_ROLE){
        require(isEinTaken[EIN] == false, "The brand isn't in the list");
        if(moderators.length >= 2 && voteCounter_addBrand[EIN] < minVotes_brand) {revert BrandFactory__NotEnoughVotes();}
        isEinTaken[EIN] = false;
        delete listOfBrands[EIN];
    }

    function upVoteBrand_remove(address _for) public whenNotPaused onlyRole(MODERATOR_ROLE){
        if(hasVotedFor_removeModerator[_msgSender()][_for]) {revert BrandFactory__AlreadyVotedForThisModerator();}
        voteCounter_removeModerator[_for] += 1;
        hasVotedFor_removeModerator[_msgSender()][_for] = true;
    }

    function downVoteBrand_remove(address _for) public whenNotPaused onlyRole(MODERATOR_ROLE){
        if(hasVotedFor_removeModerator[_msgSender()][_for] == false) {revert BrandFactory__HaventVotedForThisModeratorYet();}
        voteCounter_removeModerator[_for] -= 1;
        hasVotedFor_removeModerator[_msgSender()][_for] = false;
    }


    function changeBrandsName(uint256 EIN, string memory newName) public whenNotPaused doesExist(EIN) onlyRole(MODERATOR_ROLE){
        Brand brand = listOfBrands[EIN];
        brand.changeBrandsName(newName);
    }

    function changeBrandsEIN(uint256 EIN, uint256 newEIN) public whenNotPaused doesExist(EIN) onlyRole(MODERATOR_ROLE){
        Brand brand = listOfBrands[EIN];
        brand.changeBrandsEIN(newEIN);
    }

    function upgradeBrandsInfo(uint256 EIN, string memory info) public whenNotPaused doesExist(EIN) onlyRole(MODERATOR_ROLE){
        Brand brand = listOfBrands[EIN];
        brand.upgradeBrandsInfo(info);
    }

    function getBrand(uint256 EIN) public view doesExist(EIN) returns(uint256, string memory){
        Brand brand = listOfBrands[EIN];
        return brand.getBrand();
    }

    function getModeratorsList() public view returns(address[] memory){
        return moderators;
    }

    function getPauser() public view returns(address){
        return contractPauser;
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }
}