import { http } from "@/utils/http";
import toast from "react-hot-toast";

export const Logout = async () => {
  try {
    const response = await http.delete(`/auth/logout`);

    toast.success(response.data.data.message || "Success logout", {
      position: "top-left",
      duration: 4000,
    });

    setTimeout(() => {
      window.location.replace('/auth/login'); 
    }, 2000);
    return true ;
  } catch (error: any) {
    toast.error(
      error.response?.data.message || "Server does not respond",
      { position: "bottom-right", duration: 5000 }
    );
    return true ;
  }
};
