import Dummy_Profile from "../assets/Dummy_Profile.jpg"
import cv from "../assets/CV_FADHIL_IBNU_ADHARI.pdf"

export default function Hero() {

    return (
        <div className="font-mono h-dvh px-[clamp(24px,2vw,36px)] py-20 flex flex-col gap-2">
            <h1 className="text-[clamp(20px,2vw,32px)]">Fadhil Ibnu Adhari</h1>
            <h2 className="text-[clamp(24px,2vw,36px)] font-bold text-cyan-400">Junior Front-End Developer</h2>
            <a href={cv} download="CV_Fadhil_Ibnu_Adhari" className="border rounded-md w-fit px-3 py-2 mt-10 mb-10 text-lg">Unduh CV</a>
            <div className="flex justify-center">
                <img src={Dummy_Profile} width={300} alt="Foto Profil" className="rounded-full w-60"></img>
            </div>
            
        </div>
    )
}