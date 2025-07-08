import { FC } from "react";

interface Props {
    card: {
        title: string,
        description: string,
        content: string,
        footer: string
    },
    index: number
}

const ServiceCard: FC<Props> = ({ card, index }) => {
    return (
        <div 
            className={`w-full flex flex-col gap-4 justify-center items-center py-5 px-4 ${index % 2 ? "bg-[#ebfffe]" : "bg-[#f8f5fc]"}`}
        >
            <p className="font-bold text-2xl">
                {card.title}
            </p>
            <p className="text-xl">
                {card.description}
            </p>
            <div>
                {card.content}
            </div>
            <p className="font-bold">
                {card.footer}
            </p>
        </div>
    )
}

export default ServiceCard;