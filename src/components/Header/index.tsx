"use client";

import { useContext } from "react";
import { ConfigContext } from "@/providers/configProvider";

function Header() {
  const { config, setConfig } = useContext(ConfigContext);
  const handleClickBtn = () => {
    setConfig({ ...config, rows: 20, cols: 20, mines: 40 });
  };

  return (
    <div className="max-w-64 px-20 flex">
      <button onClick={handleClickBtn}>Set up</button>
    </div>
  );
}

export default Header;
