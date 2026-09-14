import Journey from './components/Journey'
import Hero from './components/Hero'
import Navigasi from './components/Navigasi'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Tentang from './components/Tentang'
import './index.css'
import Contact from './components/Contact'
import Flag_of_Indonesia from './assets/Flag_of_Indonesia.webp'
import Flag_of_United_State from './assets/Flag_of_United_State.webp'
import { useEffect, useRef, useState } from 'react'

function App() {

  const [hamburger, setHamburger] = useState(false);

  function handleClickHamburger() {
    setHamburger(!hamburger)
  }

  const [language, setLanguage] = useState(() => {
    const chosenLang = localStorage.getItem('lang')

    if (chosenLang) {
      return chosenLang
    }
    return 'id'
  })

  const lang = {
    id: {
      loading: "Memuat Ulang",
      changeLanguage: {
        flag: Flag_of_Indonesia,
        title: "Indonesia",
        alt: "Bendera Indonesia"
      },
      navigationSection: [{
        idMenu: "#home",
        logo: "fa-regular fa-house",
        title: "Beranda"
      }, {
        idMenu: "#about",
        logo: "fa-solid fa-user",
        title: "Tentang",
      }, {
        idMenu: "#skills",
        logo: "fa-solid fa-code",
        title: "Keahlian"
      }, {
        idMenu: "#portfolio",
        logo: "fa-regular fa-folder",
        title: "Portofolio"
      }, {
        idMenu: "#journey",
        logo: "fa-regular fa-paper-plane",
        title: "Perjalanan"
      }, {
        idMenu: "#contact",
        logo: "fa-regular fa-envelope",
        title: "Kontak"
      }],
      heroSection: {
        loadCV: "Unduh Cv",
      },
      aboutSection: {
        title: "Tentang",
        content1: "Saya seorang",
        highlight: "Frontend Developer",
        content2: "yang tertarik pada UI/UX dan pengembangan pengalaman pengguna. Sebelumnya, saya bekerja sebagai 3D Lighting Artist, yang membuat saya memiliki ketertarikan pada visual dan detail. Kini saya mengembangkan kemampuan di bidang web development menggunakan JavaScript, TypeScript, React JS, dan Tailwind CSS. Saya senang memecahkan masalah, memperhatikan detail, dan terus mempelajari hal-hal baru.",
        date: "27 Desember 2027",
        hobby: "Bulu tangkis"
      },
      skillsSection: {
        title: "Keahlian",
        languageBox: {
          title: "Bahasa",
          description: "Membangun struktur halaman, styling responsive, serta interaksi dan logic aplikasi menggunakan HTML, CSS, JavaScript, dan TypeScript."
        },
        frameworkBox: {
          title: "Framework & Libraries",
          description: "Terbiasa menggunakan React dan Tailwind CSS untuk membangun UI yang interaktif, responsive, dan reusable."
        },
        toolsBox: {
          title: "Tools",
          description: "Dalam proses development, saya terbiasa menggunakan Git, GitHub, Vite, dan npm untuk mengelola serta menjalankan project."
        }
      },
      portfolioSection: {
        title: "Portofolio",
        box1: {
          title: "Dunia Es",
          badge: ["React", "Tailwind CSS", "Javascript"],
          description: "Website untuk memperkenalkan produk Es Mambo Dunia Es dengan empat pilihan rasa melalui tampilan yang sederhana dan responsif.",
          btn: "Lihat"
        },
        box2: {
          title: "Sistem Manajemen Inventaris",
          badge: ["HTML", "CSS", "Vanilla Javascript"],
          description: "Website inventaris yang diprogram dengan vanilla JavaScript ini mengintegrasikan data via API dengan fitur CRUD, pencarian, filter, dan sort urut, serta dashboard untuk memantau data produk secara efisien.",
          btn: "Lihat"
        },
        box3: {
          title: "Website Profil Diri",
          badge: ["React", "Tailwind CSS", "Javacript"],
          description: "Website personal profile responsif bertema hijau yang dibangun dengan React, Tailwind CSS, dan JavaScript untuk menampilkan tentang, keahlian, portofolio, perjalanan, serta kontak.",
          btn: "Lihat"
        }
      },
      journeySection: {
        title: "Perjalanan",
        box1: {
          title: "SMKN 1 Ciomas",
          badge: ["Animasi"],
          description: "Mempelajari dasar-dasar animasi dan produksi visual, termasuk 3D modeling, lighting, dan berbagai proses produksi untuk kebutuhan visual."
        },
        box2: {
          title: "3D Lighting Artist",
          badge: ["Javiera Studio"],
          description: "Bekerja dalam proses produksi 3D dengan fokus pada lighting dan visual development. Pengalaman ini membentuk perhatian saya terhadap detail visual yang kemudian membawa saya tertarik pada UI/UX dan pengembangan web."
        },
        box3: {
          title: "Frontend Development",
          badge: ["Self-Learning", "Personal Projects"],
          description: "Mulai mempelajari web development secara mandiri dan membangun berbagai project menggunakan HTML, CSS, JavaScript, TypeScript, React, dan Tailwind CSS."
        },
        box4: {
          title: "Institut Teknologi dan Bisnis Vinus",
          badge: ["S1 Sistem Informasi"],
          description: "Saat ini menempuh pendidikan Sistem Informasi untuk memperdalam pemahaman mengenai teknologi, sistem, dan pengembangan aplikasi."
        }
      },
      contactSection: {
        title1: "Hubungi",
        title2: "Saya",
        description: "Jangan ragu untuk menghubungi saya jika Anda tertarik untuk mengajak saya bergabung dalam proyek Anda.",
        contactOpt: {
          location: "Ciampea, Kabupaten Bogor, Jawa Barat"
        },
        loadCV: "Unduh CV",
        footer: {
          about: "Tentang",
          skills: "Keahlian",
          portfolio: "Portofolio",
          journey: "Perjalanan"
        }
      }
    },
    en: {
      loading: "Loading",
      changeLanguage: {
        flag: Flag_of_United_State,
        title: "English",
        alt: "Flag of US"
      },
      navigationSection: [{
        idMenu: "#home",
        logo: "fa-regular fa-house",
        title: "Home"
      }, {
        idMenu: "#about",
        logo: "fa-solid fa-user",
        title: "About",
      }, {
        idMenu: "#skills",
        logo: "fa-solid fa-code",
        title: "Skills"
      }, {
        idMenu: "#portfolio",
        logo: "fa-regular fa-folder",
        title: "Portfolio"
      }, {
        idMenu: "#journey",
        logo: "fa-regular fa-paper-plane",
        title: "Journey"
      }, {
        idMenu: "#contact",
        logo: "fa-regular fa-envelope",
        title: "Contact"
      }],
      heroSection: {
        loadCV: "Download CV",
      },
      aboutSection: {
        title: "About",
        content1: "I am a",
        highlight: "Frontend Developer",
        content2: "with an interest in UI/UX and user experience development. Previously, I worked as a 3D Lighting Artist, which gives me an interest in visuals and details. Now I am developing my skills in web development using JavaScript, TypeScript, React JS, and Tailwind CSS. I enjoy solving problems, paying attention to details, and continuously learning new things.",
        date: "27 December 2027",
        hobby: "Badminton"
      },
      skillsSection: {
        title: "Skills",
        languageBox: {
          title: "Languages",
          description: "Building page structures, responsive styling, as well as application interactions and logic using HTML, CSS, JavaScript, and TypeScript."
        },
        frameworkBox: {
          title: "Framework & Libraries",
          description: "Accustomed to using React and Tailwind CSS to build interactive, responsive, and reusable UIs."
        },
        toolsBox: {
          title: "Tools",
          description: "In the development process, I am accustomed to using Git, GitHub, Vite, and npm to manage and run projects."
        }
      },
      portfolioSection: {
        title: "Portfolio",
        box1: {
          title: "Dunia Es",
          badge: ["React", "Tailwind CSS", "Javascript"],
          description: "A website to introduce Es Mambo Dunia Es products with four flavor options through a simple and responsive display.",
          btn: "Explore"
        },
        box2: {
          title: "Inventory Management System",
          badge: ["HTML", "CSS", "Vanilla Javascript"],
          description: "This inventory website programmed with vanilla JavaScript integrates data via an API with CRUD, search, filter, and sorting features, along with a dashboard to monitor product data efficiently.",
          btn: "Explore"
        },
        box3: {
          title: "Self Profile Website",
          badge: ["React", "Tailwind CSS", "Javacript"],
          description: "A responsive green-themed personal profile website built with React, Tailwind CSS, and JavaScript to showcase about, skills, portfolio, journey, and contact.",
          btn: "Explore"
        }
      },
      journeySection: {
        title: "Journey",
        box1: {
          title: "SMKN 1 Ciomas",
          badge: ["Animation"],
          description: "Learning the basics of animation and visual production, including 3D modeling, lighting, and various production processes for visual needs."
        },
        box2: {
          title: "3D Lighting Artist",
          badge: ["Javiera Studio"],
          description: "Worked in 3D production with a focus on lighting and visual development. This experience shaped my attention to visual detail, which later led to my interest in UI/UX and web development."
        },
        box3: {
          title: "Frontend Development",
          badge: ["Self-Learning", "Personal Projects"],
          description: "Started learning web development independently and building various projects using HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS."
        },
        box4: {
          title: "Institut Teknologi dan Bisnis Vinus",
          badge: ["Bachelor of Information System"],
          description: "Currently pursuing an Information Systems education to deepen understanding of technology, systems, and application development."
        }
      },
      contactSection: {
        title1: "Contact",
        title2: "Me",
        description: "Feel free to contact me if you are interested in inviting me to join your project.",
        contactOpt: {
          location: "Ciampea, Bogor Regency, West Java"
        },
        loadCV: "Download CV",
        footer: {
          about: "About",
          skills: "Skills",
          portfolio: "Portfolio",
          journey: "Journey"
        }
      }
    }
  }

  const navRefs = useRef([])

  const [isVisible, setIsVisible] = useState({
    home: false,
    about: false,
    profilePicture01: false,
    hobby: false,

    skillsCard1: false,
    skillsCard2: false,
    skillsCard3: false,

    portfolioCard1: false,
    portfolioCard2: false,
    portfolioCard3: false,

    journeyCard1: false,
    journeyCard2: false,
    journeyCard3: false,
    journeyCard4: false,

    portfolio: false,
    journey: false,
    contact: false
  })

  useEffect(() => {
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(v => v = {
            ...v,
            [entry.target.id]: true
          })
        }
      })
    }, { threshold: 0.3 })

    navRefs.current.forEach(nav => {
      observer1.observe(nav)
    })

    return () => {
      navRefs.current.forEach(nav => {
        if (nav) {
          observer1.disconnect()
        }
      })
    }
  }, [])

  const addToRefs = (element) => {
    if (element && !navRefs.current.includes(element)) {
      navRefs.current.push(element)
    }
  }

  return (
    <>
      <Navigasi hamburger={hamburger} handleClickHamburger={handleClickHamburger} setHamburger={setHamburger} lang={lang} language={language} setLanguage={setLanguage} />
      <main className={`transition duration-500`}>
        <Hero lang={lang} language={language} addToRefs={addToRefs} isVisible={isVisible} />
        <Tentang lang={lang} language={language} addToRefs={addToRefs} isVisible={isVisible} />
        <Skills lang={lang} language={language} addToRefs={addToRefs} isVisible={isVisible} />
        <Portfolio lang={lang} language={language} addToRefs={addToRefs} isVisible={isVisible} />
        <Journey lang={lang} language={language} addToRefs={addToRefs} isVisible={isVisible} />
        <Contact lang={lang} language={language} addToRefs={addToRefs} isVisible={isVisible} />
      </main>
      <div className={`fixed inset-0 bg-black/30 z-30 ${hamburger ? `block opacity-100` : `hidden opacity-0`}`} />
    </>
  )
}

export default App
