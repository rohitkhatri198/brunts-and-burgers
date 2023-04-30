import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="py-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className="bg-[#D1EF53] mx-8  rounded-3xl"
      >
        <div className="flex gap-[1vw] px-20 py-16">
          <h1 className="text-[#1E1E1E] w-[85vw] leading-[1em] uppercase text-[6vw] font-Bowlby  font-normal">
            The Burger Above All Burgers
          </h1>
          <div>
            <p className="text-[#1e1e1e] font-semibold text-[1.9vw] font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nec ornare neque.
            </p>
            <button className="bg-[#E9E3DC] mt-12 box-shadow font-Bowlby uppercase font-normal text-[#1e1e1e] text-lg border-[4px] border-[#1e1e1e] border-solid py-3 px-8">
              About Us
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
