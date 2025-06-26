import React from 'react';
import icBack from './ic-back.svg';
import './header.css';
import Image from 'next/image';
// Definisi tipe props untuk Header
interface HeaderProps {
  title?: string; // Judul yang ditampilkan
  onBack ?: () => void; // Fungsi yang dipanggil saat ikon kembali diklik
}

export const Header = ({ title, onBack } : HeaderProps) => {
  return (
    <div className="header-container p-2 sm:p-5">
      <Image 
        src={icBack} 
        alt="ic-back" 
        className="ic-back" 
        onClick={onBack} 
        role="button" 
        aria-label="Back"
      />
      <p className="title">{title}</p>
    </div>
  );
};
