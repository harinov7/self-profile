import Dummy_Image from "../assets/Dummy_Image.png"
import CardJourney from "./Card_Journey"

export default function Journey() {

    const journeyItemList = [{
        src: Dummy_Image,
        alt: "Dummy_Image",
        title: "SMKN 1 Ciomas",
        badge: ["Animasi"],
        description: "Mempelajari dasar-dasar animasi dan produksi visual, termasuk 3D modeling, lighting, dan berbagai proses produksi untuk kebutuhan visual."
    },
    {
        src: Dummy_Image,
        alt: "Dummy_Image",
        title: "3D Lighting Artist",
        badge: ["Javiera Studio"],
        description: "Bekerja dalam proses produksi 3D dengan fokus pada lighting dan visual development. Pengalaman ini membentuk perhatian saya terhadap detail visual yang kemudian membawa saya tertarik pada UI/UX dan pengembangan web."
    },
    {
        src: Dummy_Image,
        alt: "Dummy_Image",
        title: "Frontend Development",
        badge: ["Self-Learning", "Personal Projects"],
        description: "Mulai mempelajari web development secara mandiri dan membangun berbagai project menggunakan HTML, CSS, JavaScript, TypeScript, React, dan Tailwind CSS."
    },
    {
        src: Dummy_Image,
        alt: "Dummy_Image",
        title: "Institut Teknologi dan Bisnis Vinus",
        badge: ["S1 Sistem Informasi"],
        description: "Saat ini menempuh pendidikan Sistem Informasi untuk memperdalam pemahaman mengenai teknologi, sistem, dan pengembangan aplikasi."
    }
    
]

    return (
        <div className="bg-main flex flex-col gap-10 px-[clamp(24px,2vw,36px)] py-20 font-main">
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold">Perjalanan</h2>
            <div>
                <div className="border-l-4 border-cyan-400/80 border-dashed absolute left-14 top-1040 -bottom-1220 w-0">
                </div>
                <CardJourney itemList={journeyItemList}/>
            </div>
        </div>
    )
}