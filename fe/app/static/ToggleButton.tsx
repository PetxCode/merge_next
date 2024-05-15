"use client";

import { GlobalContext } from "@/global/GlobalProvider";
import React, { useContext } from "react";
import { MdArrowBack } from "react-icons/md";

const ToggleButton = () => {
  const { toggle, onToggle } = useContext(GlobalContext);
  return (
    <div>
      <div
        className={`absolute -right-2 bg-black text-white rounded-sm top-5 cursor-pointer transition-all duration-1000 ${
          !toggle ? "rotate-0" : "rotate-180"
        } `}
        onClick={onToggle}
      >
        <MdArrowBack />
      </div>
    </div>
  );
};

export default ToggleButton;
