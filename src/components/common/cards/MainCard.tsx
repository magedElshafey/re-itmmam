import { GoArrowUpLeft } from "react-icons/go";
import createSlug from "../../../utils/createSlug";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HtmlRenderer from "../html/HtmlRender";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
import { motion } from "framer-motion";

interface MainCardProps {
  data: ServiceWithChild;
  index?: number;
}
const MainCard: React.FC<MainCardProps> = ({ data, index }) => {
  const { t, i18n } = useTranslation();
  const stripHtml = (html: string): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const cleanedDescription = stripHtml(data?.description || "");
  const truncatedDescription =
    cleanedDescription.length > 150
      ? cleanedDescription.substring(0, 150) + "..."
      : cleanedDescription;
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        bounce: 0.2,
        delay: index ? index * 0.1 : 0,
      }}
      className="w-full bg-custom-gradient p-3 rounded-3xl flex items-center text-white text-center duration-300 hover:rounded-none cursor-pointer"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p
          className={` ${
            i18n.language === "ar"
              ? "text-lg md:text-xl lg:text-2xl xl:text-3xl"
              : "text-base md:text-md lg:text-lg"
          } text-center ${data?.description ? "mb-1" : ""} font-extrabold`}
        >
          {data?.name}
        </p>

        {truncatedDescription ? (
          <HtmlRenderer html={truncatedDescription} />
        ) : null}

        <Link
          to={`/services/${data?.id}/${createSlug(data?.name)}`}
          state={{
            serviceId: data?.id,
          }}
          className="flex items-center justify-center gap-1 bg-white py-3 px-5 rounded-3xl text-mainColor mt-2 duration-300 hover:bg-babyBlueColor"
        >
          <span>{t("more")}</span>
          <GoArrowUpLeft />
        </Link>
      </div>
    </motion.div>
  );
};
export default MainCard;
