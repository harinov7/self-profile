import Web_Porto_Dunia_Es from "../assets/Web_Porto_Dunia_Es.jpg"
import Web_Porto_Inventory from "../assets/Web_Porto_Inventory.jpeg"
import CardPortfolio from "./Card_Portfolio";


export default function Portfolio({
    lang,
    language
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

    return (
        <div id="portfolio" className="bg-main flex flex-col gap-15 px-[clamp(32px,8vw,96px)] py-20 font-main">
            <h2 className="text-[clamp(26px,3vw,48px)] font-extrabold lg:flex lg:justify-center"><span className="text-white border-b-2 lg:border-b-4 pb-1 border-text">Portofolio</span></h2>
            <div className="flex flex-col gap-7 items-center lg:items-stretch lg:flex-row lg:justify-center">
                <CardPortfolio itemList={itemListDuniaEs} />
                <CardPortfolio itemList={itemListInventory} />
            </div>
        </div>
    )
}