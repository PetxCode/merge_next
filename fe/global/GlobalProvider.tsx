"use client";

import { iProps } from "@/service/interfaces";
import React, { FC, PropsWithChildren, useState, createContext } from "react";

export const GlobalContext = createContext({} as iProps);

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggled, setToggled] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <GlobalContext.Provider
      value={{ toggle, setToggle, onToggle, toggled, setToggled }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
