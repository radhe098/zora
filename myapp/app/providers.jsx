'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId="cmcafqaw5018el20m3ssr75qw"
      clientId="client-WY6N2NkiNgVRnNdBS93G61fXqLARMT62yNLB7UQ9jHyvo"
      config={{
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets',
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
