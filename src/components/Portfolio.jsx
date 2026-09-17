import Web_Porto_Dunia_Es from "../assets/Web_Porto_Dunia_Es.avif"
import Web_Porto_Inventory from "../assets/Web_Porto_Inventory.jpeg"
import Web_Porto_Self_Profile from '../assets/Web_Porto_Self_Profile.avif'
import Web_Porto_Waroeng_Djembat from '../assets/Web_Porto_Waroeng_Djembat.avif'
import CardPortfolio from "./Card_Portfolio";


export default function Portfolio({
    lang,
    language,
    addToRefs,
    isVisible
}) {

    const portfolioList = [{
        id: "portfolioCard1",
        src: Web_Porto_Dunia_Es,
        alt: "Web_Porto_Dunia_Es",
        title: lang[language].portfolioSection.box1.title,
        badge: lang[language].portfolioSection.box1.badge,
        description: lang[language].portfolioSection.box1.description,
        href: "https://dunia-es-website.vercel.app/",
        btn: lang[language].portfolioSection.box1.btn
    }, {
        id: "portfolioCard2",
        src: Web_Porto_Inventory,
        alt: "Web_Porto_Inventory",
        title: lang[language].portfolioSection.box2.title,
        badge: lang[language].portfolioSection.box2.badge,
        description: lang[language].portfolioSection.box2.description,
        href: "https://inventory-management-system-wheat-nu.vercel.app/",
        btn: lang[language].portfolioSection.box2.btn
    }, {
        id: "portfolioCard3",
        src: Web_Porto_Self_Profile,
        alt: "Web_Porto_Self_Profile",
        title: lang[language].portfolioSection.box3.title,
        badge: lang[language].portfolioSection.box3.badge,
        description: lang[language].portfolioSection.box3.description,
        href: "https://fadil-dev.vercel.app/",
        btn: lang[language].portfolioSection.box3.btn
    }, {
        id: "portfolioCard4",
        src: Web_Porto_Waroeng_Djembat,
        alt: "Web_Porto_Waroeng_Djembat",
        title: lang[language].portfolioSection.box4.title,
        badge: lang[language].portfolioSection.box4.badge,
        description: lang[language].portfolioSection.box4.description,
        href: "https://waroeng-djembat.vercel.app/",
        btn: lang[language].portfolioSection.box4.btn
    }]

    return (
        <div id="portfolio" ref={addToRefs} className="bg-main flex flex-col gap-15 px-[clamp(32px,8vw,96px)] py-20 font-main">
            <h2 className="text-[clamp(26px,3vw,48px)] font-extrabold lg:flex lg:justify-center"><span className="text-white border-b-2 lg:border-b-4 pb-1 border-text">Portofolio</span></h2>
            <div className="flex flex-col gap-7 items-center lg:items-stretch lg:flex-row lg:justify-center flex-wrap">
                {portfolioList.map((porto, i) => (
                    <div id={porto.id} ref={addToRefs} className={`transition-all ease-in-out duration-1200 ${isVisible[porto.id] ? `section-show` : `section-hide-down`}`}>
                    <CardPortfolio itemList={porto} />
                </div>
                ))}
            </div>
        </div>
    )
}