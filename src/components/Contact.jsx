

export default function Contact({
    lang,
    language,
    addToRefs
}) {

    const contactOpt = [{
        l: "mailto:ifadil728@gmail.com",
        col: "text-[#4285F4]",
        icon: "fa-regular fa-envelope",
        title: "ifadil728@gmail.com"
    }, {
        l: "https://wa.me/6285141522359",
        col: "text-[#25D366]",
        icon: "fa-brands fa-whatsapp",
        title: "0895-3208-25569"
    }, {
        l: "https://maps.app.goo.gl/8PHiEVT31AL93678A",
        col: "text-[#EA4335]",
        icon: "fa-solid fa-location-dot",
        title: lang[language].contactSection.contactOpt.location
    }]

    return (
        <div id="contact" ref={addToRefs} className="bg-main flex flex-col px-[clamp(32px,8vw,96px)] pt-20 pb-3 font-main">
            <h2 className="text-[clamp(26px,3vw,48px)] font-extrabold mb-7" ><span className="text-white border-b-2 lg:border-b-4 pb-1 border-text">Hubungi</span><span className="text-text"> Saya</span></h2 >
            <p className="mb-4 text-white text-[clamp(16px,2vw,22px)]">{lang[language].contactSection.description}</p>
            <div className="flex flex-col gap-2 text-[clamp(16px,2vw,22px)]">
                {contactOpt.map((e, i) => (
                    <a href={e.l} className="flex items-center gap-2 w-fit" target="_blank" rel="noopener noreferrer" key={i}>
                        <i className={`${e.icon} ${e.col}`}></i>
                        <p className="text-white underline">{e.title}</p>
                    </a>
                ))}
            </div>
            <div className="flex gap-4 mt-7 text-[clamp(16px,2vw,22px)]">
                <a href="https://www.linkedin.com/in/fadhil-ibnu-adhari" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2]">
                    <i className="fa-brands fa-square-linkedin"></i>
                </a>
                <a href="https://github.com/harinov7" target="_blank" rel="noopener noreferrer" className="text-[#6E40C9]">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <a href={lang[language].contactSection.linkCV} target="_blank" rel="noopener noreferrer" className="border-t-2 border-border rounded-b-lg w-fit px-3 py-2 mt-5 text-lg lg:text-2xl transition duration-300 hover:bg-card hover:text-white hover:animate-light-hover font-bold text-text animate-light">{lang[language].contactSection.loadCV}</a>
            <div className="mt-5 text-sm flex flex-col gap-3">
                <hr className="text-text"></hr>
                    <a href="#home" className="w-fit text-white text-[clamp(10px,1vw,16px)]">
                        <p>Fadhil Ibnu Adhari</p>
                        <p>Frontend Developer</p>
                    </a>
                <div className="flex justify-center gap-3 text-white text-[clamp(10px,1vw,16px)]">
                    <a href="#about" className="underline">{lang[language].contactSection.footer.about}</a>
                    <p>&#183;</p>
                    <a href="#skills" className="underline">{lang[language].contactSection.footer.skills}</a>
                    <p>&#183;</p>
                    <a href="#portfolio" className="underline">{lang[language].contactSection.footer.portfolio}</a>
                    <p>&#183;</p>
                    <a href="#journey" className="underline">{lang[language].contactSection.footer.journey}</a>
                </div>
                <hr className="text-text"></hr>
                <p className="text-xs text-white flex justify-center text-[clamp(10px,1vw,16px)]">© 2026 Fadhil Ibnu Adhari</p>
            </div>
        </div >
    )
}