import builder from "../assets/img/builder.png";
import electronic from "../assets/img/electronic.png";
import cleaning from "../assets/img/cleaning.png";
import otomotif from "../assets/img/otomotif.png";
import ahmad from "../assets/img/ahmad.png";
import eko from "../assets/img/eko.png";
import yuli from "../assets/img/yuli.png";
import dewi from "../assets/img/dewi.png";
import ibrahim from "../assets/img/ibrahim.png";
import apip from "../assets/img/apip.jpg";
import fauzan from "../assets/img/fauzan.png";
import angga from "../assets/img/angga.png";
import udin from "../assets/img/udin.png";

const ServicesData = [
  {
    title: "Builder",
    image: builder,
    description:
      "Kami menyediakan layanan pembangunan rumah baru hingga renovasi bangunan lama dengan standar yang tinggi dan kepuasan pelanggan sebagai prioritas utama.",
  },
  {
    title: "Electronic",
    image: electronic,
    description:
      "Kami menyediakan layanan perbaikan dan pemeliharaan peralatan elektronik dengan teknisi yang berpengalaman dan terpercaya.",
  },
  {
    title: "Cleaning",
    image: cleaning,
    description:
      "Layanan kebersihan komprehensif untuk rumah dan kantor Anda, memberikan lingkungan yang bersih dan nyaman.",
  },
  {
    title: "Otomotif",
    image: otomotif,
    description:
      "Perawatan dan perbaikan kendaraan dengan layanan terbaik dan hasil yang memuaskan untuk semua jenis kendaraan.",
  },
];

const FeaturesData = [
  {
    id: 1,
    title: "Login Google",
    description: "Masuk dengan akun Google Anda dengan mudah dan cepat.",
  },
  {
    id: 2,
    title: "Pencarian Tukang dari Lokasi Terdekat",
    description:
      "Temukan tukang terdekat dari lokasi Anda dengan sistem geo-tagging.",
  },
  {
    id: 3,
    title: "Harga yang Sesuai Standar",
    description:
      "Harga jasa yang transparan sesuai dengan standar yang berlaku.",
  },
  {
    id: 4,
    title: "Struk Digital",
    description: "Dapatkan struk digital setelah transaksi selesai.",
  },
  {
    id: 5,
    title: "Rating, Ulasan, dan Hasil Pekerjaan",
    description:
      "Lihat rating, ulasan, dan hasil pekerjaan tukang sebelum memilih.",
  },
];

const TestimonialsData = [
  {
    id: 1,
    name: "Dewi Laras",
    image: dewi,
    designation: "Rumah Tangga",
    description: "Sangat puas dengan pelayanan dari Jasa Tukang. Tukang yang datang sangat profesional dan pekerjaannya rapi. Terima kasih!"
  },
  {
    id: 2,
    name: "Eko Widodo",
    image: eko,
    designation: "Pemilik Usaha",
    description: "Jasa Tukang membantu saya menyelesaikan renovasi toko dengan cepat dan tepat. Harganya pun terjangkau. Sangat direkomendasikan!"
  },
  {
    id: 3,
    name: "Yuli Wati",
    image: yuli,
    designation: "Ibu Rumah Tangga",
    description: "Tukang dari Jasa Tukang sangat ramah dan membantu. Pekerjaannya berkualitas dan sesuai dengan yang saya inginkan. Terima kasih banyak!"
  },
  {
    id: 4,
    name: "Ahmad Faisal",
    image: ahmad,
    designation: "Pengusaha Kecil",
    description: "Pelayanan dari Jasa Tukang sangat membantu dalam merapikan rumah. Tukangnya sangat profesional dan tepat waktu. Saya sangat puas!"
  }
];

const FaqsData = [
  {
    id: 1,
    question: "Apa jenis layanan yang tersedia di Jasa Tukang?",
    answer: "Jasa Tukang menyediakan berbagai jenis layanan seperti renovasi, perbaikan, dan pemeliharaan untuk rumah dan bisnis."
  },
  {
    id: 2,
    question: "Bagaimana cara memesan tukang melalui aplikasi Jasa Tukang?",
    answer: "Anda dapat memesan tukang melalui aplikasi dengan cara login, pilih layanan yang diinginkan, dan tentukan jadwal pengerjaan."
  },
  {
    id: 3,
    question: "Apakah harga jasa tukang di Jasa Tukang dapat dinegosiasikan?",
    answer: "Harga jasa tukang di Jasa Tukang telah ditetapkan sesuai standar pasar dan tidak dapat dinegosiasikan."
  },
  {
    id: 4,
    question: "Apakah tukang di Jasa Tukang memiliki pengalaman yang baik?",
    answer: "Ya, tukang yang bekerja di Jasa Tukang dipilih berdasarkan pengalaman dan keahlian untuk memberikan layanan terbaik kepada pelanggan."
  },
  {
    id: 5,
    question: "Bagaimana jika saya tidak puas dengan layanan tukang di Jasa Tukang?",
    answer: "Jika Anda tidak puas dengan layanan tukang, silakan hubungi layanan pelanggan kami untuk penanganan lebih lanjut."
  }
];

const TeamsData = [
  {
    name: "Ibrahim Aji Fajar Romadhon",
    nim: "21.12.2201",
    image: ibrahim,
    ig: "https://www.instagram.com/ibrahimaji.fajar/",
    linkedin: "https://www.linkedin.com/in/ibrahim-aji-fajar-r/",
    github: "https://github.com/ibrahimajifajarromadhon",
    fb:"https://web.facebook.com/search/top/?q=ibrahim%20aji"
  },
  {
    name: "Aliefangga Harwa Nasir",
    nim: "21.12.2231",
    image: angga,
    ig: "https://www.instagram.com/haaliefangga_/",
    linkedin: "https://www.linkedin.com/in/aliefangga-harwa-nasir/",
    github: "https://github.com/anggaxvi",
    fb:"https://www.facebook.com/haaliefangga/?locale=id_ID"
  },
  {
    name: "Muhammad Al Fauzan",
    nim: "21.12.2254",
    image: fauzan,
    ig: "https://www.instagram.com/fauzann02?igsh=MW5yd3ZxaDJnMTd0aw==",
    linkedin: "https://www.linkedin.com/in/muhammad-alfauzan-19682026a/",
    github: "https://github.com/Muhammadalfauzan",
    fb:"https://www.facebook.com/profile.php?id=61559962335082"
  },
  {
    name: "Muhammad Afif F",
    nim: "21.12.2227",
    image: apip,
    ig: "https://www.instagram.com/m_afffiff/",
    linkedin: "https://www.linkedin.com/in/muhammad-afif-b738a52b9/",
    github: "https://github.com/apipcu",
    fb:"https://web.facebook.com/afifzero/"
  },
  {
    name: "Shobarudin",
    nim: "21.12.2209",
    image: udin,
    ig: "https://www.instagram.com/alghozii_zy/",
    linkedin: "https://www.linkedin.com/in/shobarudin-alghozi-550163217?trk=contact-info",
    github: "https://github.com/alghoziii",
    fb:"https://m.facebook.com/alghozi.bowadict/"
  },
];

export { ServicesData, FeaturesData, TestimonialsData, FaqsData, TeamsData };