import Image from "next/image";
const Images = (props) => {
  const { imgsrc, wImg, hImg, sideImg } = props;
  return (
    <div className="relative  z-10 mt-20  ">
      <div className="w-64 md:w-72 h-72 md:h-80 bg-gray-300" />
      <div
        className={`absolute -top-5 md:-top-10 left-1/2 md:${sideImg} -translate-x-1/2 md:translate-x-0`}
      >
        <div className={`relative w-60 md:w-72 h-72 md:h-80`}>
          <Image
            fill
            src={imgsrc}
            className="border-l-8 border-b-8 border-r-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};
export default Images;
