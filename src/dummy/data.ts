export interface DataProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: "Pangan Pokok" | "Minyak & Lemak" | "Protein Hewani" | "Sayuran";

  onClick?: () => void;
  detail?: string; //properti opsional untuk deskripsi lebih detail
}

export const data: DataProduct[] = [
  {
    id: "1",
    title: "Beras",
    category: "Pangan Pokok",
    price: 12000,
    image: "",
    description:
      "Beras adalah bahan pokok yang paling umum dikonsumsi di Indonesia, digunakan dalam berbagai hidangan seperti nasi.",
  },
  {
    id: "2",
    title: "Minyak Goreng",
    category: "Minyak & Lemak",
    price: 15000,
    image: "",
    description:
      "Minyak goreng digunakan untuk memasak dan menggoreng berbagai bahan makanan, salah satu bahan penting di dapur.",
  },
  {
    id: "3",
    title: "Telur",
    category: "Protein Hewani",
    price: 25000,
    image: "",
    description:
      "Telur merupakan sumber protein yang sering dikonsumsi, baik untuk sarapan, sebagai lauk, atau bahan pembuatan kue.",
  },
  {
    id: "4",
    title: "Gula Pasir",
    category: "Pangan Pokok",
    price: 13000,
    image: "",
    description:
      "Gula pasir digunakan sebagai pemanis dalam berbagai makanan dan minuman, sangat penting dalam pembuatan kue dan masakan manis.",
  },
  {
    id: "5",
    title: "Tepung Terigu",
    category: "Pangan Pokok",
    price: 9000,
    image: "",
    description:
      "Tepung terigu adalah bahan utama dalam pembuatan roti, kue, dan berbagai makanan olahan yang membutuhkan bahan dasar tepung.",
  },
  {
    id: "6",
    title: "Daging Sapi",
    category: "Protein Hewani",
    price: 150000,
    image: "",
    description:
      "Daging sapi adalah sumber protein hewani yang banyak digunakan dalam hidangan seperti steak, rendang, dan sop.",
  },
  {
    id: "7",
    title: "Sayur Bayam",
    category: "Sayuran",
    price: 10000,
    image: "",
    description:
      "Sayur bayam kaya akan vitamin dan mineral, sering digunakan dalam masakan seperti sayur bening atau tumis.",
  },
  {
    id: "8",
    title: "Cabai Merah",
    category: "Sayuran",
    price: 20000,
    image: "",
    description:
      "Cabai merah memberikan rasa pedas dan sering digunakan sebagai bahan utama sambal atau bumbu masakan.",
  },
  {
    id: "9",
    title: "Ikan Salmon",
    category: "Protein Hewani",
    price: 250000,
    image: "",
    description:
      "Ikan salmon adalah sumber protein dan omega-3 yang sangat baik, sering digunakan dalam masakan sehat seperti sushi atau panggang.",
  },
  {
    id: "10",
    title: "Kedelai",
    category: "Pangan Pokok",
    price: 14000,
    image: "",
    description:
      "Kedelai digunakan untuk membuat berbagai produk makanan seperti tempe, tahu, dan kecap, serta sebagai sumber protein nabati.",
  },
];
