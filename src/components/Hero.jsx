import Profile_Picture_01 from "../assets/Profile_Picture_01_berseh.jpg"
import { useEffect, useState } from "react";

export default function Hero({
    lang,
    language,
    addToRefs,
    isVisible
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
        <div id="home" ref={addToRefs} className={`bg-bg-second relative pb-10 font-main px-[clamp(32px,8vw,96px)] pt-20 transition-blur duration-500 lg:px-[clamp(96px,10vw,160px)] lg:pt-35`}>
            <div className="relative z-10 flex flex-col gap-1 lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col lg:gap-3">
                    <div>
                        <h1 className={`text-[clamp(22px,4vw,32px)] font-semibold text-white transition-all ease-in-out duration-1200 ${isVisible.home ? `section-show` : `section-hide-up`}`}>
                            Fadhil Ibnu Adhari
                        </h1>
                        <h2 className={`text-[clamp(26px,5vw,36px)] lg:text-[clamp(48px,4vw,56px)] font-extrabold text-text transition-all ease-in-out duration-1200 ${isVisible.home ? `section-show` : `section-hide-left`}`}>
                            Junior Front-End
                        </h2>
                        <h2 className={`text-[clamp(26px,5vw,36px)] lg:text-[clamp(48px,4vw,56px)] font-extrabold text-text transition-all ease-in-out duration-1200 ${isVisible.home ? `section-show` : `section-hide-left`}`}>
                            Developer
                        </h2>
                    </div>
                    <a href={lang[language].heroSection.linkCV} target="_blank" rel="noopener noreferrer" className={`border-t-2 border-border rounded-b-lg w-fit px-3 py-2 mt-7 md:mt-5 mb-5 text-lg md:text-xl font-bold text-text animate-light lg:text-2xl lg:px-5 lg:py-4 transition duration-300 hover:bg-card hover:text-white hover:animate-light-hover transition-all ease-in-out duration-1200 ${isVisible.home ? `section-show` : `section-hide-left`}`}>
                        {lang[language].heroSection.loadCV}
                    </a>
                </div>

                <div className={`flex justify-center`}>
                    <img src={Profile_Picture_01} onClick={() => setImgOpen(true)} width={300} alt="Foto Profil" className={`rounded-full w-60 md:w-80 lg:w-[clamp(90px,30vw,600px)] h-60 md:h-80 lg:h-[clamp(90px,30vw,600px)] object-cover transition-all ease-in-out duration-1200 ${isVisible.home ? `section-show` : `section-hide-down`}`} />
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