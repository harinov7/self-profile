

export default function CardSkill({
    itemList,
    title,
    description,

}) {

    return(
        <div className="border rounded-lg p-5 w-[clamp(250px,70vw,450px)] flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
                {itemList.map((e, i) => (
                    <img key={i} src={e.src} alt={e.alt} className="w-10 h-10"/>
                ))}
            </div>
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight">{title}</h2>
            <p>
                {description}
            </p>
        </div>
    )
}