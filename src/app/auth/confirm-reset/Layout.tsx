"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { http } from "@/utils/http";
import MainLoading from "@/component/mainLoading/loading";

export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    setError("");
    setSuccess("");

    setLoad(true);

    if (!email) {
      setLoad(false);
      setError("Email fields cannot be empty.");
      return;
    }

    if (typeof window !== "undefined" && (window as any).grecaptcha) {
      try {
        // Dapatkan token reCAPTCHA
        const token = await (window as any).grecaptcha.execute("6LcEgaYqAAAAAJYATqo66A4IbJlgh6JyGwK2q2Vn", {
          action: "confirm_reset",
        });

        // Kirim permintaan ke server dengan token reCAPTCHA
        const response = await http.post(`/user/confirmReset`, {
          email,
          recaptchaToken: token, // Sertakan token dalam payload
        });

        setSuccess(response.data.message);
        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);

      } catch (err: any) {

        setError(err.response?.data?.message || "An error occurred. Please try again.");

      } finally {

        setLoad(false);

      }

    } else {
      setError("reCAPTCHA is not loaded. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

    { load && (<MainLoading/>)}

      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold text-center">Reset Password</h2>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-600">{success}</p>}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email confirm
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
