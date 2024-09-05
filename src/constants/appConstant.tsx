import { BsGraphUpArrow, BsPatchCheck } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { TbPigMoney, TbTargetArrow, TbUsersGroup } from "react-icons/tb";

export const NAVMENU = [
  {
    value: "/",
    label: "Home",
    refKey: "home",
  },
  {
    value: "#Pricing",
    label: "Pricing",
    refKey: "pricing",
  },
  {
    value: "#Testimoni",
    label: "Testimoni",
    refKey: "testi",
  },
  {
    value: "/contact",
    label: "Contact",
    refKey: "contact",
  },
];

export const ABOUTMARQUEE = ", Kop, Map, Amplop, Stempel, Logo, Icon, Feed";

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
  desc: "Mengapa Optimasi Sosial Media Begitu Penting?",
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

export const SECTION2 = {
  label: "Bayangkan! Jika Kamu Bisa :",
  desc: "Bersama Alpha Project semua masalah pengelolaan konten bisa kami atasi, bikin bisnis kamu lebih dikenal, mudah dicari, dan makin menguntungkan setiap hari!",
  value: [
    {
      icon: <TbTargetArrow />,
      label: "Fokus Penuh pada Bisnis Utama",
      desc: "Gaperlu pusing mikirin konten, kamu bisa sepenuhnya fokus mengembangkan bisnis dan melihat omzet naik secara konsisten.",
    },
    {
      icon: <BsPatchCheck />,
      label: "Menghasilkan Konten Berkualitas Tinggi Tanpa Ribet",
      desc: "Konten yang menarik, kreatif, dan sesuai dengan brand kamu tersedia setiap hari tanpa harus menghabiskan waktu berjam-jam untuk memikirkan ide.",
    },
    {
      icon: <TbUsersGroup />,
      label: "Punya Tim Ahli yang Mengurus Sosial Media",
      desc: "Sebuah tim profesional yang siap membantu mengelola dan menjalankan strategi sosial media kamu dengan biaya yang jauh lebih efisien dibandingkan mempekerjakan full-time staff.",
    },
    {
      icon: <TbPigMoney />,
      label: "Hemat Biaya Tanpa Mengorbankan Kualitas",
      desc: "Kamu gak perlu lagi beli peralatan mahal atau membayar gaji tinggi untuk editor dan content creator, tapi tetap mendapatkan hasil yang optimal.",
    },
    {
      icon: <BsGraphUpArrow />,
      label: "Menikmati Pertumbuhan Bisnis Tanpa Beban",
      desc: "Dengan strategi konten yang berjalan otomatis dan efektif, kamu bisa duduk santai dan melihat bisnismu berkembang. Dengan strategi yang jitu kamu bisa fokus pada hal-hal penting yang bikin bisnis mu semakin maju.",
    },
  ],
};

export const TESTI = [
  {
    label: "PT. AKAS Garment",
    video:
      "https://drive.google.com/file/d/12tY9gIG4ZuSqiFne4c9hCTUXGrwCVn_R/view?usp=sharing",
    comment:
      "Jadi semakin dikenal berkat Kontribusi dan support tim selama ini. Sosial media PT. Akas menjadi semakin  tertata, maju, dan menarik dari sebelumnya",
  },
  {
    label: "Alpha Propertindo",
    video:
      "https://drive.google.com/file/d/1PvwYOab36QXigk-CnUQ096d84KWqNyE7/view?usp=sharing",
    comment:
      "Berawal dari keraguan, bisnis kami mengalami lonjakan berkat strategi dan eksekusi tim yang profesional dan berdedikasi",
  },
];

export const PACKAGE = [
  {
    title: "Pemula Branding Package",
    price: 249000,
    desc: "Apa saja yang kamu dapatkan",
    duration: "",
    features: ["Logo", "Kop", "Map", "Amplop", "Stempel"],
  },
  {
    title: "Professional Logo Creation",
    price: 199000,
    desc: "Apa saja yang kamu dapatkan",
    duration: "",
    features: [
      "1 alternatif ogo",
      "Revisi minor 2x",
      "2-3 hari kerja",
      "Mini concept",
      "File Adobe Illustrator, PNG, JPEG, PDF",
    ],
  },
];

export const PORTOFLIO = {
  title: "Portofolio Kami",
  desc: "Bukti nyata dari tangan-tangan terampil tim kami yang profesional. Menjadikan para business owner rela antri unntuk menggunakan jasa Alpha Project ",
  items: [
    {
      image: "/assets/portofolio/porto_akas.webp",
      url: "/logo",
    },
    {
      image: "/assets/portofolio/porto_akasjendara.webp",
      url: "/package",
    },
    {
      image: "/assets/portofolio/porto_alphasentra.webp",
      url: "/logo",
    },
    {
      image: "/assets/portofolio/porto_easytax.webp",
      url: "/package",
    },
    {
      image: "/assets/portofolio/porto_oscarads.webp",
      url: "/logo",
    },
    {
      image: "/assets/portofolio/porto_profilemas.webp",
      url: "/package",
    },
    {
      image: "/assets/portofolio/porto_twsconsulting.webp",
      url: "/package",
    },
  ],
};
export const FOOTER = {
  open: "",
  email: "",
  address:
    "Skyloft Soho No.1868 Ciputra World, Jl. Mayjen Sungkono No.89, Gunung Sari, Dukuhpakis, Surabaya, East Java 60224",
  sosmed: [
    {
      url: "/",
      icon: <FaFacebookF />,
    },
    {
      url: "https://www.instagram.com/alphasosmed.project/",
      icon: <FaInstagram />,
    },
    {
      url: "/",
      icon: <FaTwitter />,
    },
    {
      url: "/",
      icon: <FaWhatsapp />,
    },
    {
      url: "/Tiktok",
      icon: <FaTiktok />,
    },
  ],
};
