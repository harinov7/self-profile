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


export default function Skills({
    lang,
    language
}) {

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

    return (
        <div id="skills" className="px-[clamp(32px,8vw,96px)] py-20 font-main bg-bg-second">
            <h2 className="text-[clamp(26px,3vw,48px)] font-extrabold lg:flex lg:justify-center"><span className="text-white border-b-2 lg:border-b-4 pb-1 border-text">{lang[language].skillsSection.title}</span></h2>
            <div className="flex flex-col gap-7 mt-15 text-white items-center lg:items-stretch lg:flex-row lg:justify-between">
                <CardSkill itemList={itemListLanguages} title={lang[language].skillsSection.languageBox.title} description={lang[language].skillsSection.languageBox.description} />
                <CardSkill itemList={itemListFramework} title={lang[language].skillsSection.frameworkBox.title} description={lang[language].skillsSection.frameworkBox.description} />
                <CardSkill itemList={itemListTools} title={lang[language].skillsSection.toolsBox.title} description={lang[language].skillsSection.toolsBox.description} />
            </div>
        </div>
    )
}