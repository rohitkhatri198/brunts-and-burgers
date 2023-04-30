import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hover, slide, slideRight, transformY } from "../../animation";
function Banner() {

  


  return (
    <div className="py-2rem ">
      <div className="w-\full my-0 py-8 px-[11vw]">
        <h1 className="text-[7vw]  leading-[0.9em] font-Bowlby text-center">{`NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT`}</h1>
      </div>
      <div className=" w-full relative top-[-2.5rem] flex items-center overflow-hidden bg-[#1d1c1c]">
        <motion.div variants={slide} initial="initial" animate="animate" className="relative left-[10rem]">
          <img src="/images/vector1.png" className="w-[35vw]" alt="left" />
        </motion.div>
        <motion.div
          variants={transformY}
          initial="initial"
          animate="animate"
          className="relative right-[2rem] left-[2vw] z-10"
        >
          <motion.img
            variants={hover}
            initial="initial"
            animate="animate"
            src="/images/burgers.png"
            className="w-[65vw]"
            alt="burgers"
          />
        </motion.div>
        <motion.div variants={slideRight} initial="initial" animate="animate"  className="relative right-[9rem]">
          <img src="/images/vector2.png" className="w-[35vw]" alt="right" />
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
