import { NextRequest, NextResponse } from 'next/server';
import { http } from '@/utils/http'; // Pastikan http sudah dikonfigurasi dengan benar
import accessTokens from '@/utils/accesToken';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user");

  if (!user) {
    return NextResponse.json(
      { error: "User ID tidak ditemukan di query parameter" },
      { status: 400 }
    );
  }

  try {
    // Pastikan endpoint di sini sesuai dan dapat diakses
    const response = await accessTokens.get(`/transaction/get-transaction-user/${user}`);

    // Cek jika response.data.data ada sebelum mengirimkan respons
    if (response.data && response.data.data) {
      return NextResponse.json(response.data.data);
    } else {
      return NextResponse.json(
        { error: "Data transaksi tidak ditemukan" },
        { status: 404 }
      );
    }
  } catch (error: any) {
    // Tangani error dengan lebih spesifik
    console.error("Error fetching transaction:", error.response?.data || error.message);

    // Ambil pesan error dari server, jika ada
    const errorMessage = error.response?.data?.message || error.response?.data || error.message || "Internal Server Error";

    // Kirimkan respons error ke klien
    return NextResponse.json(
      { error: errorMessage },
      { status: error.response?.status || 500 }
    );
  }
}
