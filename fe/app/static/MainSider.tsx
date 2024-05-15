"use client";

import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import Sider from "./Sider";
import { GlobalContext } from "@/global/GlobalProvider";

const MainSider = () => {
  const { toggled, setToggled } = useContext(GlobalContext);
  return (
    <div
      className="fixed"
      onMouseEnter={() => {
        setToggled(true);
      }}
      onMouseLeave={() => {
        setToggled(false);
      }}
    >
      {toggled && <ToggleButton />}
      <Sider />
    </div>
  );
};

export default MainSider;
