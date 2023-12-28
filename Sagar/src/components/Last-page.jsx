import { HiOutlineMail } from "react-icons/hi";
import { RxCopy } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";

const Address = () => {
  return (
    <div className="mx-auto px-20 py-[96px] gap-[48px] flex flex-col items-center">
      <div className="flex gap-[16px] flex-col items-center">
        <p className="text-[14px] rounded-lg w-[120px] flex justify-center items-center h-[30px] bg-slate-200">
          Get in touc
        </p>
        <p className="flex flex-col text-[15px] items-center text-gray-600">
          What’s next? Feel free to reach out to me if you're looking for{" "}
          <p>a developer, have a query, or simply want to connect.</p>
        </p>
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <p className="flex gap-[20px] text-[36px] items-center">
          <HiOutlineMail />
          <strong>reachsagarshah@gmail.com</strong>
          <RxCopy />
        </p>
        <p className="flex gap-[20px] text-[36px] items-center">
          <BsTelephone /> <strong>+91 8980500565</strong> <RxCopy />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text=[16px] text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="flex text-[24px] mt-[14px] gap-4 text-gray-700  ">
          <RiGithubLine />
          <FiTwitter />
          <FiFigma />
        </div>
      </div>
    </div>
  );
};
export default Address;
