import { motion } from "framer-motion";
import React from "react";

function Text() {
  return (
    <div>
      <motion.div 
      initial={{}}
      animate= {
        {}
      }
      className="flex justify-center items-center">
        <h1 className="font-Bowlby font-normal text-[#d1ef53] uppercase text-center text-[5.1vw] inline">
          the best burger i’ve ever had
        </h1>
      </motion.div>
    </div>
  );
}

export default Text;
