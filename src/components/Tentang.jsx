import { useEffect, useState } from "react"
import Profile_Picture_02 from "../assets/Profile_Picture_02.jpeg"

export default function Tentang({
    lang,
    language
}) {

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
        <div id="about" className="bg-main px-[clamp(32px,8vw,96px)] pt-10 pb-20 font-main flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-3 scroll-mt-10">
            <div className="flex flex-col gap-1 lg:gap-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[clamp(26px,3vw,48px)] font-extrabold"><span className="text-white border-b-2 lg:border-b-4 pb-1 border-text">{lang[language].aboutSection.title}</span></h1>
                    <h2 className="text-[clamp(20px,2vw,30px)] font-semibold tracking-widest text-text">Fadhil Ibnu Adhari</h2>
                </div>
                <p className="tracking-wider text-white max-w-[clamp(250px,70vw,640px)] leading-7 text-[clamp(16px,2vw,20px)] lg:max-w-[clamp(250px,60vw,720px)]">
                    {lang[language].aboutSection.content1} <span className="text-[clamp(20px,3vw,24px)] font-bold text-shadow-[0_4px_15px_rgba(122,209,117,0.6)]">{lang[language].aboutSection.highlight}</span> {lang[language].aboutSection.content2}
                </p>
            </div>
            <div className="flex justify-center flex-row-reverse mt-[clamp(12px,3vw,24px)]">
                <img src={Profile_Picture_02} onClick={() => setImgOpen(true)} width={300} alt="Foto Profil" className="w-[clamp(250px,90vw,350px)] h-[clamp(250px,90vw,350px)] rounded-xl translate-y-3 object-cover lg:w-[clamp(250px,35vw,450px)] lg:h-[clamp(250px,35vw,450px)]" />
                <div className="absolute flex flex-col items-center bg-card text-white rounded-md px-2 py-1 shadow-md text-xs md:text-sm lg:text-lg">
                    <i className="fa-regular fa-calendar-days"></i>
                    <h3 className="font-semibold">{lang[language].aboutSection.date}</h3>
                </div>
                <div className="relative">
                    <div className="absolute flex items-center bottom-0 left-4 gap-2 text-white text-xs md:text-sm lg:text-lg bg-card rounded-md px-2 py-1 whitespace-nowrap">
                        <i className="fa-solid fa-gamepad"></i>
                        <h3>{lang[language].aboutSection.hobby}</h3>
                    </div>
                </div>
            </div>

            {imgOpen && (
                <div className="flex justify-center items-center z-999 fixed inset-0 p-10 bg-[rgba(0,0,0,0.8)]" onClick={() => setImgOpen(false)}>
                    <button className="text-white absolute top-10 right-10 text-4xl" onClick={() => setImgOpen(false)}>&times;</button>
                    <img src={Profile_Picture_02} alt="Foto Profile" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    )
}