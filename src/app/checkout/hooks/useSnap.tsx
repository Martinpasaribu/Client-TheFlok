"use client"

import { useEffect, useState } from "react";



const useSnap = () => {
  const [snap, setSnap] = useState<any>(null);

  useEffect(() => {
    // Membuat elemen script untuk memuat Midtrans Snap SDK
    const scriptTag = document.createElement('script');
    scriptTag.src = process.env.NEXT_PUBLIC_MIDTRANS_URL as string; // Pastikan URL valid
    const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_ID as string;

    if (!clientKey) {
      console.error("Midtrans client key is missing");
      return;
    }

    scriptTag.setAttribute('data-client-key', clientKey);

    // Ketika script sudah selesai dimuat, set snap ke window.snap
    scriptTag.onload = () => {
      if (window.snap) {
        setSnap(window.snap);
      } else {
        console.error("Snap SDK failed to load");
      }
    };

    document.body.appendChild(scriptTag);

    // Membersihkan elemen script ketika komponen dibersihkan
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const snapEmbed = (snap_token: string, embedId: string, action: any) => {
    if (snap) {
      snap.embed(snap_token, {
        embedId,
        onSuccess: (result: any) => {
          console.log('Payment Success:', result);
          action.onSuccess(result);
        },
        onPending: (result: any) => {
          console.log('Payment Pending:', result);
          action.onPending(result);
        },
        onClose: (result: any) => {
          console.log('Payment Closed:', result);
          action.onClose(result);
        }
      });
    } else {
      console.error("Snap is not initialized yet.");
    }
  };

  return { snapEmbed };
};

export default useSnap;
