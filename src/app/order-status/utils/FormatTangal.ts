export const formatTanggal = (isoDate: string): string => {
    const tanggal = new Date(isoDate);
  
    // Pastikan tipe option sesuai dengan `DateTimeFormatOptions`
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', // "long", "short", atau "narrow"
      year: 'numeric', // "numeric" atau "2-digit"
      month: 'long',   // "long", "short", atau "narrow"
      day: 'numeric',  // "numeric" atau "2-digit"
      hour: '2-digit', // "numeric" atau "2-digit"
      minute: '2-digit', // "numeric" atau "2-digit"
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(tanggal);
  };
