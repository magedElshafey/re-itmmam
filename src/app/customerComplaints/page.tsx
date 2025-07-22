import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import Loader from "../../components/common/loader/Loader";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import Contact from "../../components/home/contact/Contact";
import RegisterInterst from "../../components/home/RegisterInterst";
import useGetComplaint from "./api/useGetComplaint";
import { motion } from "framer-motion";
import useDownloadPdf from "../lists/api/useDownloadPdf";
import { saveAs } from "file-saver";
interface ComplaintsProps {
  darkLogo: string;
}

const Page: React.FC<ComplaintsProps> = ({ darkLogo }) => {
  const { t } = useTranslation();
  const { isLoading: loadingData, data } = useGetComplaint();

  const { mutateAsync, isPending } = useDownloadPdf();

  const handleDownload = async (id: number | string) => {
    try {
      const data = await mutateAsync(id);
      const blob = new Blob([data], { type: "application/pdf" });
      saveAs(blob, `report-${id}.pdf`);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  if (loadingData) {
    return <Loader />;
  }
  return (
    <>
      <Head title={tabTitle(t("Customer complaints"))} />
      <Hero image={bg} title={t("Customer complaints")} />
      <div className="container mx-auto px-3 md:px-16 lg:px-24 my-8 md:my-10 lg:my-12 xl:my-14">
        {data && data?.length ? (
          <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <p className="text-base md:text-md lg:text-lg xl:text-lg 2xl:text-2xl text-center font-semibold mb-3">
              {t(
                "Our Commitment: Itmam Invest treats every complaint as an opportunity to enhance service quality, strengthen controls, and safeguard client interests."
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {data?.map((item: any, index: number) => (
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
                  <p className="text-center text-white text-md md:text-lg lg:text-xl xl:text-2xl  font-bold mb-4">
                    {item?.name} {item?.year ? "-" + item.year : null}
                  </p>
                  <button
                    disabled={isPending}
                    className={`bg-white w-[70%] mx-auto p-2 rounded-lg flex items-center justify-center text-black ${
                      isPending ? "bg-opacity-10 cursor-not-allowed" : ""
                    }`}
                    key={index}
                    onClick={() => handleDownload(item?.id)}
                  >
                    {t("Complaints policy")}
                  </button>
                </motion.div>
              ))}
            </div>
            <p className=" font-semibold my-5">
              *{" "}
              {t(
                "If you have a complaint you would like to submit, please review the complaint submission procedures in the file (Complaint Submission Procedures)."
              )}
            </p>
          </div>
        ) : null}
      </div>
      <div className="w-screen bg-[#F5F5F5]  py-5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 xl:mt-10">
            <div className="w-full md:w-1/2">
              <RegisterInterst
                email="complaint@itmaminvest.com"
                darkLogo={darkLogo}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
