import sateAyam from "@/assets/sate-ayam.jpg";
import sateKambing from "@/assets/sate-kambing.jpg";
import sateLilit from "@/assets/sate-lilit.jpg";
import sateMaranggi from "@/assets/sate-maranggi.jpg";
import type { StaticImageData } from "next/image";


export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  category: "ayam" | "kambing" | "lilit" | "maranggi" | "paket";
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "sate-ayam-1",
    name: "Sate Ayam Madura",
    description: "Sate ayam dengan bumbu kacang khas Madura yang gurih dan lezat. Disajikan dengan lontong dan acar.",
    price: 35000,
    image: sateAyam,
    category: "ayam",
    isPopular: true,
  },
  {
    id: "sate-ayam-2",
    name: "Sate Ayam Bumbu Kecap",
    description: "Potongan ayam pilihan dibalut bumbu kecap manis spesial dengan taburan bawang goreng.",
    price: 32000,
    image: sateAyam,
    category: "ayam",
  },
  {
    id: "sate-kambing-1",
    name: "Sate Kambing Empuk",
    description: "Daging kambing muda pilihan yang empuk, dibakar dengan bumbu rempah rahasia keluarga.",
    price: 55000,
    image: sateKambing,
    category: "kambing",
    isPopular: true,
  },
  {
    id: "sate-kambing-2",
    name: "Sate Kambing Buntel",
    description: "Daging kambing cincang dibungkus lemak tipis, dibakar hingga crispy di luar dan juicy di dalam.",
    price: 60000,
    image: sateKambing,
    category: "kambing",
  },
  {
    id: "sate-lilit-1",
    name: "Sate Lilit Bali",
    description: "Sate khas Bali dari daging ikan segar yang dililitkan pada batang serai, kaya rempah.",
    price: 40000,
    image: sateLilit,
    category: "lilit",
    isPopular: true,
  },
  {
    id: "sate-lilit-2",
    name: "Sate Lilit Ayam",
    description: "Variasi sate lilit dengan daging ayam cincang halus dan bumbu Bali yang autentik.",
    price: 38000,
    image: sateLilit,
    category: "lilit",
  },
  {
    id: "sate-maranggi-1",
    name: "Sate Maranggi Premium",
    description: "Sate khas Purwakarta dengan daging sapi pilihan, bumbu santan dan cuka yang khas.",
    price: 65000,
    image: sateMaranggi,
    category: "maranggi",
    isPopular: true,
  },
  {
    id: "sate-maranggi-2",
    name: "Sate Maranggi Campur",
    description: "Kombinasi daging sapi dan kambing dengan bumbu maranggi yang kaya rempah.",
    price: 70000,
    image: sateMaranggi,
    category: "maranggi",
  },
  {
    id: "paket-1",
    name: "Paket Keluarga",
    description: "20 tusuk sate campur (ayam, kambing), 4 lontong, sambal kacang, acar, kerupuk.",
    price: 150000,
    image: sateAyam,
    category: "paket",
  },
  {
    id: "paket-2",
    name: "Paket Nusantara",
    description: "Mencicipi semua jenis sate: ayam, kambing, lilit, maranggi (masing-masing 5 tusuk).",
    price: 180000,
    image: sateMaranggi,
    category: "paket",
    isPopular: true,
  },
];

export const categories = [
  { id: "all", name: "Semua" },
  { id: "ayam", name: "Sate Ayam" },
  { id: "kambing", name: "Sate Kambing" },
  { id: "lilit", name: "Sate Lilit" },
  { id: "maranggi", name: "Sate Maranggi" },
  { id: "paket", name: "Paket" },
];

export const testimonials = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "Food Blogger",
    content: "Sate terenak yang pernah saya coba! Bumbu kacangnya pas, dagingnya empuk. Wajib coba!",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    role: "Pelanggan Setia",
    content: "Sudah jadi langganan keluarga selama 10 tahun. Kualitas selalu konsisten dan pelayanan ramah.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ahmad Fauzi",
    role: "Wisatawan",
    content: "Berkunjung ke Jakarta tidak lengkap tanpa mampir ke sini. Sate Maranggi-nya juara!",
    rating: 5,
  },
  {
    id: "4",
    name: "Maya Indah",
    role: "Ibu Rumah Tangga",
    content: "Anak-anak selalu minta sate dari sini. Dagingnya berkualitas dan bumbunya tidak terlalu pedas.",
    rating: 4,
  },
];
