import cv from "../assets/CV_FADHIL_IBNU_ADHARI.pdf"

export default function Contact() {

    return (
        <div id="contact" className="bg-main flex flex-col px-[clamp(24px,2vw,36px)] pt-20 pb-7 font-main">
            <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold mb-7" ><span className="text-white border-b-2 pb-1 border-text">Hubungi</span><span className="text-text"> Saya</span></h2 >
            <p className="mb-4 text-white">Jangan ragu untuk menghubungi saya jika Anda tertarik untuk mengajak saya bergabung dalam proyek Anda.</p>
            <div className="flex flex-col gap-2">
                <a href="mailto:ifadil728@gmail.com" className="flex items-center gap-2">
                    <div className="text-[#4285F4]">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <p className="text-white">ifadil728@gmail.com</p>
                </a>
                <a className="flex items-center gap-2" href="https://wa.me/6285141522359" target="_blank" rel="noopener noreferrer">
                    <div className="text-[#25D366]">
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    
                    <p className="text-white">0895-3208-25569</p>
                </a>
                <div className="flex items-center gap-2">
                    <div className="text-[#EA4335]">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    
                    <p className="text-white">Ciampea, Kabupaten Bogor, Jawa Barat</p>
                </div>
            </div>
            <div className="flex gap-4 mt-7 text-lg">
                <a href="https://www.linkedin.com/in/fadhil-ibnu-adhari" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2]">
                    <i className="fa-brands fa-square-linkedin"></i>
                </a>
                <a href="https://github.com/harinov7" target="_blank" rel="noopener noreferrer" className="text-[#6E40C9]">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <a href={cv} download="CV_Fadhil_Ibnu_Adhari" className="border-t-2 border-border rounded-b-lg w-fit px-3 py-2 mt-5 text-lg font-bold text-text shadow-[0_4px_15px_rgba(122,209,117,0.2)]">Unduh CV</a>
            <div className="mt-5 text-sm flex flex-col gap-5">
                <hr className="text-text"></hr>
                <div className="text-white">
                    <p>Fadhil Ibnu Adhari</p>
                    <p>Frontend Developer</p>
                </div>
                <div className="flex justify-center gap-3 text-white">
                    <p>About</p>
                    <p>&#183;</p>
                    <p>Skills</p>
                    <p>&#183;</p>
                    <p>Project</p>
                    <p>&#183;</p>
                    <p>Contact</p>
                </div>

                <hr className="text-text"></hr>
                <p className="text-xs text-white">© 2026 Fadhil Ibnu Adhari</p>
            </div>
        </div >
    )
}