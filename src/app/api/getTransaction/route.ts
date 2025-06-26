
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { http } from '@/utils/http';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const transactionId = searchParams.get("order_id");

  if (!transactionId) {
    return NextResponse.json(
      { error: "transaction ID tidak ditemukan di query parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await http.get(`/transaction/get-transaction/${transactionId}`);
    return NextResponse.json(response.data.data); 
  } catch (error: any) {
    console.error('Error fetching data transaction:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch data transaction' }, { status: 500 });
  }
}
