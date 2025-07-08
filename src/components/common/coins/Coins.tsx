import coins from "../../../assets/coins.webp";
const Coins = () => {
  return (
    <img
      alt="icon"
      src={coins}
      className="w-[15px] h-[15px] object-contain duration-300 group-hover:rotate-180"
    />
  );
};

export default Coins;
