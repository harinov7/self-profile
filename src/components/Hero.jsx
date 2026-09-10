import Dummy_Profile from "../assets/Dummy_Profile.jpg"
import FinisherHeader from "./FinisherHeader";
import cv from "../assets/CV_FADHIL_IBNU_ADHARI.pdf"

export default function Hero() {

    return (
        <div className="finisher-header relative h-[650px] font-main px-[clamp(24px,2vw,36px)] pt-20">
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
                    <img src={Dummy_Profile} width={300} alt="Foto Profil" className="rounded-full w-60" />
                </div>
            </div>
        </div>
    )
}