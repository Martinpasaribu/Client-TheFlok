
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { http } from '@/utils/http';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const transactionId = searchParams.get("order_id");

  if (!transactionId) {
    return NextResponse.json(
      { error: "transaction ID not found in url parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await http.get(`/transaction/update-status-failed/${transactionId}`);
    return NextResponse.json(response.data); 
  } catch (error: any) {
    console.error('Error fetching data transaction:', error.response?.data || error.message);
    return NextResponse.json({  error: error.response?.data?.message ||'Failed to fetch data transaction' });
  }
}
