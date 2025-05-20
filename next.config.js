/** @type {import('next').NextConfig} */

const nextConfig = {
  // Contoh: Atur domain gambar eksternal jika pakai <Image>
  images: {
    domains: ["yourportfolio.com", "ecommerce-demo.com"], // Tambahkan domain gambar yang diizinkan
  },
  // Nonaktifkan checking ESLint saat build untuk menghindari failing deploy
  eslint: {
    // Peringatan tetap ada tapi tidak akan menggagalkan build
    ignoreDuringBuilds: true,
  },
  // Redirect dari root path ke /home
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  // Aktifkan fitur experimental jika perlu
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig;
