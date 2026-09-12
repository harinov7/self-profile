import Profile_Picture_01 from "../assets/Profile_Picture_01_berseh.jpg"
import { useEffect, useState } from "react"

export default function Navigasi({
    hamburger,
    handleClickHamburger,
    lang,
    language,
    setLanguage
}) {

    useEffect(() => {
        if (hamburger) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [hamburger])

    const [toggleLanguage, setToggleLanguage] = useState(false)

    function handleChangeLanguage(e) {
        setLanguage(e.currentTarget.id)
        setToggleLanguage(false)
    }

    return (
        <nav className="flex fixed top-0 left-0 z-60 font-main w-full">
            <div className="z-50 py-3 px-3 lg:px-[clamp(120px,11vw,160px)] w-full backdrop-blur-sm flex justify-end items-center gap-3 lg:justify-between">
                <ul className="hidden lg:flex gap-10 py-5">
                    {lang[language].navigationSection.map((e, i) => (
                        <li className="text-white text-xl transition duration-300 hover:text-text font-bold" key={i}>
                            <a href={e.idMenu}>
                                <h2>{e.title}</h2>
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className="text-white text-xs md:text-sm lg:text-base font-bold flex gap-1 cursor-pointer" onClick={() => setToggleLanguage(!toggleLanguage)}>
                        <img src={lang[language].changeLanguage.flag} alt={lang[language].changeLanguage.alt} width={250} height={150} className='max-w-5 max-h-3' />
                        <small>{lang[language].changeLanguage.title}</small>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    <div className={`${toggleLanguage ? `block` : `hidden`} z-100`}>
                        <div className='absolute border border-black/30 rounded-lg bg-white flex flex-col right-30 top-13'>
                            <button id='id' className='flex gap-2 items-center hover:bg-[#f2f2f2] px-4 py-2 transition duration-300 rounded-lg cursor-pointer' onClick={handleChangeLanguage}>
                                <img src={lang.id.changeLanguage.flag} alt={lang.id.changeLanguage.alt} width={250} height={150} className='max-w-5 max-h-3 pointer-events-none' />
                                <small className='text-xs md:text-sm lg:text-base pointer-events-none'>{lang.id.changeLanguage.title}</small>
                            </button>
                            <button id='en' className='flex gap-2 items-center hover:bg-[#f2f2f2] px-4 py-2 transition duration-300 rounded-lg cursor-pointer' onClick={handleChangeLanguage}>
                                <img src={lang.en.changeLanguage.flag} alt={lang.en.changeLanguage.alt} width={250} height={150} className='max-w-5 max-h-3 pointer-events-none' />
                                <small className='text-xs md:text-sm lg:text-base pointer-events-none'>{lang.en.changeLanguage.title}</small>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`text-2xl md:text-3xl text-white font-bold w-10 md:w-12 h-10 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg cursor-pointer select-none transition lg:hidden`} onClick={handleClickHamburger}>
                    {hamburger ? (
                        <button className="hamburger cursor-pointer">
                            &times;
                        </button>
                    ) : (
                        <button className="hamburger cursor-pointer">
                            &#9776;
                        </button>
                    )}
                </div>
            </div>


            <aside className={`fixed h-dvh overflow-y-auto bg-main z-40 w-[clamp(230px,70vw,300px)] px-5 pt-20 transition duration-500 ${hamburger ? `translate-x-0` : `-translate-x-[clamp(240px,70vw,480px)]`} lg:hidden`}>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center gap-4">
                        <img src={Profile_Picture_01} alt="Foto Profil 1" className="w-10 h-10 object-cover rounded-full shadow-[0_0_15px_rgba(122,209,117,0.2)]" />
                        <h2 className="font-bold text-white text-[clamp(16px,4vw,24px)]">Fadhil Ibnu Adhari</h2>
                    </div>
                    <p className="text-[clamp(16px,1vw,30px)] font-medium text-white tracking-widest"><span className="border-b-2 border-text py-1">Frontend</span> <span className="text-text text-shadow-[0_0_15px_rgba(122,209,117,0.4)]">Developer</span></p>
                </div>
                <hr className="text-white mt-4" />
                <ul className="text-white flex flex-col gap-[clamp(12px,2vw,24px)] text-[clamp(18px,4vw,20px)] py-7 font-medium">
                    {lang[language].navigationSection.map((e, i) => (
                        <li key={i}>
                            <a href={e.idMenu} className="flex items-center gap-3" onClick={handleClickHamburger}>
                                <i className={e.logo}></i>
                                <span>{e.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </nav>
    )
}