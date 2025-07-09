import { Link } from "react-router-dom";
import HtmlRenderer from "../html/HtmlRender";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  descreption?: string;
  metaDescreption?: string;
  btns?: {
    name: string;
    path: string;
  }[];
  image: string;
  isList?: boolean;
  listDesc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  descreption,
  btns,
  image,
  isList = false,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="w-screen h-[80vh] bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-[70vh] bg-black bg-opacity-40   flex items-center justify-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24  flex flex-col items-center justify-center gap-2">
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-white ${
                i18n.language === "ar"
                  ? "text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                  : "text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl"
              } ${descreption ? "mb-2" : ""} ${isList ? "text-center" : ""}`}
            >
              {t(title)}
            </motion.h1>
          )}
          <div className="text-center text-white text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {descreption && <HtmlRenderer html={descreption} />}
          </div>
          {btns && btns?.length && (
            <div className="flex items-center gap-2 flex-wrap">
              {btns?.map((item, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                >
                  <Link
                    to={item?.path}
                    className="bg-white text-darkMainColor py-3 px-4 flex items-center flex-wrap justify-center rounded-3xl duration-500 min-w-[150px]  hover:bg-babyBlueColor hover:text-white"
                  >
                    {t(item?.name)}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
/**
 *  <div
     
    >
      <div >
        <div >
          <div
            className={`w-full flex items-center ${
              pathname === "/" ? "justify-start" : "justify-center"
            }`}
          >
            <div>
             
              {isList && listDesc && (
                <p
                  className={`text-white text-center ${
                    i18n.language === "ar"
                      ? "text-lg md:text-xl lg:text-2xl xl:text-3xl"
                      : "text-base md:text-md lg:text-lg xl:text-xl 2xl:text-3xl"
                  }`}
                >
                  {listDesc}
                </p>
              )}
              
              {metaDescreption && <HtmlRenderer html={metaDescreption} />}
             
            </div>
          </div>
        </div>
      </div>
    </div>
 */
