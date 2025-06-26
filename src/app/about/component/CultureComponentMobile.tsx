"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AirIcons, TreeIcons, WayangIcons } from "@/style/icons";

const Title = [
    "Sustainability",
    "Cultural Respect",
    "Serenity"
];

const Desc = [
    "We offer a peaceful sanctuary where guests can unwind and reconnect with nature.",
    "Our villas honor the legacy of Javanese heritage, from architecture to local community support.",
    "We prioritize eco-friendly practices to minimize our environmental impact."
];

export const CultureComponentMobile = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="relative w-full md:px-4 text-center text-xs md:text-lg font-[family-name:var(--font-geist-sans)]">
            <div className="w-full md:max-w-[90rem] grid grid-cols-3 gap-1 md:gap-10">
                {[TreeIcons, WayangIcons, AirIcons].map((icon, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center gap-4 md:gap-10 p-4 cursor-pointer"
                        onClick={() => handleImageClick(index)}
                    >
                        <div
                            className={`underline decoration-[#C0562F] text-color1 h-full w-full ${
                                selectedIndex === index
                                    ? "scale-105 transition-transform duration-300 shadow-md rounded-[5rem] py-2"
                                    : ""
                            }`}
                        >
                            <Image
                                src={icon}
                                alt={`icon-${index}`}
                                width={600}
                                height={500}
                                className="w-full h-full max-h-[3.7rem] md:max-h-22 md:w-max-h-22 object-contain "
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Menampilkan Text */}
            {selectedIndex !== null ? (
                <div
                    key={selectedIndex} // Gunakan `key` dinamis untuk memicu ulang animasi
                    className="absolute -bottom-[6rem] right-0 left-0 flex flex-col items-center gap-2 animate-sidebar_top"
                >
                    <h1 className="text-lg md:text-xl font-bold text-color1">
                        {Title[selectedIndex]}
                    </h1>
                    <h2 className="text-sm md:text-lg text-gray-600 px-4">
                        {Desc[selectedIndex]}
                    </h2>
                </div>
            ): (
                <div className="absolute -bottom-[4rem] right-0 left-0 flex flex-col items-center gap-2 animate-sidebar_top">
                    <h1 className="text-md md:text-xl font-regular  text-slate-700 animate-pulse"> Select One</h1>
                </div>
            )}
        </div>
    );
};
