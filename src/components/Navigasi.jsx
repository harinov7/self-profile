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

    return (
        <nav className="flex fixed top-0 left-0 z-60 font-main w-full">
            <div className="z-50 w-full backdrop-blur-md">
                <div className={`text-2xl text-white font-bold bg-cyan-400 w-10 h-10 bg-secondary rounded-full flex items-center justify-center m-3 shadow-lg cursor-pointer select-none`} onClick={handleClickHamburger}>
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


            <aside className={`fixed h-dvh overflow-y-auto bg-main z-40 w-60 px-5 pt-20 transition duration-500 ${hamburger ? `translate-x-0` : `-translate-x-60`}`}>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center gap-4">
                        <img src={Dummy_Profile} alt="Dummy_Profile" className="w-10 rounded-full shadow-[0_0_15px_rgba(122,209,117,0.2)]" />
                        <h2 className="font-bold text-white">Fadhil Ibnu Adhari</h2>
                    </div>
                    <p className="text-[clamp(16px,1vw,30px)] font-medium text-white tracking-widest"><span className="border-b-2 border-text py-1">Frontend</span> <span className="text-text text-shadow-[0_0_15px_rgba(122,209,117,0.4)]">Developer</span></p>
                </div>
                <hr className="text-white mt-4" />
                <ul className="text-white flex flex-col gap-3 text-lg py-7 font-light">
                    <li>
                        <a href="#home" className="flex items-center gap-3" onClick={handleClickHamburger}>
                            <i className="fa-regular fa-house"></i>
                            <span>Beranda</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="flex items-center gap-3" onClick={handleClickHamburger}>
                            <i className="fa-solid fa-user"></i>
                            <span>Tentang</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="flex items-center gap-3" onClick={handleClickHamburger}>
                            <i className="fa-solid fa-code"></i>
                            <span>Keahlian</span>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="flex items-center gap-3" onClick={handleClickHamburger}>
                            <i className="fa-regular fa-folder"></i>
                            <span>Portofolio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#journey" className="flex items-center gap-3" onClick={handleClickHamburger}>
                            <i className="fa-regular fa-paper-plane"></i>
                            <span>Perjalanan</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="flex items-center gap-3" onClick={handleClickHamburger}>
                            <i className="fa-regular fa-envelope"></i>
                            <span>Kontak</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </nav>
    )
}