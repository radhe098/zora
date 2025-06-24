'use client';

import Home from '../components/Home';
import LoginWithEmail from '../components/LoginWithEmail';
import SendTransactionButton from '../components/SendTransactionButton';

export default function Page() {
  return (
    <main className="p-8">
      <Home />
      <LoginWithEmail />
      <SendTransactionButton />
    </main>
  );
}
