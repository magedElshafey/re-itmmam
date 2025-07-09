import HtmlRenderer from "../html/HtmlRender";

interface GrayCardProps {
  data: any;
}
const GrayCard: React.FC<GrayCardProps> = ({ data }) => {
  return (
    <div className="bg-[#e5e6eb] min-h-[180px] lg:min-h-[270px] w-full p-5 flex flex-col items-center justify-center rounded-lg relative">
      {/* <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white font-black z-10 bg-opacity-25 opacity-65">
        {++index}
      </p> */}
      <div className="w-full ">
        {data?.title ? (
          <p className="text-md md:text-lg lg:text-xl 2xl:text-2xl font-bold z-30 text-mainColor text-center mb-2">
            {data?.title}
          </p>
        ) : null}
        {data?.description ? (
          <div className="text-center text-mainColor">
            <HtmlRenderer html={data?.description || ""} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GrayCard;
