

export default function CardSkill({
    itemList,
    title,
    description,

}) {

    return(
        <div className="border-t-2 border-border rounded-b-3xl p-5 w-[clamp(250px,25vw,400px)] 
        flex flex-col h-full gap-[clamp(12px,3vw,20px)] animate-light transition duration-300
        hover:animate-light-hover hover:scale-103">
            <div className="flex flex-wrap gap-[clamp(12px,3vw,20px)]">
                {itemList.map((e, i) => (
                    <img key={i} src={e.src} alt={e.alt} className="w-[clamp(36px,8vw,56px)] h-[clamp(36px,8vw,56px)]"/>
                ))}
            </div>
            <h2 className="text-[clamp(22px,2vw,32px)] font-semibold leading-tight">{title}</h2>
            <p>
                {description}
            </p>
        </div>
    )
}