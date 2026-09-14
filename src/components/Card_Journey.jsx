import Journey from "./Journey"


export default function CardJourney({
    itemList,
    addToRefs,
    isVisible
}) {
    return (
        <div className="relative flex flex-col gap-10">
            {itemList.map((e, i) => (
                <div className={`flex items-center justify-between w-full ${Number(e.no) % 2 === 1 ? `md:justify-end` : `md:justify-start`}`} key={i}>
                    <div className="flex-shrink-0">
                        <div className="rounded-full absolute bg-card w-[clamp(48px,15vw,72px)] h-[clamp(48px,15vw,72px)] flex items-center justify-center left-8 -translate-x-1/2 -translate-y-1/2 md:left-1/2">
                            <p className="text-white font-bold text-[clamp(12px,7vw,32px)] text-shadow-lg">{e.no}</p>
                        </div>
                    </div>
                    <div id={`journeyCard${e.no}`} ref={addToRefs} className={`ml-7 px-5 py-4 border-t-2 border-border rounded-b-3xl w-[clamp(150px,55vw,450px)] md:w-[clamp(250px,30vw,450px)] animate-light transition ease-in-out duration-1200 hover:duration-300 hover:animate-light-hover hover:scale-103 ${isVisible[`journeyCard${e.no}`] ? `section-show linear duration-300` : `${Number(e.no) % 2 === 1 ? `section-hide-right ease-in-out duration-300` : `section-hide-left ease-in-out duration-300`}`}`}>
                        <h2 className="text-[clamp(22px,2vw,32px)] font-semibold leading-tight text-white">{e.title}</h2>
                        <div className="flex flex-wrap gap-1 text-xs mb-5">
                            {e.badge.map((e, i) => (
                                <div key={i} className="bg-badge text-text w-fit px-2 rounded-md">
                                    <p className="font-medium">{e}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm md:text-base text-white">{e.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}