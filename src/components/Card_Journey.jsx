

export default function CardJourney({ itemList }) {
    return (
        <div className="relative flex flex-col gap-10">
            {itemList.map((e, i) => (
                <div className="flex items-center justify-between w-full" key={i}>
                    <div className="flex-shrink-0">
                        <img
                            src={e.src}
                            alt={e.alt}
                            className="rounded-full shadow-lg w-[clamp(48px,21vw,72px)] aspect-square object-cover"
                        />
                    </div>
                    <div className="ml-7 px-5 py-4 border rounded-lg shadow-md w-[clamp(200px,70vw,450px)]">
                        <h2 className="text-[clamp(18px,2vw,28px)] break-words font-bold">{e.title}</h2>
                        <div className="flex flex-wrap gap-1 text-xs mb-5">
                            {e.badge.map((e, i) => (
                                <div key={i} className="bg-badge w-fit px-2 rounded-md">
                                    <p className="font-medium">{e}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm md:text-base">{e.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}