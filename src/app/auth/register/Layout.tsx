"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { http } from "@/utils/http";
import { borobudur } from '@/style/icons'

import Image from 'next/image'
import { checkField } from "@/constants";
import toast from "react-hot-toast";
import MainLoading from "@/component/mainLoading/loading";


export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e: any) => {

    e.preventDefault();
    setError("");
    setSuccess("");

    if( password.length < 6){
      
        toast.error('Password must be at least 6 characters ', {
          position: "bottom-right",
          duration: 5000,
          iconTheme: { primary: "#604beb", secondary: "#fff" },
          icon: "⚠️",
          style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });
        return 
    }

    setLoad(true)

    const fields = { email, password, name,title,phone, };
    const errorMessage = checkField(fields);

    if (errorMessage) {
      setError(errorMessage); // Simpan pesan error tunggal
      toast.error(errorMessage, {
        position: "bottom-right",
        duration: 5000,
        iconTheme: { primary: "#604beb", secondary: "#fff" },
        icon: "⚠️",
        style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
      });
      return;
    }

    console.log("Form submitted:", fields);
 
    if (typeof window !== "undefined" && (window as any).grecaptcha) {
      try {
        // Dapatkan token reCAPTCHA
        const token = await (window as any).grecaptcha.execute("6LcEgaYqAAAAAJYATqo66A4IbJlgh6JyGwK2q2Vn", {
          action: "register",
        });

        // Kirim permintaan ke server dengan token reCAPTCHA
        const response = await http.post(`/user/register`, {
          email, password, name,title,phone,
          recaptchaToken: token, // Sertakan token dalam payload
        });

        setSuccess(response.data.message);
          toast.success(response.data.message, {
            position: "bottom-right",
            duration: 1000,
            iconTheme: { primary: "#C0562F", secondary: "#fff" },
            style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
          });

        setLoad(false)

        setTimeout(() => {
          router.push("/booking");
        }, 3000);

      } catch (err: any) {

        setError(err.response?.data?.message || "An error occurred. Please try again.");
      
      } finally  {
        setLoad(false)
      }

    } else {
      setLoad(false)
      setError("reCAPTCHA is not loaded. Please try again later.");
    }
  };

  return (
    <div className="flex-center gap-8 items-center justify-center min-h-screen bg-gray-100 overflow-hidden sm:pt-[2rem] px-4">

    { load && (<MainLoading/>)}

        <div className="w-full max-w-[50rem] flex flex-row justify-center h-full">

          <div className='hidden w-full  sm:flex justify-center items-center gap-2 bg-white'>

            <div className="flex h-full flex-col justify-around ">

              <div className="text-2xl font-semibold text-color1 flex-center h-full max-h-[13rem]"> 
                <h1> Register </h1>  
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

          <div className="w-full max-w-md max-auto p-6 bg-white rounded shadow-md">
            
  
            <div className="text-xl sm:hidden font-semibold text-color1 flex-center h-full max-h-[1rem] mb-[3rem]"> 
              <h1> Register </h1>  
            </div>

            {/* {error && <p className="mt-4 text-sm text-red-600">{error}</p>} */}
            {/* {success && <p className="mt-4 text-sm text-green-600">{success}</p>} */}
            
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            
              <div className="flex justify-around items-center gap-4 w-full">
                {['Mr.', 'Mrs.', 'Ms.'].map((item) => (
                  <div key={item} className="flex items-center">
                    <input
                      id={item} // Berikan ID unik berdasarkan nilai radio
                      type="radio"
                      name="title"
                      value={item}
                      checked={item === title} // Bandingkan dengan state `title`
                      onChange={(e) => setTitle(e.target.value)} // Perbarui state `title` saat dipilih
                      required
                      className="w-4 h-4 appearance-none rounded-full border border-color2 checked:bg-color1 checked:border-color1 focus:ring-2 focus:ring-white"
                    />
                    <label
                      htmlFor={item} // Hubungkan label dengan input menggunakan atribut `htmlFor`
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 mt-1  text-gray-900 text-sm rounded-lg  w-full p-2 md:p-3"
                />
              </div>

              <div className="mb-2">
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
              <div className="mb-2">
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

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 md:p-3"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-color1 rounded hover:bg-orange-600 focus:outline-none"
              >
                Sign Up
              </button>
            </form>

          </div>

        </div>
    </div>
  );
}
