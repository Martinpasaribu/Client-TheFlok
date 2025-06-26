
// Fotmat tanggal untuk params 

export const formatLocalISOIn = (date:any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '12');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Format: YYYY-MM-DDTHH:mm:ss
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  export const formatLocalISOOut = (date:any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Format: YYYY-MM-DDTHH:mm:ss
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  // Format Utama yang digunakan untuk database server

  export const formatBookingDate = (date: Date, type: "checkIn" | "checkOut") => {

    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.error(`Invalid date for ${type}:`, date);
      return null; // Menghindari error
    }
    
    // Tentukan jam berdasarkan tipe (checkIn atau checkOut)
    const hours = type === "checkIn" ? 15 : 12; // 12 siang untuk checkIn, 3 sore untuk checkOut
    date.setHours(hours, 0, 0, 0); // Atur jam, menit, detik, milidetik
  
    // Konversi ke format ISO sesuai zona waktu lokal
    return new Date(date).toISOString(); // Format ISO 8601
  };
  