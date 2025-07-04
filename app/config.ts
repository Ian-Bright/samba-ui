import { http, createConfig } from "wagmi"
import { mainnet, sepolia, anvil, base } from "wagmi/chains"
import { injected, metaMask, safe } from "wagmi/connectors"

const projectId = "YOUR_PROJECT_ID" // Replace with your WalletConnect project ID

export const config = createConfig({
  chains: [mainnet, sepolia, anvil, base],
  connectors: [injected(), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [anvil.id]: http(),
    [base.id]: http(),
  },
})
