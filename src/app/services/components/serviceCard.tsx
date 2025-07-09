import { FC } from "react";
import type { Service } from "../types/services.types";

interface Props {
    service: Service,
    index: number
}

const ServiceCard: FC<Props> = ({ service, index }) => {
    return (
        <div 
            className={`w-full flex flex-col gap-4 justify-center items-center py-5 px-4 ${index % 2 ? "bg-[#ebfffe]" : "bg-[#f8f5fc]"}`}
        >
            <p className="font-bold text-2xl">
                {service.title}
            </p>
            <div dangerouslySetInnerHTML={{__html: service.description}}/>
        </div>
    )
}

export default ServiceCard;