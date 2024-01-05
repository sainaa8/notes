import { useState } from "react";
import { motion, AnimatePresence } from "framer";

const Bomb = () => {
  const [bomb, setBomb] = useState(false);
  const explode = () => {
    setBomb((el) => !el);
  };
  return (
    <div>
      <div
        onClick={explode}
        className="fixed top-[800px] right-[850px] text-[60px]"
      >
        💣
      </div>
      {bomb && (
        <motion.div
          initial={{ scale: 0, x: 0, rotate: 0 }}
          animate={{ scale: 4, transition: { duration: 0.3 } }}
          className="fixed  "
        >
          <video
            className="w-[1400px]
            h-[1500px]"
            src="/bomb.mp4"
            type="video/mp4"
            autoPlay
            muted
          >
            {" "}
          </video>
        </motion.div>
      )}
    </div>
  );
};
export default Bomb;
