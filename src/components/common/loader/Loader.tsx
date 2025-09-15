// import logo from "../../../assets/darkLogo-min.webp";
import gifaya from "../../../assets/Untitled.gif";
const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-12 fixed top-0 left-0 z-50 bg-[#018349]">
      <img
        alt="loading"
        src={gifaya}
        className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px] object-contain"
      />
      {/* <img alt="logo" src={logo} className="h-[50px]" />
      <div className="colorful"></div> */}
    </div>
  );
};

export default Loader;
