/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://adhisthanavillas.com", // Ganti dengan domain kamu
    generateRobotsTxt: true, // Buat robots.txt otomatis
    sitemapSize: 5000, // Maksimal 5000 URL per file sitemap
    generateIndexSitemap: false, // Jika banyak sitemap, ubah ke `true`
};

export default config;
