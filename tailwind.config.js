/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    
    
  ],
  // mode: "jit",

  darkMode: 'class',
  
  theme: {

    screens: {

      // Ukuran HP (Portrait)

      'hp-sm': '370px',
      'hp-md': '388px',
      'hp-lg': '425px',
      'hp-xl': '500px',

      // HP Landscape
      'hp-landscape': '740px',

      // Tailwind Default
      'sm': '640px',           // Small screens
      'md': '768px',           // Medium screens (tablet potrait)
      'lg': '1024px',          // Large screens (tablet landscape/laptop)
      'xl': '1280px',          // Extra large screens (desktop)
      '2xl': '1536px',         // 2x extra large

      // Custom Breakpoints
      'desktop': '980px',      // Desktop medium
      'tablet-lg': '870px',
      'tablet-xl': '1160px',
      'tablet-xxl': '1240px',
      'desktop-xl': '1441px',
      'pc': '1706px',          // PC minimum
      'pc-lg': '1920px',       // PC full HD
      

      // Tinggi layar minimum (Potrait)
      'h-hp': { raw: '(min-height: 350px)' }, 
      'h-hp1': { raw: '(min-height: 370px)' }, 
      'h-hp2': { raw: '(min-height: 390px)' }, 
      'h-hp4': { raw: '(min-height: 410px)' }, 
      'h-hp5': { raw: '(min-height: 430px)' }, 
      'h-hp6': { raw: '(min-height: 450px)' }, 
      'h-hp7': { raw: '(min-height: 470px)' }, 

      'h-sm': { raw: '(min-height: 600px)' }, 
      'h-sm1': { raw: '(min-height: 640px)' }, 

      'h-md': { raw: '(min-height: 758px)' },
      'h-md1': { raw: '(min-height: 798px)' },
      'h-md2': { raw: '(min-height: 820px)' },

      'h-lg': { raw: '(min-height: 900px)' },
      'h-xl': { raw: '(min-height: 1080px)' },



      // Tinggi layar maksimum
      'h-max-sm': { raw: '(max-height: 600px)' },
      'h-max-md': { raw: '(max-height: 768px)' },
      'h-max-md': { raw: '(max-height: 840px)' },
      'h-max-lg': { raw: '(max-height: 900px)' },
      'h-max-xl': { raw: '(max-height: 1080px)' },

      'h-max-hp': { raw: '(max-height: 350px)' }, 
      'h-max-hp1': { raw: '(max-height: 370px)' }, 
      'h-max-hp2': { raw: '(max-height: 390px)' }, 
      'h-max-hp4': { raw: '(max-height: 410px)' }, 
      'h-max-hp5': { raw: '(max-height: 430px)' }, 
      'h-max-hp6': { raw: '(max-height: 450px)' }, 


      // Breakpoint untuk global css
      'max-sm': { raw: '(max-width: 640px)' },
      'max-md': { raw: '(max-width: 768px)' },
      'max-md': { raw: '(max-width: 768px)' },
      'max-md': { raw: '(max-width: 768px)' },
    },

    extend: {


      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
      },

      keyframes: {
        bag: {
          '0%': {  opacity: '0' },
          '100%': {  opacity: '1' },
        },
        modal: {
          '0%': {  opacity: '0' },
          '100%': {  opacity: '1' },
        },
        source: {
          '0%': { transform: 'translateX(30%)', opacity:'0'},
          '100%': { transform: 'translateX(0%)', opacity:'1' },
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        spin_slow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        lompat: {
          '100%, 80%, 60%, 50%, 40%, 20%, 10%, 0%': {
            transform: 'translateY(0) scaleY(1)', // Posisi awal dan akhir, dan posisi tengah
          },
          '30%': {
            transform: 'translateY(-6px) scaleY(0.95)', // Posisi puncak lompatan, mengurangi tinggi elemen
          },
          '70%': {
            transform: 'translateY(-1px) scaleY(1.05)', // Kembali ke posisi normal sambil menambah tinggi elemen
          },
        },

        muncul: {
          '0%': { opacity: 0, transform: 'scale(0.5) translateY(-40px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
        bucket: {
          '0%': { opacity: 0, transform: ' translateY(20px)' },
          '100%': { opacity: 1, transform: ' translateY(0px)' },
        },

        sidebar_in: {
          '-00%': { opacity:0 , transform: 'translateX(-10%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity:1 , transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        sidebar_top: {
          '-00%': { opacity:0 , transform: 'translateY(-20%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity:1 , transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        sidebar_checkOut: {
          '-00%': { opacity:0 ,transform: 'translateX(-10%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': {  opacity:1 ,transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        checkout: {
          '0%': {  transform: 'translateX(0%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': {  transform: 'translateX(180%)' }, /* Akhir di luar layar sebelah kiri */
        },
        sidebar_out: {
          ' 0%': { opacity:1 , transform: 'translateX(0)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity:0 , transform: 'translateX(-100%)' }, /* Akhir di luar layar sebelah kiri */
        },

        nav_in: {
          '0%': { transform: 'translateX(0%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': {  transform: 'translateX(28%)' }, /* Akhir di luar layar sebelah kiri */
        },

      },
      animation: {
        bag: 'bag .7s ease-in-out forwards',
        modal: 'bag 1s ease-in-out forwards',
        source: 'source 1s ease-in-out ', 
        falls: 'fall 3s linear infinite',
        spin_slow: 'spin_slow 3s linear infinite',
        jumps:'lompat 2s ease-in-out infinite',
        sidebar_in: 'sidebar_in 1s ease-in-out forwards',
        sidebar_top: 'sidebar_top 1s ease-in-out forwards',
        sidebar_checkOut: 'sidebar_checkOut 0.8s ease-in-out forwards',
        checkout: 'checkout 0.5s ease-in-out forwards',
        sidebar_out: 'sidebar_out 1s ease-in-out forwards',
        nav_in: 'nav_in 1s ease-in-out forwards',
        muncul: 'muncul 1s ease-in-out forwards',
        bucket: 'bucket .5s ease-in forwards',
        jump1: 'lompat 2s ease-in-out infinite',
        jump2: 'lompat 2.2s ease-in-out infinite',
        jump3: 'lompat 2.3s ease-in-out infinite',
        jump4: 'lompat 2.4s ease-in-out infinite',
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        varela: ['Varela', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
        Twinkle: ['Twinkle Star','cursive'],

        
      },
      transitionProperty: {
        'opacity': 'opacity',
        'transform': 'transform',
      },     
       opacity: {
        '90': '0.9',
      },
      fontWeight: {
        'lora': '500',
        'varela': '700',
        'Twinkle': '400',
        '': '',
      },
      fontStyle: {
        'lora': 'SemiBold',
        'varela': 'Normal',
        'Twinkle': 'Semibold',
      },
      colors: {

        "color1": "#CDAA84",
        "color2": "#000000",
        "color3": "#705C56",
        "color4": "#D9D9D9",
      
        
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {

        'home_bg': "url(/assets/background/Bg_Home.jpg)",
        
        'sepeda_bg': "url(/assets/background/sepeda.jpg)",
        'room_bg': "url(/assets/background/plan-about-us.jpg)",
        'about_bg': "url(/assets/background/borobudur-about.jpg)",
        'bottom_bg': "url(/assets/background/borobudur2.jpg)",
        'faq_bg': "url(/assets/background/bg_faq.jpg)",
        'terms_bg': "url(/assets/background/bg_terms.jpg)",
        'privacy_bg': "url(/assets/background/bg_privacy.jpg)",
        'OurVila_bg': "url(/assets/background/kolam-burger.jpg)",
        'Pool_swim': "url(/assets/background/Pool-swim.jpg)",
      },
      listStyleImage: {
        pens: 'url("/assets/icons/pen.png")',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('flowbite/plugin'),
  ],
};



      // // Layar Hp ukuran minimum       (Potrait)
      // 'hp': '370px',
      
      // // Layar Hp ukuran Umum          (Potrait)
      // 'hp1': '388px',
      
      // // Layar Hp ukuran maximum       (Potrait)
      // '2hp': '425px',

      // '3hp': '500px',
      
      // // Layar Hp ukuran Minumum       (Landscape)
      // '4hp': '740px',

      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'DesktopM': '980px',

      // // Layar Tablet ukuran Minumum   (Potrait)
      // 'md': '768px',

      // '1md': '870px',

      // // Layar Tablet ukuran Umum      (Landscape)
      // '2md': '1160px',

      // // Layar Tablet ukuran maximum   (Landscape)
      // '3md': '1240px',
      
      // '4md': '1441px',

      // 'lg': '1024px',

      // '2lg': '1024px',
      
      // '3lg': '1024px',

      // // Layar Laptop ukuran Minumum
      // 'xl': '1024px',
      
      // '2xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // // Layar Laptop ukuran Maximum
      // '3xl': '1536px',
      // // => @media (min-width: 1536px) { ... }

      // // Layar PC ukuran Minumum
      // 'pc': '1706px',

      // // Layar Tablet ukuran Medium
      // 'pc1': '1920px',
