"use client"

import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from "react";
import axios from "axios";
import { http } from '@/utils/http';
import MainLoading from '@/component/mainLoading/loading';

const Layout = () => {
    
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [load, setLoad] = useState(false);


  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    setLoad(true);

    if (!password || !confirmPassword) {
      setLoad(false);
      setError("Password fields cannot be empty.");
      return;
    }

    if (password !== confirmPassword) {
      setLoad(false);
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await http.post(`/user/resetPassword`, {
        token,
        password,
        confirmPassword,
      });

      setSuccess(response.data.message);
      
      setTimeout(() => {
        router.push("/auth/login"); // Arahkan ke halaman login setelah sukses
      }, 1000);

    } catch (err : any) {

      setError(err.response?.data?.message || "An error occurred. Please try again.");
      
    } finally {

      setLoad(false);
      
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default Layout