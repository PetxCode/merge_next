"use client";

import { GlobalContext } from "@/global/GlobalProvider";
import React, { useContext } from "react";

const Sider = () => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div
      className={`h-[100vh] bg-slate-100 ${toggle ? "w-[230px]" : "w-[80px]"} `}
    >
      <div className="flex flex-col h-[100%] bg-red-400">
        <div>1</div>
        <div>2</div>
        <div className="flex-1" />
        <div className=" ">3</div>
      </div>
    </div>
  );
};

export default Sider;
