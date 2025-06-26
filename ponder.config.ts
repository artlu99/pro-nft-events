import { createConfig } from "ponder";

import { TierRegistryAbi } from "./abis/TierRegistryAbi";

export default createConfig({
  chains: {
    base: {
      id: 8453,
      rpc: process.env.PONDER_RPC_URL_1,
    },
  },
  contracts: {
    TierRegistry: {
      chain: "base",
      abi: TierRegistryAbi,
      address: "0x00000000fc84484d585c3cf48d213424dfde43fd",
      startBlock: 31180905,
    },
  },
});
