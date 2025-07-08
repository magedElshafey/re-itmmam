import HtmlRenderer from "../html/HtmlRender";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
import { motion } from "framer-motion";
import detailsImg from "../../../assets/detailsImg.png";
import { useTranslation } from "react-i18next";
interface DetailsCardProps {
  item: ServiceWithChild;
  index: number;
}
const DetailsCard: React.FC<DetailsCardProps> = ({ item, index }) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        bounce: 0.2,
        delay: index ? index * 0.1 : 0,
      }}
      className="flex flex-col items-center justify-center gap-2"
    >
      <div className="flex flex-col items-center">
        <p className="font-semibold text-3l md:text-4xl lg:text-5xl xl:text-6xl text-[#994ECC]">
          {++index}
        </p>
        <img alt="icon" src={detailsImg} className="h-[100px]" loading="lazy" />
      </div>
      <p
        className={`font-bold text-center ${
          i18n.language === "ar"
            ? "text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            : "text-base md:text-md lg:text-lg xl:text-xl"
        }`}
      >
        {item?.name}
      </p>
      {item?.description && (
        <div className="text-center">
          <HtmlRenderer html={item?.description} />
        </div>
      )}
    </motion.div>
  );
};

export default DetailsCard;
