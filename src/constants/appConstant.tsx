import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import {
  RiCustomerService2Line,
  RiDashboardLine,
  RiSecurePaymentLine,
} from "react-icons/ri";

export const NAVMENU = [
  {
    value: "/",
    label: "Home",
    refKey: "home",
  },
  {
    value: "/aboutus",
    label: "About us",
    refKey: "about",
  },
  {
    value: "#Pricing",
    label: "Pricing",
    refKey: "pricing",
  },
  {
    value: "/contact",
    label: "Contact",
    refKey: "contact",
  },
];

export const ABOUTVALUE = {
  label: "Pernahkah kamu Merasa :",
  value: [
    "Pernah coba bikin konten sendiri tapi hasilnya gak rame",
    "Sulit mencari ide kreatif dan menarik buat konten sosial media",
    "Kekurangan/gapunya tim buat ngurus sosial media",
    "Mau hire editor dan content creator tapi gajinya mahal",
    "Gaada waktu buat mikirin ide konten",
    "Pengen beli peralatan ngonten tapi harganya selangit",
    "Boro-boro ngurus sosmed, ngurus bisnis sendiri aja masih keteteran",
  ],
};

export const SECTION1 = {
  label: "Beralih dari Tradisional ke Digital",
  desc: "Mengapa Optimasi Sosial Media Begitu Penting untuk Bisnismu?",
  value: [
    {
      label: "Meningkatkan Visibilitas dan Jangkauan Pelanggan",
      desc: "Di era digital, banyak orang menghabiskan waktu di berbagai platform media sosial seperti Instagram, Facebook, dan TikTok. Dengan optimasi sosial media, kamu dapat menjangkau audiens yang jauh lebih luas tanpa batasan ruang dan waktu.",
    },
    {
      label: "Membangun Brand Awareness",
      desc: "Sosial media dapat memperkenalkan dan memperkuat brand bisnismu kepada audiens. Dengan strategi konten yang efektif, kamu bisa menciptakan kesan yang unik serta membangun brand awareness yang kuat sehingga bisnismu akan lebih dikenal oleh audiens.",
    },
    {
      label: "Berinteraksi Langsung dengan Pelanggan",
      desc: "Kamu dapat berinteraksi langsung dengan pelanggan, hal ini bisa berupa memberikan feedback, mengajukan pertanyaan, atau berbagi pengalaman dengan mereka. Membangun interaksi dengan pelanggan dapat meningkatkan loyalitas audiens terhadap brand/bisnis mu.",
    },
    {
      label: "Meningkatkan Kredibilitas dan Kepercayaan",
      desc: "Pelanggan cenderung lebih mempercayai brand yang mereka lihat aktif dan transparan di media sosial, terutama jika brand tersebut memiliki ulasan positif, testimoni, dan engagement yang baik.",
    },
  ],
};

export const ADVANTAGE = [
  {
    icon: <RiSecurePaymentLine />,
    label: "Payment Gateway",
    desc: "Dedicated Payment Gateway dengan Xendit untuk segala jenis transaksi",
  },
  {
    icon: <MdOutlineLocalShipping />,
    label: "Ekspedisi Terintegrasi",
    desc: "Integrasi shipping dengan segala jenis ekspedisi yang ada di Indonesia",
  },
  {
    icon: <IoSearch />,
    label: "SEO Support",
    desc: "Dukungan SEO Support untuk memudahkan pengguna menemukan produk anda",
  },
  {
    icon: <RiDashboardLine />,
    label: "Eksekutif Dasboard",
    desc: "Kemudahan dalam memantau perkembangan bisnis anda dengan dashboard dengan data yang lengkap dan realtime",
  },
  {
    icon: <RiCustomerService2Line />,
    label: "Fleksible",
    desc: "Dukungan custom request dalam memenuhi kebutuhan bisnis anda",
  },
];

export const FOOTER = {
  address:
    "Skyloft Soho No.1868 Ciputra World, Jl. Mayjen Sungkono No.89, Gunung Sari, Dukuhpakis, Surabaya, East Java 60224",
  sosmed: [
    {
      url: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      url: "Instagram",
      icon: <FaInstagram />,
    },
    {
      url: "Twitter",
      icon: <FaTwitter />,
    },
    {
      url: "Twitter",
      icon: <FaWhatsapp />,
    },
  ],
};

export const PACKAGE = [
  {
    title: "Startup Store",
    price: 5000000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat iusto",
    duration: "Bulan",
    features: [
      "Dashboard",
      "Customer Menu",
      "Brand (1 Brand)",
      "Product Menu",
      "Order Menu",
      "Manual Order (Order by admin)",
      "Slider Banner Store",
      "Balance",
      "Admin Management (6 Account)",
      "Role Management",
      "Whatsapp Notifications",
    ],
  },
  {
    title: "Membership Store",
    price: 10000000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat iusto",
    duration: "Bulan",
    features: [
      "Dashboard",
      "Customer Menu",
      "Brand (1 Brand)",
      "Product Menu",
      "Order Menu",
      "Manual Order (Order by admin)",
      "Slider Banner Store",
      "Balance",
      "Admin Management (15 Account)",
      "Role Management",
      "Whatsapp Notifications",
      "Membership Store",
      "Leaderboard Membership",
      "Reward User Comissions",
      "Withdraw User Comissions",
      "Coin Management",
      "Notification Store Features",
    ],
  },
  {
    title: "Start Up Company Service",
    price: 3000000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat iusto",
    duration: "Tahun",
    features: [
      "Website 4 Halaman",
      "12 Halaman Desain Company Profile (2x Revisi)",
      "Kartu Nama",
      "Stempel",
      "3 Alterntif Logo",
      "Kop Surat",
      "1 Desain Amplop Uk.90",
      "1 Desain Stand Roll Banner",
    ],
  },
];
