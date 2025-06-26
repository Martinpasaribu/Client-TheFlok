/* eslint-disable react/prop-types */

import { Header } from '../Header';
import './layout.css';

// Definisi tipe props untuk Layout
interface LayoutProps {
    title?: string; // Opsional, karena tidak ada default value pada kode
    children: React.ReactNode; // Elemen React apa pun sebagai anak
    onBack?: () => void; // Fungsi opsional untuk menangani tombol kembali
    full?: boolean; // Nilai boolean opsional
    noHeader?: boolean; // Nilai boolean opsional
  }

export const Main_Layout = ({ title, children, onBack, full, noHeader } : LayoutProps) => {
    return (
        <div className="layout-container pt-[5.2rem] sm:pt-[5.5rem] md:pt-[7rem]">
            {!noHeader && (
                <Header title={title} onBack={onBack} />
            )}
            <div className={`layout-content ${full && 'full'}`}>{children}</div>
        </div>
    );
}