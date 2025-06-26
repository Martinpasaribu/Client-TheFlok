import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-iad3-1.cdninstagram.com',

      },
      {
        protocol: 'https',
        hostname: 'scontent-cgk2-2.xx.fbcdn.net',

      },
      {
        protocol: 'https',
        hostname: 'scontent-cgk1-1.xx.fbcdn.net',

      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',

      },

      {
        protocol: 'https',
        hostname: 'scontent-iad3-2.cdninstagram.com',

      },
      {
        protocol: 'https',
        hostname: 'scontent-cgk2-1.cdninstagram.com',

      },
      {
        protocol: 'https',
        hostname: 'scontent-cgk1-1.cdninstagram.com',

      },
      {
        protocol: 'https',
        hostname: 'scontent-cgk1-2.cdninstagram.com',

      },
      {
        protocol: 'https',
        hostname: 'scontent-bom1-2.cdninstagram.com',

      },
      {
        protocol: 'https',
        hostname: 'www.google.com'

      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'

      },
     
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'

      }
     
    ],
  },
};

export default nextConfig;