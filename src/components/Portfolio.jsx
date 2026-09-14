import Web_Porto_Dunia_Es from "../assets/Web_Porto_Dunia_Es.jpg"
import Web_Porto_Inventory from "../assets/Web_Porto_Inventory.jpeg"
import Web_Porto_Self_Profile from '../assets/Web_Porto_Self_Profile.jpg'
import CardPortfolio from "./Card_Portfolio";


export default function Portfolio({
    lang,
    language,
    addToRefs,
    isVisible
}) {

    const itemListDuniaEs = {
        src: Web_Porto_Dunia_Es,
        alt: "Web_Porto_Dunia_Es",
        title: lang[language].portfolioSection.box1.title,
        badge: lang[language].portfolioSection.box1.badge,
        description: lang[language].portfolioSection.box1.description,
        href: "https://dunia-es-website.vercel.app/",
        btn: lang[language].portfolioSection.box1.btn
    }

    const itemListInventory = {
        src: Web_Porto_Inventory,
        alt: "Web_Porto_Inventory",
        title: lang[language].portfolioSection.box2.title,
        badge: lang[language].portfolioSection.box2.badge,
        description: lang[language].portfolioSection.box2.description,
        href: "https://inventory-management-system-wheat-nu.vercel.app/",
        btn: lang[language].portfolioSection.box2.btn
    }

    const itemListSelfProfile = {
        src: Web_Porto_Self_Profile,
        alt: "Web_Porto_Self_Profile",
        title: lang[language].portfolioSection.box3.title,
        badge: lang[language].portfolioSection.box3.badge,
        description: lang[language].portfolioSection.box3.description,
        href: "https://fadil-dev.vercel.app/",
        btn: lang[language].portfolioSection.box3.btn
    }

    return (
        <div id="portfolio" ref={addToRefs} className="bg-main flex flex-col gap-15 px-[clamp(32px,8vw,96px)] py-20 font-main">
            <h2 className="text-[clamp(26px,3vw,48px)] font-extrabold lg:flex lg:justify-center"><span className="text-white border-b-2 lg:border-b-4 pb-1 border-text">Portofolio</span></h2>
            <div className="flex flex-col gap-7 items-center lg:items-stretch lg:flex-row lg:justify-center flex-wrap">
                <div id="portfolioCard1" ref={addToRefs} className={`transition-all ease-in-out duration-1200 ${isVisible.portfolioCard1 ? `section-show` : `section-hide-down`}`}>
                    <CardPortfolio itemList={itemListDuniaEs} />
                </div>
                <div id="portfolioCard2" ref={addToRefs} className={`transition-all ease-in-out duration-1200 ${isVisible.portfolioCard2 ? `section-show` : `section-hide-down`}`}>
                    <CardPortfolio itemList={itemListInventory} />
                </div>
                <div id="portfolioCard3" ref={addToRefs} className={`transition-all ease-in-out duration-1200 ${isVisible.portfolioCard3 ? `section-show` : `section-hide-down`}`}>
                    <CardPortfolio itemList={itemListSelfProfile} />
                </div>
            </div>
        </div>
    )
}