import toast from "react-hot-toast";


export const Keluar = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },

      });

      const data = await response.json();

            toast.success( data.message || "success logout", {
              position: "bottom-right",
              duration: 4000,
              iconTheme: { primary: "#C0562F", secondary: "#fff" },
              icon: "🛒",
              style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
            });



      console.log("Data fetched:", data.message);

    } catch (error : any) {
        
      toast.error(  "server does not respond", { position: "bottom-right", duration: 5000 });
    }
  };