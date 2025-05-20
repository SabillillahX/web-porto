// Purpose: Next.js configuration file for enabling experimental features, setting images domains, etc

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Contoh: Atur domain gambar eksternal jika pakai <Image>
  images: {
    domains: ["yourportfolio.com", "ecommerce-demo.com"], // Tambahkan domain gambar yang diizinkan
  },
  // Aktifkan fitur experimental jika perlu
  // experimental: {
  //   appDir: true,
  // },
};

export default nextConfig;
