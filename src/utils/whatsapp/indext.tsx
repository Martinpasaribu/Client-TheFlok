import React from "react";
import { wa } from "@/style/icons";
import Image from "next/image";

const Whatsapp = () => {
  const handleRedirect = () => {
    const phoneNumber = "6281111177199"; // Format internasional (tanpa "+")
    const message = encodeURIComponent("Halo, saya ingin bertanya mengenai Adhisthana Villas...");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Tambahkan delay sebelum membuka link
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 300);
  };

  return (
    <div
      className="z-40 fixed bottom-5 right-5 md:bottom-10 md:right-10 cursor-pointer max-w-[3rem] max-h-[3rem] tablet-lg:max-w-[4rem] tablet-lg:max-h-[4rem]"
      onClick={handleRedirect}
    >

<Image
  src={wa}
  alt="Wa"
  layout="responsive" // Membuat gambar fleksibel
  width={65} // Sesuai rasio asli
  height={65} // Sesuai rasio asli
  className="object-contain"
/>


    </div>
  );
};

export default Whatsapp;
