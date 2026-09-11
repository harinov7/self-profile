import Profile_Picture_01 from "../assets/Profile_Picture_01.jpeg"
import FinisherHeader from "./FinisherHeader";
import cv from "../assets/CV_FADHIL_IBNU_ADHARI.pdf"
import { useEffect, useState } from "react";

export default function Hero() {

    const [imgOpen, setImgOpen] = useState(false)

    useEffect(() => {
        if (imgOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [imgOpen])

    return (
        <div id="home" className={`finisher-header relative h-[650px] font-main px-[clamp(24px,2vw,36px)] pt-20 transition-blur duration-500`}>
            <FinisherHeader />
            <div className="relative z-10 flex flex-col gap-2">
                <h1 className="text-[clamp(22px,2vw,32px)] font-semibold text-white">
                    Fadhil Ibnu Adhari
                </h1>
                <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold text-text">
                    Junior Front-End Developer
                </h2>
                <a href={cv} download="CV_Fadhil_Ibnu_Adhari" className="border-t-2 border-border rounded-b-lg w-fit px-3 py-2 mt-10 mb-10 text-lg font-bold text-text shadow-[0_4px_15px_rgba(122,209,117,0.2)]">
                    Unduh CV
                </a>
                <div className="flex justify-center">
                    <img src={Profile_Picture_01} onClick={() => setImgOpen(true)} width={300} alt="Foto Profil" className="rounded-full w-60 h-60 object-cover" />
                </div>
            </div>

            {imgOpen && (
                <div className="flex justify-center items-center z-999 fixed inset-0 p-10 bg-[rgba(0,0,0,0.8)]" onClick={() => setImgOpen(false)}>
                    <button className="text-white absolute top-10 right-10 text-4xl" onClick={() => setImgOpen(false)}>&times;</button>
                    <img src={Profile_Picture_01} alt="Foto Profile" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    )
}