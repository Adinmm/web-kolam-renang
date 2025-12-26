// app/not-found.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaSwimmingPool } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-blue-200 p-6 text-center">
      <FaSwimmingPool className="text-blue-600 text-9xl mb-6 animate-bounce" />
      <h1 className="text-6xl font-extrabold text-blue-900 mb-2">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-blue-700 mb-8 max-w-md">
        Maaf, halaman yang kamu cari tidak ada. Mungkin sudah dihapus atau URL salah ketik.
      </p>
      <Link href="/">
        <Button variant="default" size="lg">
          Kembali ke Beranda
        </Button>
      </Link>
    </div>
  );
}
