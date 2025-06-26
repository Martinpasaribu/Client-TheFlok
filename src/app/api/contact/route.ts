import { http } from '@/utils/http';
import { NextResponse } from 'next/server';
import { AxiosError } from 'axios'; // Import AxiosError

export async function POST(req: any) {
  const { email } = await req.json(); // Parse the JSON body

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const response = await http.post('/contact/addSubscribe', { email });

    if (response && response.data) {
      return NextResponse.json({ message: response.data.message || 'Subscription successful!' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Failed to subscribe. No response from external server.' }, { status: 500 });
    }
  } catch (error: unknown) {
    console.error('Error in external request:', error);

    // Check if the error is an instance of AxiosError
    if (error instanceof AxiosError) {
      return NextResponse.json({
        message: error.response?.data?.message || 'An error occurred. Please try again later.',
      }, { status: 500 });
    }

    // Handle unexpected error types
    return NextResponse.json({ message: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}
