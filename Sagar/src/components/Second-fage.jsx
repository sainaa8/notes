import Image from "next/image";
const SecondPage = () => {
  return (
    <div className="mx-auto px-20 py-4 mt-20  bg-slate-50 flex-col">
      <div className="mx-auto flex justify-center ">
        <div className="bg-slate-300 w-[100px] h-[30px] rounded-lg flex justify-center">
          About me
        </div>
      </div>
      <div className="relative flex mt-40">
        <div className="w-[300px] md:w-[380px] h-[340px] md:h-[460px] bg-gray-300" />
        <div className="absolute z-10 -top-5 md:-top-10 left-1/2 md:left-[50px] -translate-x-1/2 md:translate-x-0">
          <div className="w-[260px] md:w-[360px] h-[340px] md:h-[460px] ">
            <Image
              fill
              src="/ultra.jpeg"
              className="border-l-8 border-b-8 border-r-8 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
