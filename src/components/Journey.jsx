import Dummy_Image from "../assets/Dummy_Image.png"
import CardJourney from "./Card_Journey"

export default function Journey() {

    const journeyItemList = [{
        no: 1,
        title: "SMKN 1 Ciomas",
        badge: ["Animasi"],
        description: "Mempelajari dasar-dasar animasi dan produksi visual, termasuk 3D modeling, lighting, dan berbagai proses produksi untuk kebutuhan visual."
    },
    {
        no: 2,
        title: "3D Lighting Artist",
        badge: ["Javiera Studio"],
        description: "Bekerja dalam proses produksi 3D dengan fokus pada lighting dan visual development. Pengalaman ini membentuk perhatian saya terhadap detail visual yang kemudian membawa saya tertarik pada UI/UX dan pengembangan web."
    },
    {
        no: 3,
        title: "Frontend Development",
        badge: ["Self-Learning", "Personal Projects"],
        description: "Mulai mempelajari web development secara mandiri dan membangun berbagai project menggunakan HTML, CSS, JavaScript, TypeScript, React, dan Tailwind CSS."
    },
    {
        no: 4,
        title: "Institut Teknologi dan Bisnis Vinus",
        badge: ["S1 Sistem Informasi"],
        description: "Saat ini menempuh pendidikan Sistem Informasi untuk memperdalam pemahaman mengenai teknologi, sistem, dan pengembangan aplikasi."
    }

    ]

    return (
        <div id="journey" className="bg-bg-second flex flex-col gap-10 px-[clamp(24px,2vw,36px)] py-20 font-main">
            <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold"><span className="text-white border-b-2 pb-1 border-text">Perjalanan</span></h2>
            <div>
                <div className="relative">
                    <div className="border-l-4 border-text border-dashed absolute left-8 top-15 bottom-15 w-0">
                    </div>
                    <CardJourney itemList={journeyItemList} />
                </div>
            </div>

        </div>
    )
}