import { http } from "@/utils/http";
import toast from "react-hot-toast";

interface NightProps {
    checkIn: Date | null;
    checkOut: Date | null;
}

export const AddDateToSession = async ({ checkIn, checkOut }: NightProps) => {
    try {
        // Hitung durasi malam hanya jika check-in dan check-out valid
        if (checkIn && checkOut) {
            // Pastikan objek Date valid
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);

            // Hilangkan bagian waktu (jam, menit, detik) dari kedua tanggal
            checkInDate.setHours(0, 0, 0, 0);
            checkOutDate.setHours(0, 0, 0, 0);

            // console.log(`Processed Check-In: ${checkInDate}`);
            // console.log(`Processed Check-Out: ${checkOutDate}`);

            // Hitung durasi malam dengan mengurangi tanggal check-out dari check-in
            const nightDuration = Math.max(
                0,
                (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
            );

            console.log("Night Duration:", nightDuration);

            // Kirim durasi malam ke server
            await http.post(
                `/session/add-to-night`,
                { night: nightDuration },
                { headers: { "Content-Type": "application/json" } }
            );
        }
    } catch (error: any) {
        toast.error(error.response?.data?.message || "Server did not respond.", {
            position: "bottom-right",
            duration: 5000,
            iconTheme: { primary: "#ff0000", secondary: "#fff" },
            icon: "⚠️",
            style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });

        throw new Error(error.response?.data?.message || "Failed to calculate nights.");
    }
};
