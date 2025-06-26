"use server"

import { NextResponse } from 'next/server';
import axios from 'axios';
import { http } from '@/utils/http';

export async function DELETE(req: Request) {

  try {

    const response = await http.delete(`/auth/logout`);

    return NextResponse.json(response.data);

  } catch (error: any) {
    
    console.error('Error logout user', error.response?.data || error.message);
    

    return NextResponse.json({
      message: error.response?.data?.message || error.message ||  'server no responded.' 
    });

  }
}
