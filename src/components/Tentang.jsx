import Dummy_Profile from "../assets/Dummy_Profile.jpg"

export default function Tentang() {

    return (
        <div className="bg-bg-second px-[clamp(24px,2vw,36px)] py-20">
            <h1 className="text-[clamp(24px,3vw,32px)] font-mono font-bold">Tentang Saya</h1>
            <h2 className="text-[clamp(20px,2vw,32px)] font-mono font-bold">Fadhil Ibnu Adhari</h2>
            <p className="font-mono tracking-wider">
                Saya seorang Frontend Developer yang tertarik pada UI/UX dan pengembangan pengalaman pengguna. 
                Sebelumnya, saya bekerja sebagai 3D Lighting Artist, yang membuat saya memiliki ketertarikan
                pada visual dan detail. Kini saya mengembangkan kemampuan di bidang web development menggunakan 
                JavaScript, TypeScript, React JS, dan Tailwind CSS. Saya senang memecahkan masalah, memperhatikan detail, 
                dan terus mempelajari hal-hal baru.
            </p>
            <div className="flex justify-center mt-10">
                <img src={Dummy_Profile} width={300} alt="Foto Profil" className="w-[clamp(250px,90vw,350px)] rounded-xl translate-y-3"/>
                <div className="absolute flex flex-col items-center bg-cyan-400 text-white rounded-md px-2 py-1 shadow-md text-xs">
                    <i className="fa-regular fa-calendar-days"></i>
                    <h3 className="font-semibold">27 Desember 2007</h3>
                </div>
                <div className="absolute flex items-center gap-2 text-white text-xs bg-cyan-400 rounded-md px-2 py-1 translate-y-45 -translate-x-10">
                    <i className="fa-solid fa-gamepad"></i>
                    <h3>Badminton</h3>
                </div>
            </div>
            
        </div>
    )
}