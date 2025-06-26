"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 3000);

    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-6">
      <h1 className="text-9xl font-bold text-red-500 animate-bounce">404</h1>
      <p className="text-2xl mt-4 font-semibold text-gray-300">
        Oops! The page you are looking for was not found.
      </p>


      <p className="mt-2 text-gray-400">
        You will be directed to the inner homepage{" "}
        <span className="text-red-400 font-semibold">{countdown}</span> second.
      </p>


      <Link href="/">
        <div className="mt-6 px-6 py-3 bg-color1 hover:bg-orange-800 text-white text-lg font-medium rounded-lg shadow-md transition-all duration-300">
          <h1>Back To Home Page</h1>
        </div>
      </Link>

    </div>
  );
}
