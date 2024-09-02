'use client';
import dynamic from 'next/dynamic';

import { useEffect } from 'react';

export default function Paystack() {
  const PaystackPop = dynamic(() => import('@paystack/inline-js'), {
    ssr: false,
  });
  const url = 'https://comic-vault.vercel.app/api';
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: 'oyeyemimubarak6@gmail.com',
        amount: 3000,
      }),
    }).then((res) =>
      res.json().then((data) => {
        const popup = new PaystackPop();
        popup.resumeTransaction(data.access_code).then(console.log);
        console.log(data);
      })
    );
  });

  return (
    <div>
      <h1>Paystack o</h1>
    </div>
  );
}
