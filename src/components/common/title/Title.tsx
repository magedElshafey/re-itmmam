import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <motion.h3
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        bounce: 0.2,
      }}
      className={`text-center font-black mb-4 text-xl md:text-2xl lg:text-3xl xl:text-5xl `}
    >
      {t(title)}
    </motion.h3>
  );
};

export default Title;
