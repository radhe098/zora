'use client';

import { useSendTransaction } from '@privy-io/react-auth';

export default function SendTransactionButton() {
  const { sendTransaction } = useSendTransaction();

  const onSendTransaction = async () => {
    try {
      await sendTransaction({
        to: '0xE3070d3e4309afA3bC9a6b057685743CF42da77C',
        value: BigInt(1e15), // 0.001 ETH in wei
      });
    } catch (err) {
      console.error('Transaction error:', err);
    }
  };

  return (
    <button onClick={onSendTransaction} className="mt-4 p-2 bg-purple-600 text-white rounded">
      Send Transaction
    </button>
  );
}
