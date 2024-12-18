import { BsGraphUpArrow, BsPatchCheck, BsStars } from "react-icons/bs";
import { CgTranscript } from "react-icons/cg";
import {
  // FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { LuCalendar, LuVideo } from "react-icons/lu";
import { RiPenNibLine } from "react-icons/ri";
import { TbPigMoney, TbTargetArrow, TbUsersGroup } from "react-icons/tb";

export const NAVMENU = [
  {
    value: "/",
    label: "Home",
    refKey: "home",
  },
  // {
  //   value: "#Pricing",
  //   label: "Pricing",
  //   refKey: "pricing",
  // },

  {
    value: "#Testimoni",
    label: "Testimoni",
    refKey: "testi",
  },
  {
    value: "#Portofolio",
    label: "Portofolio",
    refKey: "porto",
  },
  {
    value: "/contact",
    label: "Contact",
    refKey: "contact",
  },
];

export const ABOUTMARQUEE = " .Portofolio Client by Alpha Project";

export const MEDIALIST = [
  {
    id: 1,
    img: "/assets/slider/slider_head.webp",
  },
  {
    id: 2,
    img: "/assets/slider/slider_basic.webp",
  },
  {
    id: 3,
    img: "/assets/slider/slider_client.webp",
  },
];

export const ABOUTALPHAVALUE = {
  title: "Alpha Project",
  desc: "Alpha Project suatu perushaan yang bergerak di bidang kreatif dan konten kreator bagi para perintis umkm ",
  video: "https://youtu.be/t9jLby937bE",
};

export const ABOUTVALUE = {
  // label: "Pernahkah Kamu Merasa :",
  value: [
    "Boro-boro ngurus sosmed, ngurus bisnis sendiri aja masih keteteran",
    "Pernah coba bikin konten sendiri tapi hasilnya gak rame",
    "Sulit mencari ide kreatif dan menarik buat konten sosial media",
    "Kekurangan/gapunya tim buat ngurus sosial media",
    "Mau hire editor dan content creator tapi gajinya mahal",
    "Gaada waktu buat mikirin ide konten",
    "Pengen beli peralatan ngonten tapi harganya selangit",
  ],
};

export const SECTION1 = {
  label: "Beralih dari Tradisional ke Digital",
  desc: "Mengapa Optimasi Sosial Media Begitu Penting?",
  value: [
    {
      label: "Jangkauan Pelanggan Semakin Meningkat",
      desc: "Jangan cuma jualan konvensional kaya di pasar. Jangkau banyak pelanggan di sosial media tanpa batasan waktu, tempat, dan lokasi, dengan strategi digital.",
      image: "/assets/section1/1.png",
    },
    {
      label: "Brand-mu Semakin Terkenal",
      desc: "Brand kamu bisa semakin dikenal dan diingat banyak orang dengan membuat konten yang berkesan dan unik.",
      image: "/assets/section1/2.png",
    },
    {
      label: "Meningkatkan Kedekatan dengan Pelanggan",
      desc: "Berinteraksi dengan pelanggan di sosial media dapat meningkatkan loyalitas dan kedekatan emosional dengan brandmu.",
      image: "/assets/section1/3.png",
    },
    {
      label: "Kredibilitas dan Kepercayaan Meningkat",
      desc: "Brand yang aktif dan memiliki ulasan yang baik di sosial media cenderung lebih diminati oleh pelanggan.",
      image: "/assets/section1/4.png",
    },
  ],
};

export const SERVICESLIST = [
  {
    icon: <LuCalendar />,
    label: "CONTENT PLANNER",
  },
  {
    icon: <CgTranscript />,
    label: "SCRIPT WRITER",
  },
  {
    icon: <BsStars />,
    label: "TALENT",
  },
  {
    icon: <RiPenNibLine />,
    label: "GRAPHIC DESIGNER",
  },
  {
    icon: <LiaPhotoVideoSolid />,
    label: "VIDEO EDITOR",
  },
  {
    icon: <LuVideo />,
    label: "VIDEOGRAPHER",
  },
];

export const CLIENTLIST = [
  {
    img: "/assets/client/AlphaProperti.webp",
  },
  {
    img: "/assets/client/ElangBhumi.webp",
  },
  {
    img: "/assets/client/FortunaBadja.webp",
  },
  {
    img: "/assets/client/OliviaStuff.webp",
  },
  {
    img: "/assets/client/OscarADS.webp",
  },
  {
    img: "/assets/client/ProfilEmas.webp",
  },
  {
    img: "/assets/client/TWSLaw.webp",
  },
  {
    img: "/assets/client/alphaRealty.webp",
  },
  {
    img: "/assets/client/anugerahKarya.webp",
  },
  {
    img: "/assets/client/BBIZ.webp",
  },
  {
    img: "/assets/client/geoanField.webp",
  },
  {
    img: "/assets/client/thalitaAtmaSentosa.webp",
  },
  {
    img: "/assets/client/TWSConsulting.webp",
  },
  {
    img: "/assets/client/easyTax.webp",
  },
];

export const SECTION2 = {
  label: "Bayangkan! Jika Kamu Bisa :",
  // desc: "Bersama Alpha Project semua masalah pengelolaan konten bisa kami atasi, bikin bisnis kamu lebih dikenal, mudah dicari, dan makin menguntungkan setiap hari!",
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
    label: "PT. Akas",
    img: "/assets/testimoni/akas.webp",
    video: "https://www.youtube.com/shorts/JfueXheHE8k",
  },
  {
    label: "Alpha Properti",
    img: "/assets/testimoni/alphaproperti.webp",
    video: "https://www.youtube.com/shorts/Jf1IepUiygE",
  },
  {
    label: "Profil Emas Konsultan",
    img: "/assets/testimoni/profile_emas_konsultan.webp",
    video: "https://www.youtube.com/shorts/tPF1GmUEd8k",
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
  desc: [
    "Bukti nyata dari tangan-tangan terampil tim kami yang profesional.",
    "Menjadikan para business owner rela antri untuk menggunakan jasa Alpha Project",
  ],
  items: [
    {
      image: "/assets/portofolio/porto_akas.webp",
      url: "https://www.instagram.com/garment_akas/",
    },
    {
      image: "/assets/portofolio/porto_akasjendara.webp",
      url: "https://www.instagram.com/garment_akas/",
    },
    {
      image: "/assets/portofolio/porto_alphasentra.webp",
      url: "https://www.instagram.com/alphapropertindo/",
    },
    {
      image: "/assets/portofolio/porto_easytax.webp",
      url: "https://www.instagram.com/easytaxsolusindo?igsh=amFlNjFmdTloZDh1",
    },
    {
      image: "/assets/portofolio/porto_oscarads.webp",
      url: "https://www.instagram.com/oscar_advertising/",
    },
    {
      image: "/assets/portofolio/porto_profilemas.webp",
      url: "https://www.instagram.com/profilemaskonsultan/",
    },
    {
      image: "/assets/portofolio/porto_twsconsulting.webp",
      url: "https://www.instagram.com/gsi.business.consulting?igsh=dHhwc2FjMzFsajVs",
    },
  ],
};
export const FOOTER = {
  open: "",
  email: "",
  address: "Sidoarjo, East Java",
  sosmed: [
    // {
    //   url: "/",
    //   icon: <FaFacebookF />,
    // },
    {
      url: "https://www.instagram.com/mch.rama__/",
      icon: <FaInstagram />,
    },
    {
      url: "https://api.whatsapp.com/send?phone=6281330129266&text=Hai%2C%20JasaWebKita",
      icon: <FaWhatsapp />,
    },
  ],
};
