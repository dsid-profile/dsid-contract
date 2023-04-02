require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")

const dotenv = require("dotenv")

dotenv.config()


const privateKey = process.env.PRIVATE_KEY || "" 
const infuraKey = process.env.INFURA_API_KEY || ""
const etherscanApi = process.env.ETHERSCAN_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  networks: {    
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    bnb: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [privateKey]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
  },
  etherscan: {
    apiKey: etherscanApi
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './tests',
    deploy: './deploy'
  },
  mocha: {
    timeout: 60000
  }

};
