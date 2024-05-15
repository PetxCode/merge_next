"use client";
import { GlobalContext } from "@/global/GlobalProvider";
import React, { FC, PropsWithChildren, useContext } from "react";

interface iProps {
  children: React.ReactNode;
}

const Context: FC<iProps> = ({ children }) => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div>
      <div className="w-full flex justify-end ">
        <div
          className={`${
            toggle ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-100px)]"
          } bg-red-50 h-[150vh]`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Context;
