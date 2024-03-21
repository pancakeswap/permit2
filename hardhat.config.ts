import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-abi-exporter";
import "dotenv/config";
import "hardhat-deploy";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
import "@nomicfoundation/hardhat-verify";
import 'solidity-docgen';

const bscTestnet: NetworkUserConfig = {
  url: `https://bsc-testnet.nodereal.io/v1/${process.env.BSC_API_KEY}`, // "https://bsc-testnet.publicnode.com" "https://bsc-testnet.public.blastapi.io"
  chainId: 97,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const bscMainnet: NetworkUserConfig = {
  url: `https://bsc-mainnet.nodereal.io/v1/${process.env.BSC_API_KEY}`, // "https://bsc-dataseed.binance.org/"
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const arbGoerli: NetworkUserConfig = {
  url: "https://goerli-rollup.arbitrum.io/rpc",
  chainId: 421613,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const arbMainnet: NetworkUserConfig = {
  url: "https://arb1.arbitrum.io/rpc",
  chainId: 42161,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const ethGoerli: NetworkUserConfig = {
  url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ETH_GOERLI_API_KEY}`,
  chainId: 5,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const ethMainnet: NetworkUserConfig = {
  url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ETH_MAINNET_API_KEY}`, // "https://eth.llamarpc.com"
  chainId: 1,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const polygonZKEVMTestnet: NetworkUserConfig = {
  url: "https://rpc.public.zkevm-test.net",
  chainId: 1442,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const polygonZKEVMMainnet: NetworkUserConfig = {
  url: "https://zkevm-rpc.com",
  chainId: 1101,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const zkSyncTestnet: NetworkUserConfig = {
  url: "https://testnet.era.zksync.dev",
  chainId: 280,
  accounts: [process.env.KEY_TESTNET!],
  ethNetwork: `https://eth-goerli.g.alchemy.com/v2/${process.env.ETH_GOERLI_API_KEY}`,
  zksync: true,
};

const zkSyncMainnet: NetworkUserConfig = {
  url: "https://zksync-era.blockpi.network/v1/rpc/public", // https://zksync-era.blockpi.network/v1/rpc/public https://zksync.drpc.org
  chainId: 324,
  accounts: [process.env.KEY_MAINNET!],
  ethNetwork: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ETH_MAINNET_API_KEY}`,
  zksync: true,
  verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification"
};

const baseGoerli: NetworkUserConfig = {
  url: "https://rpc.ankr.com/base_goerli",
  chainId: 84531,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const baseMainnet: NetworkUserConfig = {
  url: "https://rpc.ankr.com/base",
  chainId: 8453,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const lineaGoerli: NetworkUserConfig = {
  url: "https://rpc.goerli.linea.build",
  chainId: 59140,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const lineaMainnet: NetworkUserConfig = {
  url: "https://1rpc.io/linea", // https://1rpc.io/linea  https://linea.drpc.org
  chainId: 59144,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const scrollSepolia: NetworkUserConfig = {
  url: "https://1rpc.io/scroll/sepolia",
  chainId: 534351,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const scrollMainnet: NetworkUserConfig = {
  url: "https://rpc.scroll.io",
  chainId: 534352,
  accounts: [process.env.KEY_MAINNET!],
  zksync: false,
};

const sepolia: NetworkUserConfig = {
  url: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
  chainId: 11155111,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const arbSepolia: NetworkUserConfig = {
  url: "https://sepolia-rollup.arbitrum.io/rpc",
  chainId: 421614,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const baseSepolia: NetworkUserConfig = {
  url: "https://base-sepolia.blockpi.network/v1/rpc/public",
  chainId: 84532,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      /** 
      forking: {
        url: bscTestnet.url || '',
      },
      */
      zksync: false,
    },
    bscTestnet: bscTestnet,
    bscMainnet: bscMainnet,
    opBNBTestnet: opBNBTestnet,
    opBNBMainnet: opBNBMainnet,
    arbGoerli: arbGoerli,
    arbMainnet: arbMainnet,
    ethGoerli: ethGoerli,
    ethMainnet: ethMainnet,
    polygonZKEVMTestnet: polygonZKEVMTestnet,
    polygonZKEVMMainnet: polygonZKEVMMainnet,
    zkSyncTestnet: zkSyncTestnet,
    zkSyncMainnet: zkSyncMainnet,
    baseGoerli: baseGoerli,
    baseMainnet: baseMainnet,
    lineaGoerli: lineaGoerli,
    lineaMainnet: lineaMainnet,
    scrollSepolia: scrollSepolia,
    scrollMainnet: scrollMainnet,
    sepolia: sepolia,
    arbSepolia: arbSepolia,
    baseSepolia: baseSepolia
  },
  etherscan: {
    apiKey: process.env.ARBISCAN_API_KEY || '',
    customChains: [
      {
        network: "opBNBTestnet",
        chainId: 5611,
        urls: {
          apiURL: `https://open-platform.nodereal.io/${process.env.BSC_API_KEY}/op-bnb-testnet/contract/`,
          browserURL: "https://testnet.opbnbscan.com/"
        }
      },
      {
        network: "opBNBMainnet",
        chainId: 204,
        urls: {
          apiURL: `https://open-platform.nodereal.io/${process.env.BSC_API_KEY}/op-bnb-mainnet/contract/`,
          browserURL: "https://opbnbscan.com/"
        }
      },
      {
        network: "lineaGoerli",
        chainId: 59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build/"
        }
      },
      {
        network: "lineaMainnet",
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build/"
        }
      },
      {
        network: "polygonZKEVMTestnet",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
          browserURL: "https://testnet-zkevm.polygonscan.com/"
        }
      },
      {
        network: "polygonZKEVMMainnet",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com/api",
          browserURL: "https://zkevm.polygonscan.com/"
        }
      },
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api",
          browserURL: "https://sepolia.scrollscan.com/"
        }
      },
      {
        network: "scrollMainnet",
        chainId: 534352,
        urls: {
          apiURL: "https://api.scrollscan.com/api",
          browserURL: "https://scrollscan.com/"
        }
      },
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/"
        }
      },
      {
        network: "arbSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/"
        }
      },
    ]
  },
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
    ],
  },
  zksolc: {
    version: "latest",
    settings: {},
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  // abiExporter: {
  //   path: "./data/abi",
  //   clear: true,
  //   flat: false,
  // },
  docgen: {
    pages: 'files',
  },
}

export default config
