import cv from "../assets/CV_FADHIL_IBNU_ADHARI.pdf"

export default function Contact() {

    return (
        <div className="bg-bg-second  flex flex-col px-[clamp(24px,2vw,36px)] pt-20 pb-7 font-mono">
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold mb-7" > Hubungi Saya</h2 >
            <p className="mb-4">Jangan ragu untuk menghubungi saya jika Anda tertarik untuk mengajak saya bergabung dalam proyek Anda.</p>
            <div className="flex flex-col gap-2">
                <a href="mailto:ifadil728@gmail.com" className="flex items-center gap-2">
                    <i className="fa-regular fa-envelope"></i>
                    <p>ifadil728@gmail.com</p>
                </a>
                <a className="flex items-center gap-2" href="https://wa.me/6285141522359" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p>0895-3208-25569</p>
                </a>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Ciampea, Kabupaten Bogor, Jawa Barat</p>
                </div>
            </div>
            <div className="flex gap-4 mt-7 text-lg">
                <a href="https://www.linkedin.com/in/fadhil-ibnu-adhari" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-linkedin"></i>
                </a>
                <a href="https://github.com/harinov7" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <a href={cv} download="CV_Fadhil_Ibnu_Adhari" className="border rounded-md w-fit px-3 py-2 mt-5 text-lg">Unduh CV</a>

            <div className="mt-5 text-sm flex flex-col gap-5">
                <hr></hr>
                <div>
                    <p>Fadhil Ibnu Adhari</p>
                    <p>Frontend Developer</p>
                </div>
                <p>About &#183; Skills &#183; Project &#183; Contact</p>
                <hr></hr>
                <p className="text-xs">© 2026 Fadhil Ibnu Adhari</p>
            </div>
        </div >
    )
}