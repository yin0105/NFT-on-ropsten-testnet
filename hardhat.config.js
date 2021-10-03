/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
module.exports = {
  defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: process.env.API_URL,
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
   solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
