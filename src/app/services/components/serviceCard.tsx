import { FC } from "react";
import type { Service } from "../types/services.types";

interface Props {
  service: Service;
  index: number;
}

const ServiceCard: FC<Props> = ({ service, index }) => {
  return (
    <div
      className={`w-full  bb  py-5 px-4 ${
        index % 2 ? "bg-[#ebfffe]" : "bg-[#f8f5fc]"
      }`}
    >
      <p className="font-bold text-2xl">{service.title}</p>
      <div
        className="px-3"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />
    </div>
  );
};

export default ServiceCard;
