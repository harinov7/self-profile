

export default function CardPortfolio({
    itemList
}) {

    return (
        <div className="border rounded-lg w-[clamp(250px,70vw,450px)] flex flex-col gap-2">
            <img src={itemList.src} alt="Web_Porto_Dunia_Es" className="rounded-lg" />
            <div className="px-5 py-2">
                <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight">{itemList.title}</h2>
                <div className="flex flex-wrap gap-1 text-xs mb-5">
                    {itemList.badge.map((e, i) => (
                        <div key={i} className="bg-badge w-fit px-2 rounded-md">
                            <p className="font-medium">{e}</p>
                        </div>
                    ))}
                </div>
                <p>{itemList.description}</p>
                <div className="w-fit px-4 py-2 my-5 border rounded-lg">
                    <a href={itemList.href} target="_blank" rel="noopener noreferrer">Lihat</a>
                </div>
            </div>
        </div>
    )
}