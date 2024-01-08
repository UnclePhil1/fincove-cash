"use client";
import React from "react";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  argentWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { config } from "process";
import { SessionProvider } from "next-auth/react";

const projectId = "df4b33c621ff53615df4b05f1b15d13a";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: "Fincove",
  projectId: projectId,
  chains,
});

const demoAppInfo = {
  appName: "Fincove",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      injectedWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      argentWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

export default Providers;
