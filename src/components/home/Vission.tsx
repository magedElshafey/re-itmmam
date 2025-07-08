import { About } from "../../types/About";
import HtmlRenderer from "../common/html/HtmlRender";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
interface VissionProps {
  data: About;
}

const Vission: React.FC<VissionProps> = ({ data }) => {
  const {i18n} = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [-5, 5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - (left + width / 2);
      const offsetY = e.clientY - (top + height / 2);
      x.set(offsetX);
      y.set(offsetY);
    }
  };
  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-[200px] lg:h-[320px] rounded-3xl cursor-pointer relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.image})`, rotateX, rotateY }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${data?.image})`,
          rotateX,
          rotateY,
          filter: "brightness(1.5) contrast(1.2)",
          opacity: 0.7,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${data?.image})`,
          rotateX,
          rotateY,
          filter: "blur(8px) brightness(1.2)",
          opacity: 0.6,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-30 rounded-3xl text-white flex justify-end items-center"
        style={{ rotateX, rotateY }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-end px-8">
          <h1 className= {` font-bold mb-2 ${i18n.language === "ar" ? "text-3xl lg:text-5xl xl:text-6xl" : ""}`}>{data?.name}</h1>
          {data?.description && <HtmlRenderer html={data?.description} />}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Vission;

