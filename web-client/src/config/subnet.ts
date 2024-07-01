import { defineChain } from "viem";

export const subnet = defineChain({
    id: 202406,
    name: 'ArticChain',
    nativeCurrency: {
        decimals: 18,
        name: 'ArticChain',
        symbol: 'ARC',
    },
    rpcUrls: {
      default: {
        http: ['https://cloudflare-eth.com'],
      },
    },
})