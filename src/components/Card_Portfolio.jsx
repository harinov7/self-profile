

export default function CardPortfolio({
    itemList,
}) {

    return (
        <div className="border-t-2 border-border rounded-b-3xl w-[clamp(250px,70vw,550px)] flex flex-col gap-2 animate-light h-full">
            <img src={itemList.src} alt={itemList.alt} className="rounded-b-lg" />
            <div className="px-5 py-2">
                <h2 className="text-[clamp(22px,2vw,32px)] font-semibold leading-tight text-white">{itemList.title}</h2>
                <div className="flex flex-wrap gap-1 text-xs mb-5">
                    {itemList.badge.map((e, i) => (
                        <div key={i} className="bg-badge text-text w-fit px-2 rounded-md">
                            <p className="font-medium">{e}</p>
                        </div>
                    ))}
                </div>
                <p className="text-white">{itemList.description}</p>

                <div className="w-fit">
                    <a href={itemList.href} target="_blank" rel="noopener noreferrer">
                        <p className="px-4 py-2 my-5 rounded-lg bg-card text-white font-bold transition duration-300 hover:scale-107">
                            {itemList.btn}
                        </p>
                    </a>

                </div>
            </div>
        </div>
    )
}