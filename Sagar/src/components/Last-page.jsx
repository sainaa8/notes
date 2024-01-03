import { HiOutlineMail } from "react-icons/hi";
import { RxCopy } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";
import { motion, AnimatePresence } from "framer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Address = () => {
  const [copy, setCopy] = useState(false);
  const OnCopy = () => {
    setCopy((copy) => !copy);
  };
  let timeout;
  function setFunc() {
    timeout = setTimeout(backFunc, 2000);
  }
  function backFunc() {
    setCopy((copy) => !copy);
  }
  return (
    <div className="mx-auto px-20 py-[96px] gap-[48px] flex flex-col items-center ">
      <div className="flex gap-[16px] flex-col items-center">
        <div className="text-[14px] rounded-lg w-[120px] flex justify-center items-center h-[30px] bg-slate-200 dark:bg-gray-500">
          Get in touc
        </div>
        <div className="flex flex-col text-[15px] items-center text-gray-600 dark:text-white">
          What’s next? Feel free to reach out to me if you're looking for{" "}
          <p>a developer, have a query, or simply want to connect.</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <div className="flex gap-[20px] text-[36px] items-center">
          <HiOutlineMail />
          <strong>reachsagarshah@gmail.com</strong>
          <CopyToClipboard text="reachsagarshah@gmail.com" onCopy={OnCopy}>
            <RxCopy
              onClick={setFunc}
              className="hover:scale-125 active:scale-100 ease-in cursor-pointer"
            />
          </CopyToClipboard>
        </div>

        <div className="flex gap-[20px] text-[36px] items-center">
          <BsTelephone /> <strong>+91 8980500565</strong>
          <CopyToClipboard text="+91 8980500565" onCopy={OnCopy}>
            <RxCopy
              onClick={setFunc}
              className="hover:scale-125 active:scale-100 ease-in-out cursor-pointer"
            />
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text=[16px] text-gray-600 dark:text-white">
          You may also find me on these platforms!
        </div>
        <div className="flex text-[24px] mt-[14px] gap-4 text-gray-700 dark:text-white ">
          <RiGithubLine />
          <FiTwitter />
          <FiFigma />
        </div>
      </div>
      <div>
        <AnimatePresence>
          {copy && (
            <motion.div
              className="fixed bottom-[90px]  right-[48%] px-[20px] py-[5px] rounded-lg text-2xl text-bolder text-white bg-black dark:bg-white dark:text-black"
              initial={{ scale: 0, x: 0, rotate: 0 }}
              animate={{ scale: 1, transition: { duration: 1 } }}
              exit={{ scale: 0, transition: { duration: 1 } }}
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Address;
