
import { http } from '@/utils/http';
import { NextResponse } from 'next/server';
import { AxiosError } from 'axios';


export async function PUT(req: Request, res:Response) {

  const cookies = req.headers.get('cookie');
  console.log('Cookies from request:', cookies);
  
    try {
        
        const response = await http.put('/session/remove-session')

        
    if (response && response.data) {
        return NextResponse.json(
          { message: response.data.message , data: response.data },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: 'Failed to Deleted cart from external server' },
          { status: 500 }
        );
    }

    } catch (error) {
        
        if (error instanceof AxiosError) {
            return NextResponse.json(
              {
                message:
                  error.response?.data?.message || 'Error in external API request',
              },
              { status: error.response?.status || 500 }
            );
          }
      
          // Penanganan untuk jenis error lain
          return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
          );

    }
    

  
}


