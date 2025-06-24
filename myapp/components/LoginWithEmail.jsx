'use client';

import { useState } from 'react';
import { useLoginWithEmail } from '@privy-io/react-auth';

export default function LoginWithEmail() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const { sendCode, loginWithCode } = useLoginWithEmail();

  return (
    <div className="flex flex-col gap-2">
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={() => sendCode({ email })} className="p-2 bg-blue-500 text-white rounded">
        Send Code
      </button>
      <input
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={() => loginWithCode({ code })} className="p-2 bg-green-500 text-white rounded">
        Login
      </button>
    </div>
  );
}
