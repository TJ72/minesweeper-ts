"use client";

import { createContext } from "react";
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

import type { Config } from "@/types";

export const ConfigContext = createContext<{
  config: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
}>({ config: { rows: 10, cols: 10, mines: 10 }, setConfig: () => {} });

type ConfigProviderProps = {
  config: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
};

export const ConfigProvider: FC<PropsWithChildren<ConfigProviderProps>> = ({
  config,
  setConfig,
  children,
}) => {
  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
