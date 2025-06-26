
import { NextResponse } from 'next/server';
import axios from 'axios';
import { http } from '@/utils/http';

export async function GET() {

  try {
    const response = await http.get(`/room/getRoom`)
    
    // console.log('Instagram API Response:', response.data); // Log hasilnya
    return NextResponse.json(response.data); // Kirimkan JSON ke frontend
  } catch (error: any) {
    console.error('Error fetching Instagram media:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch Instagram media' }, { status: 500 });
  }
}
