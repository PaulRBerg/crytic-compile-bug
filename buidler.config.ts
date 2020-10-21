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
    version: "0.7.4",
  },
};

export default config;
