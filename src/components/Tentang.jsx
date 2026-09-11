import { useEffect, useState } from "react"
import Profile_Picture_02 from "../assets/Profile_Picture_02.jpeg"

export default function Tentang() {

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
        <div id="about" className="bg-main px-[clamp(32px,8vw,96px)] pt-10 pb-20 font-main flex flex-col gap-3 scroll-mt-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-[clamp(26px,3vw,36px)] font-extrabold"><span className="text-white border-b-2 pb-1 border-text">Tentang</span></h1>
                <h2 className="text-[clamp(20px,2vw,30px)] font-semibold tracking-widest text-text">Fadhil Ibnu Adhari</h2>
            </div>
            <p className="tracking-wider text-white max-w-[clamp(250px,70vw,640px)] leading-7 text-[clamp(16px,2vw,20px)]">
                Saya seorang <span className="text-[clamp(20px,3vw,24px)] font-bold text-shadow-[0_4px_15px_rgba(122,209,117,0.6)]">Frontend Developer</span> yang tertarik pada UI/UX dan pengembangan pengalaman pengguna.
                Sebelumnya, saya bekerja sebagai 3D Lighting Artist, yang membuat saya memiliki ketertarikan
                pada visual dan detail. Kini saya mengembangkan kemampuan di bidang web development menggunakan
                JavaScript, TypeScript, React JS, dan Tailwind CSS. Saya senang memecahkan masalah, memperhatikan detail,
                dan terus mempelajari hal-hal baru.
            </p>
            <div className="flex justify-center mt-[clamp(12px,3vw,24px)]">
                <img src={Profile_Picture_02} onClick={() => setImgOpen(true)} width={300} alt="Foto Profil" className="w-[clamp(250px,90vw,350px)] h-[clamp(250px,90vw,350px)] rounded-xl translate-y-3 object-cover" />
                <div className="absolute flex flex-col items-center bg-card text-white rounded-md px-2 py-1 shadow-md text-xs md:text-sm">
                    <i className="fa-regular fa-calendar-days"></i>
                    <h3 className="font-semibold">27 Desember 2007</h3>
                </div>
                <div className="absolute flex items-center gap-2 text-white text-xs md:text-sm bg-card rounded-md px-2 py-1 translate-y-[clamp(10px,80vw,310px)] -translate-x-[clamp(70px,20vw,110px)]">
                    <i className="fa-solid fa-gamepad"></i>
                    <h3>Badminton</h3>
                </div>
            </div>
            
            {imgOpen && (
                <div className="flex justify-center items-center z-999 fixed inset-0 p-10 bg-[rgba(0,0,0,0.8)]" onClick={() => setImgOpen(false)}>
                    <button className="text-white absolute top-10 right-10 text-4xl" onClick={() => setImgOpen(false)}>&times;</button>
                    <img src={Profile_Picture_02} alt="Foto Profile" onClick={(e) => e.stopPropagation()}/>
                </div>
            )}
        </div>
    )
}