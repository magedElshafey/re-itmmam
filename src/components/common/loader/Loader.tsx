import logo from "../../../assets/darkLogo-min.webp";
const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-12 fixed top-0 left-0 z-50 bg-white">
      <img alt="logo" src={logo} className="h-[50px]" />
      <div className="colorful"></div>
    </div>
  );
};

export default Loader;
