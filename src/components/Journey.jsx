import Dummy_Image from "../assets/Dummy_Image.png"
import CardJourney from "./Card_Journey"

export default function Journey({
    lang,
    language,
    addToRefs,
    isVisible
}) {

    const journeyItemList = [{
        no: 1,
        title: lang[language].journeySection.box1.title,
        badge: lang[language].journeySection.box1.badge,
        description: lang[language].journeySection.box1.description
    },
    {
        no: 2,
        title: lang[language].journeySection.box2.title,
        badge: lang[language].journeySection.box2.badge,
        description: lang[language].journeySection.box2.description
    },
    {
        no: 3,
        title: lang[language].journeySection.box3.title,
        badge: lang[language].journeySection.box3.badge,
        description: lang[language].journeySection.box3.description
    },
    {
        no: 4,
        title: lang[language].journeySection.box4.title,
        badge: lang[language].journeySection.box4.badge,
        description: lang[language].journeySection.box4.description
    }

    ]

    return (
        <div id="journey" className="bg-bg-second flex flex-col gap-10 px-[clamp(32px,8vw,96px)] py-20 font-main overflow-x-clip">
            <h2 className="text-[clamp(26px,3vw,48px)] font-extrabold lg:flex lg:justify-center"><span className="text-white border-b-2 border-b-4 pb-1 border-text">{lang[language].journeySection.title}</span></h2>
            <div>
                <div className="relative">
                    <div className="border-l-4 border-text border-dashed absolute left-8 top-[clamp(24px,2vw,48px)] bottom-15 w-0 md:left-1/2">
                    </div>
                    <CardJourney itemList={journeyItemList} addToRefs={addToRefs} isVisible={isVisible} />
                </div>
            </div>

        </div>
    )
}