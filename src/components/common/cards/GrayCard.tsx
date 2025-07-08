interface GrayCardProps {
  index: number;
  data: {
    title: string;
    description: string;
  };
}
const GrayCard: React.FC<GrayCardProps> = ({ index, data }) => {
  return (
    <div className="bg-[#e5e6eb] min-h-[270px] w-full p-7 flex flex-col items-center justify-center rounded-lg relative">
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white font-black z-10 bg-opacity-25 opacity-65">
        {++index}
      </p>
      <p className="text-md md:text-lg lg:text-xl 2xl:text-2xl font-bold z-30 text-mainColor">
        {data?.title} :
      </p>
      <p className="text-center text-mainColor w-full md:w-1/2 mx-auto">
        {data?.description}
      </p>
    </div>
  );
};

export default GrayCard;
