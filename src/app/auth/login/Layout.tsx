"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { http } from "@/utils/http";
import { borobudur } from '@/style/icons'

import Image from 'next/image'
import Link from "next/link";
import { checkField } from "@/constants";
import toast from "react-hot-toast";
import MainLoading from "@/component/mainLoading/loading";
import { handleMe } from "@/utils/me/getMe";
import { CekRefreshToken } from "@/utils/me/cekRefreshToken";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState("");


  useEffect(() => {
    const shouldRedirect = localStorage.getItem("me");
    if (shouldRedirect) {
      localStorage.removeItem("me");

      router.push("/booking");
    }
  }, [router]);

  // Ini hanya digunakan oleh user yang checkout dengan user baru agar tetap ter-verification
  useEffect(() => {

    const handleRedirectOrFetch = async () => {

      const data = await handleMe()
      const Token = await CekRefreshToken()

      const shouldRedirect = localStorage.getItem("me");

      if (data && !shouldRedirect && Token === true) {

        console.log(" Verify Me ", data ? " Me Verify " : " Me No Verify ")

          
        setTimeout(() => {
          try {
            
            localStorage.setItem("cek", "true");
            router.push("/auth/member");

          } catch (error) {
            console.error("Error to direct:", error);
          }
        }, 1000);
      }
    }

  handleRedirectOrFetch();
  
  }, [router]);


  const handleSubmit = async (e: any) => {

    e.preventDefault();
    setError("");
    setSuccess("");

    const fields = { email, password };
    const errorMessage = checkField(fields);

    if (errorMessage) {
      // setError(errorMessage); // Simpan pesan error tunggal
      toast.error(errorMessage, {
        position: "bottom-right",
        duration: 5000,
        iconTheme: { primary: "#604beb", secondary: "#fff" },
        icon: "⚠️",
        style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
      });
      return;
    }

    setLoad(true)

    if (typeof window !== "undefined" && (window as any).grecaptcha) {
      try {

        

        // Dapatkan token reCAPTCHA
        const token = await (window as any).grecaptcha.execute("6LcEgaYqAAAAAJYATqo66A4IbJlgh6JyGwK2q2Vn", {
          action: "login",
        });

        // Kirim permintaan ke server dengan token reCAPTCHA
        const response = await http.post(`/auth/login`, {
          email, password,
          recaptchaToken: token, // Sertakan token dalam payload
        });

        // setSuccess(response.data.message);

        toast.success(response.data.data.message || "Success login", {
          position: "top-left",
          duration: 1000,
        });

        setLoad(false)

        setTimeout(() => {
          try {
            
            localStorage.setItem("me", "true");
    
            window.location.reload();
          } catch (error) {
            console.error("Error to direct:", error);
          }
        }, 2000);


        
      } catch (err: any) {
        // setError(err.response?.data?.message || "An error occurred. Please try again.");
        setLoad(false)

        if(err.response?.data.status === false) {

          toast.error(err.response?.data?.message || 'server do not responded', {
            position: "bottom-right",
            duration: 5000,
            iconTheme: { primary: "#604beb", secondary: "#fff" },
            icon: "⚠️",
            style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
          });

          setTimeout(() => {
            router.push('/auth/confirm-reset')
          },1000)

        }

        toast.error(err.response?.data?.message || 'server error', {
          position: "bottom-right",
          duration: 5000,
          iconTheme: { primary: "#604beb", secondary: "#fff" },
          icon: "⚠️",
          style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });

      }
    } else {
      setError("reCAPTCHA is not loaded. Please try again later.");
      setLoad(false)
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-gray-100 overflow-hidden px-4">

    { load && (<MainLoading/>)}

      <div className='w-full max-w-[50rem] flex flex-col sm:flex-row justify-center   h-full'>


          <div className='hidden sm:flex justify-center items-center w-full gap-2 bg-white'>

            <div className="flex h-full flex-col justify-around ">

              <div className="text-2xl font-semibold text-color1 flex-center h-full max-h-[8rem]"> 
                <h1> Login </h1>  
              </div>
              
              <div className="h-full flex gap-4 items-center flex-col">
                
                <Image
                      src={borobudur}
                      alt='image cookies'
                      width={200}
                      height={200}
                      className="w-[12rem] h-[12rem] max-w-[8rem] max-h-[6rem] object-cover "
                  />

                  <h1 className="text-xl "> Adhisthana Villas</h1>


              </div>
            </div>

          </div>

          {/* <div className='flex sm:hidden justify-center items-center w-full gap-2 '>

            <div className="flex h-full flex-col justify-around ">

              <div className="text-2xl font-semibold text-color1 flex-center h-full max-h-[8rem]"> 
                <h1> Login </h1>  
              </div>
              
              <div className="h-full flex gap-4 items-center flex-col">
                
                <Image
                      src={borobudur}
                      alt='image cookies'
                      width={200}
                      height={200}
                      className="w-[8rem] h-[8rem] max-w-[6rem] max-h-[5rem] object-cover "
                  />

                  <h1 className="text-xl "> Adhisthana Villas</h1>


              </div>
            </div>

          </div> */}

          <div className="w-full max-w-md mx-auto p-6 bg-white rounded shadow-md  ">
            
             <div className="text-2xl sm:hidden font-semibold text-color1 flex-center h-full max-h-[6rem]"> 
                <h1> Login </h1>  
              </div>

            {/* {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            {success && <p className="mt-4 text-sm text-green-600">{success}</p>}
             */}
            <form className="mt-6 flex flex-col  gap-5" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
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
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-color1 rounded hover:bg-orange-600 focus:outline-none"
              >
                Sign In
              </button>
            </form>

            
            <div className="flex justify-between items-center">

              <Link href="/auth/register"  className=" hover:text-blue-600">
                  <button className="pt-4">               
                    Create Account
                </button>
              </Link>

              <Link href="/auth/confirm-reset"  className=" hover:text-blue-600">
                  <button className="pt-4">               
                    Forgot Password
                </button>
              </Link>

            </div>

          </div>


      </div>

    </div>
  );
}
