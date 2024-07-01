
// config/index.tsx

import { createConfig, cookieStorage, createStorage, http } from 'wagmi'
import { injected, coinbaseWallet, walletConnect } from 'wagmi/connectors'
import { subnet } from './subnet'

// 1. Your WalletConnect Cloud project ID
export const projectId = '45a637c1062e9798e1909b0a87a4bc5b'

// 2. Create wagmiConfig
export const metadata = {
  name: 'bootcamp-avax-final-project',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
export const config = createConfig({
  chains: [subnet],
  transports: {
    [subnet.id]: http("http://127.0.0.1:9650/ext/bc/ArticChain/rpc"),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    })
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})