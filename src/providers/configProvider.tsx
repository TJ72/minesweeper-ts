"use client";

import { createContext, useState } from "react";
import type { Dispatch, FC, ReactNode, SetStateAction } from "react";

import type { Config } from "@/types";

type ConfigProviderProps = {
  config: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
};

export const ConfigContext = createContext<ConfigProviderProps>({
  config: { rows: 10, cols: 10, mines: 10 },
  setConfig: () => {},
});

export const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState({ rows: 10, cols: 10, mines: 10 });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
