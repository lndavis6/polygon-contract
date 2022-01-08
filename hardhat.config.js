require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MAIN_PRIVATE_KEY = process.env.MAIN_PRIVATE_KEY;
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
      gasPrice: 8000000000
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com/v1/13201e87837484e0b4b3dad3cc7aa30fbb2dfb6f",
      accounts: [MAIN_PRIVATE_KEY]
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
  mocha: {
    timeout: 20000
  }
}