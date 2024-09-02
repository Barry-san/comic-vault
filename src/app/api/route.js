import { NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

export async function POST(request) {
  try {
    const { PAYSTACK_KEY } = envSchema.parse(process.env);
    const { email, amount } = requestSchema.parse(await request.json());

    const res = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      body: JSON.stringify({ email, amount }),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${PAYSTACK_KEY}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({
        isSuccess: true,
        access_code: data.data.access_code,
      });
    } else {
      throw new Error('Paystack authorization failed');
    }
  } catch (error) {
    if (error instanceof ZodError)
      return NextResponse.json({ isSuccess: false, errors: error.errors });
    return NextResponse.json({ isSuccess: false, message: error.message });
  }
}

const requestSchema = z.object({
  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'value must be of type string',
    })
    .email('please provide a valid email')
    .trim(),
  amount: z.number().positive('amount cannot be less than 0'),
});

const envSchema = z.object({
  PAYSTACK_KEY: z.coerce.string(),
});
