'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center">
      <Image src="/next.svg" width={180} height={38} alt="Next.js" />
      <p className="mt-4">
        Edit <code>app/page.jsx</code> to get started.
      </p>
    </div>
  );
}
