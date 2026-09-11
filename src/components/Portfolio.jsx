import Web_Porto_Dunia_Es from "../assets/Web_Porto_Dunia_Es.jpg"
import Web_Porto_Inventory from "../assets/Web_Porto_Inventory.jpeg"
import CardPortfolio from "./Card_Portfolio";


export default function Portfolio() {

    const itemListDuniaEs = {
        src: Web_Porto_Dunia_Es,
        alt: "Web_Porto_Dunia_Es",
        title: "Dunia Es",
        badge: ["React", "Tailwind CSS", "Javascript"],
        description: "Website untuk memperkenalkan produk Es Mambo Dunia Es dengan empat pilihan rasa melalui tampilan yang sederhana dan responsif.",
        href: "https://dunia-es-website.vercel.app/"
    }

    const itemListInventory = {
        src: Web_Porto_Inventory,
        alt: "Web_Porto_Inventory",
        title: "Inventory Management System",
        badge: ["HTML", "CSS", "Javascript"],
        description: "Website pengelolaan inventaris yang dibangun dengan vanilla JavaScript, dilengkapi fitur CRUD, search, filter, sort, dan dashboard untuk membantu mengelola serta memantau data produk.",
        href: "https://inventory-management-system-wheat-nu.vercel.app/"
    }

    return (
        <div id="portfolio" className="bg-main flex flex-col gap-5 px-[clamp(24px,2vw,36px)] py-20 font-main">
            <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold"><span className="text-white border-b-2 pb-1 border-text">Portofolio</span></h2>
            <div className="flex flex-col items-center gap-5">
                <CardPortfolio itemList={itemListDuniaEs} />
                <CardPortfolio itemList={itemListInventory} />
            </div>
        </div>
    )
}