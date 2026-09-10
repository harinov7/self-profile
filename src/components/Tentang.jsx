import Dummy_Profile from "../assets/Dummy_Profile.jpg"

export default function Tentang() {

    return (
        <div className="bg-main px-[clamp(24px,2vw,36px)] pt-10 pb-20 font-main flex flex-col gap-3">
            <div>
                <h1 className="text-[clamp(26px,3vw,36px)] font-extrabold text-text">Tentang Saya</h1>
                <h2 className="text-[clamp(22px,2vw,32px)] font-semibold text-white">Fadhil Ibnu Adhari</h2>
            </div>
            <p className="tracking-wider text-white">
                Saya seorang <span className="text-[clamp(20px,3vw,30px)] font-bold text-shadow-[0_4px_15px_rgba(122,209,117,0.6)]">Frontend Developer</span> yang tertarik pada UI/UX dan pengembangan pengalaman pengguna.
                Sebelumnya, saya bekerja sebagai 3D Lighting Artist, yang membuat saya memiliki ketertarikan
                pada visual dan detail. Kini saya mengembangkan kemampuan di bidang web development menggunakan
                JavaScript, TypeScript, React JS, dan Tailwind CSS. Saya senang memecahkan masalah, memperhatikan detail,
                dan terus mempelajari hal-hal baru.
            </p>
            <div className="flex justify-center mt-10">
                <img src={Dummy_Profile} width={300} alt="Foto Profil" className="w-[clamp(250px,90vw,350px)] rounded-xl translate-y-3" />
                <div className="absolute flex flex-col items-center bg-card text-white rounded-md px-2 py-1 shadow-md text-xs">
                    <i className="fa-regular fa-calendar-days"></i>
                    <h3 className="font-semibold">27 Desember 2007</h3>
                </div>
                <div className="absolute flex items-center gap-2 text-white text-xs bg-card rounded-md px-2 py-1 translate-y-60 -translate-x-20">
                    <i className="fa-solid fa-gamepad"></i>
                    <h3>Badminton</h3>
                </div>
            </div>

        </div>
    )
}