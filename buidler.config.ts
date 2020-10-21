import { BuidlerConfig } from "@nomiclabs/buidler/config";

const config: BuidlerConfig = {
  defaultNetwork: "buidlerevm",
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    root: "./",
    sources: "./contracts",
    tests: "./test",
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    version: "0.6.10",
  },
};

export default config;
