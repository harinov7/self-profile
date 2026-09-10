

export default function CardSkill({
    itemList,
    title,
    description,

}) {

    return(
        <div className="border-t-2 border-border rounded-b-3xl p-5 w-[clamp(250px,70vw,450px)] flex flex-col gap-2 shadow-[0_4px_15px_rgba(122,209,117,0.2)]">
            <div className="flex flex-wrap gap-2">
                {itemList.map((e, i) => (
                    <img key={i} src={e.src} alt={e.alt} className="w-10 h-10"/>
                ))}
            </div>
            <h2 className="text-[clamp(22px,2vw,32px)] font-semibold leading-tight">{title}</h2>
            <p>
                {description}
            </p>
        </div>
    )
}