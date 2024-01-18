// migrations/2_deploy_contract.js
const GROUPE3 = artifacts.require("GROUPE3");

const imgs = [
  "ipfs://bafybeicefp4gw74adzrneu4mgm4crhdorablnpndrp5jz735gy3gfypkba",
  "ipfs://bafybeigu7j3q3bur7xbxd4jrebkgin63zdj2jvnyu3xvp5enozzgznprqm",
  "ipfs://bafybeiddqbyqcwzcw3o7otbmdncfkix2wtbgsts7ol3uggeztblq2na6ga",
  "ipfs://bafybeigr65ngxeeuak3dyfu6rghvzly7pyxeqwqdl4u4mxjb5xjua4ksia",
  "ipfs://bafybeicrtxwekyquafup53vi5pgrw4ixj652xmrsipql2yehala3hfmnha",
  "ipfs://bafybeic7qi7vh6k45jn5zjbh3monyirlgxobpnirvd6xxnfpczcl7e6pu4",
  "ipfs://bafybeihn3cnwpef5x7xhbzuomtravkwqzubfhldcujsm547hw7ighdxwpq",
  "ipfs://bafybeih3lqc2awcm426fkcwyckgcolrsladamhvu2m5woi344nczndhcl4",
  "ipfs://bafybeib2l2tynrgua5bm3bsxkj3tmtcbjrgrig4slu25g5mtgfcepyuooa",
  "ipfs://bafkreibmdzd4eafjq53xpfvvhvjf3vfyjgfgcafttkemwvq5utnda7mqha",
  "ipfs://bafybeia3pupyvyagfmmgcauw5veibugkec3vz6as5q3vs44233tyth26dm",
];

module.exports = function (deployer, network, accounts) {
  // Deploy the GROUPE3 contract
  deployer.deploy(GROUPE3, accounts[0], imgs).then(function (instance) {
    // Log the address of the deployed contract
    console.log(`GROUPE3 contract deployed at ${instance.address}`);
  });
};
