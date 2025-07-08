import { useTranslation } from "react-i18next";
import img from "../../assets/nointernet-min.webp";
const OfflineNetworkPage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-screen h-screen flex  items-center justify-center">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 h-full">
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <p className="text-red-600 font-bold text-md md:text-lg lg:text-xl xl:text-2xl">
            {t("no internet connection")}
          </p>
          <p className="text-slate-500">
            {t("please check your internet connection and try again")}
          </p>
          <img alt="no-internet" src={img} className="max-w-full h-[350px]" />
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center min-w-[180px] rounded-3xl py-3 px-4 bg-mainColor text-white"
          >
            {t("retry again")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineNetworkPage;
