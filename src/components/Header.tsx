import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div  className={`header fixed w-full z-[100] ${
      isScrolled &&
      "bg-[#000000d2] sm:bg-[#000000d2]  transition-all duration-[.4s] ease"
    } `}>
      <div className=" flex   justify-between items-center font-Bowlby py-10 px-10">
        <div className="text-[1.6vw] font-normal ">Burger Heaven</div>
        <div className="flex text-[1.6vw] items-center space-x-10">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Menu</div>
          <button className="text-black bg-[#B3A0CD] p-4"> Order Online</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
