'use client';
import PaystackPop from '@paystack/inline-js';
import { useEffect } from 'react';

export default function Paystack() {
  const url =
    process.evn.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'https://comic-valut.vercel.app/api';
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
