import Hero from "../../components/common/hero/Hero";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import bg from "../../assets/assets-min.webp";
import useLists from "./api/useLists";
import { motion } from "framer-motion";
import Contact from "../../components/home/contact/Contact";
import RegisterInterst from "../../components/home/RegisterInterst";

import { useState } from "react";
import { saveAs } from "file-saver";
import useDownloadPdf from "./api/useDownloadPdf";
interface ListsProps {
  email: string;
  darkLogo: string;
}
const Lists: React.FC<ListsProps> = ({ email, darkLogo }) => {
  const { t } = useTranslation();
  const { data } = useLists();
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const { isLoading, refetch } = useDownloadPdf(selectedId);
  const handleDownload = async (id: number | string) => {
    setSelectedId(id);
    const result = await refetch();
    if (result.data) {
      // حفظ الملف باستخدام file-saver
      const blob = new Blob([result.data], { type: "application/pdf" });
      saveAs(blob, `report-${id}.pdf`);
    }
  };
  return (
    <div>
      <Head title={tabTitle(t("Financial statements"))} />
      <Hero
        image={bg}
        title={t("Financial statements")}
        listDesc={t("Your clear guide to better business decisions")}
        isList={true}
      />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 my-8 md:my-10 lg:my-12 xl:my-14">
        {data && data?.length ? (
          <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <p className="text-base md:text-md lg:text-lg xl:text-lg 2xl:text-2xl font-semibold mb-3">
              {t("In completion, we stand out for several compelling reasons.")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {data?.map((item, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    bounce: 0.2,
                    delay: index ? index * 0.1 : 0,
                  }}
                  className="bg-custom-gradient p-5 rounded-3xl flex flex-col items-center justify-center text-white text-center duration-300 hover:rounded-none cursor-pointer"
                >
                  <img
                    alt={item?.name}
                    src={item?.icon}
                    className=" w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain mx-auto brightness-0 invert mb-4"
                  />
                  <p className="text-center text-white text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold mb-4">
                    {item?.name} - {item?.year}
                  </p>
                  <button
                    disabled={isLoading}
                    className={`bg-white w-[70%] mx-auto p-2 rounded-lg flex items-center justify-center text-black ${
                      isLoading ? "bg-opacity-10 cursor-not-allowed" : ""
                    }`}
                    key={index}
                    onClick={() => handleDownload(item?.id)}
                  >
                    {t("Download the report")}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-1/2">
            <RegisterInterst email={email} darkLogo={darkLogo} />
          </div>
          <div className="w-full md:w-1/2">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lists;
