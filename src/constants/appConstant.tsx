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

export const ABOUTVALUE = [
  "Executive Dashboard",
  "Memudahkan toko anda untuk ditemukan oleh pencarian google",
  "Mudah dikelola",
  "Fleksible",
  "Handal",
];

export const BESTITEM = [
  {
    label: "Desain UI Responsif",
    img: "/mockup/mockup1.jpeg",
    desc: "Responsif untuk segala jenis gadget dengan tampilan yang memudahkan untuk segala pengguna",
  },
  {
    label: "Toko Online",
    img: "/mockup/mockup2.jpeg",
    desc: "Pembeli dapat dengan mudah menemukan produk anda dengan SEO (Search Engine Optimization) yang berguna untuk kemudahan pembeli menemukan produk anda serta kemudahan dalam membeli produk",
  },
  {
    label: "Dashboard Penjualan",
    img: "/mockup/mockup3.jpeg",
    desc: "Tersedia berbagai menu yang menyesuaikan kebutuhan manajemen toko online untuk memudahkan penjualan produk anda",
  },
];

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
