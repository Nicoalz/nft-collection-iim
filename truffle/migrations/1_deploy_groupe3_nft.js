// migrations/2_deploy_contract.js
const GROUPE3 = artifacts.require("GROUPE3");

module.exports = function (deployer) {
  // Deploy the GROUPE3 contract
  deployer.deploy(GROUPE3, "<YourInitialOwnerAddress>");
};
