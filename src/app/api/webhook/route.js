import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const secret = process.env.PAYSTACK_SECRET;

  const hash = crypto
    .createHmac('sha512', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (hash == req.headers['x-paystack-signature']) {
    const { status, amount } = await request.json();
    console.log(status, amount);
  }

  return NextResponse.json({ isSuccess: true });
}
