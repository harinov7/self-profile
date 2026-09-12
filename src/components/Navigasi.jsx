import { useEffect, useState } from "react"
import Dummy_Profile from "../assets/Dummy_Profile.jpg"

export default function Navigasi({
    hamburger,
    handleClickHamburger
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

    const navigationOption = [{
        idMenu: "#home",
        logo: "fa-regular fa-house",
        title: "Beranda"
    }, {
        idMenu: "#about",
        logo: "fa-solid fa-user",
        title: "Tentang"
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
    }]

    return (
        <nav className="flex fixed top-0 left-0 z-60 font-main w-full">
            <div className="z-50 w-full backdrop-blur-sm flex justify-end lg:block">
                <ul className="hidden lg:flex justify-center gap-10 py-5">
                    {navigationOption.map((e, i) => (
                        <a href={e.idMenu} className="text-white text-xl transition duration-300 hover:text-text font-bold" key={i}>
                            <li>{e.title}</li>
                        </a>
                    ))}
                </ul>
                <div className={`text-2xl md:text-3xl text-white font-bold bg-cyan-400 w-10 md:w-12 h-10 md:h-12 bg-secondary rounded-full flex items-center justify-center mr-[clamp(10px,5vw,28px)] mt-[clamp(10px,5vw,28px)] shadow-lg cursor-pointer select-none transition lg:hidden`} onClick={handleClickHamburger}>
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


            <aside className={`fixed h-dvh overflow-y-auto bg-main z-40 w-[clamp(230px,70vw,300px)] px-5 pt-20 transition duration-500 ${hamburger ? `translate-x-0` : `-translate-x-[clamp(240px,70vw,480px)]`}`}>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center gap-4">
                        <img src={Dummy_Profile} alt="Dummy_Profile" className="w-10 rounded-full shadow-[0_0_15px_rgba(122,209,117,0.2)]" />
                        <h2 className="font-bold text-white text-[clamp(16px,4vw,24px)]">Fadhil Ibnu Adhari</h2>
                    </div>
                    <p className="text-[clamp(16px,1vw,30px)] font-medium text-white tracking-widest"><span className="border-b-2 border-text py-1">Frontend</span> <span className="text-text text-shadow-[0_0_15px_rgba(122,209,117,0.4)]">Developer</span></p>
                </div>
                <hr className="text-white mt-4" />
                <ul className="text-white flex flex-col gap-[clamp(12px,2vw,24px)] text-[clamp(18px,4vw,20px)] py-7 font-medium">
                    {navigationOption.map((e, i) => (
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