import HTML_Logo from "../assets/HTML_Logo.png"
import CSS_Logo from "../assets/CSS_Logo.png"
import Javascript_Logo from "../assets/Javascript_Logo.png"
import Typescript_Logo from "../assets/Typescript_Logo.png"
import React_Logo from "../assets/React_Logo.png"
import Tailwind_Logo from "../assets/Tailwind_Logo.png"
import Git_Logo from "../assets/Git_Logo.png"
import Github_Logo from "../assets/Github_Logo.png"
import VSCode_Logo from "../assets/VSCode_Logo.png"
import Vite_Logo from "../assets/Vite_Logo.png"
import npm_Logo from "../assets/npm_Logo.png"
import CardSkill from "./Card_Skill";


export default function Skills() {

    const itemListLanguages = [
        {
            src: HTML_Logo,
            alt: "HTML Logo"
        },
        {
            src: CSS_Logo,
            alt: "CSS Logo"
        },
        {
            src: Javascript_Logo,
            alt: "Javascript Logo"
        },
        {
            src: Typescript_Logo,
            alt: "Typescript Logo"
        }
    ]
    const titleLanguages = "Bahasa"
    const descriptionLanguage = "Membangun struktur halaman, styling responsive, serta interaksi dan logic aplikasi menggunakan HTML, CSS, JavaScript, dan TypeScript."

    const itemListFramework = [
        {
            src: React_Logo,
            alt: "React Logo"
        },
        {
            src: Tailwind_Logo,
            alt: "Tailwind Logo"
        }
    ]
    const titleFramework = "Framework & Libraries"
    const descriptionFramework = "Terbiasa menggunakan React dan Tailwind CSS untuk membangun UI yang interaktif, responsive, dan reusable."

        const itemListTools = [
        {
            src: Git_Logo,
            alt: "Git Logo"
        },
        {
            src: Github_Logo,
            alt: "Github Logo"
        },
        {
            src: VSCode_Logo,
            alt: "VSCode Logo"
        },
        {
            src: Vite_Logo,
            alt: "Vite Logo"
        },
        {
            src: npm_Logo,
            alt: "npm Logo"
        }
    ]
    const titleTools = "Tools"
    const descriptionTools = "Dalam proses development, saya terbiasa menggunakan Git, GitHub, Vite, npm, dan berbagai tools lainnya untuk mengelola serta menjalankan project."

    return (
        <div id="skills" className="px-[clamp(32px,8vw,96px)] py-20 font-main bg-bg-second">
            <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold"><span className="text-white border-b-2 pb-1 border-text">Keahlian</span></h2>
            <div className="flex flex-col items-center gap-7 mt-15 text-white">
                <CardSkill itemList={itemListLanguages} title={titleLanguages} description={descriptionLanguage} />
                <CardSkill itemList={itemListFramework} title={titleFramework} description={descriptionFramework} />
                <CardSkill itemList={itemListTools} title={titleTools} description={descriptionTools} />
            </div>

        </div>
    )
}