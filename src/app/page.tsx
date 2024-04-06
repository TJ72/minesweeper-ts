"use client";

import { useState, useContext } from "react";
import { ConfigContext, ConfigProvider } from "@/providers/configProvider";

export default function Home() {
  const [config, setConfig] = useState({ rows: 10, cols: 10, mines: 10 });

  return (
    <ConfigProvider config={config} setConfig={setConfig}>
      <div>Home</div>
    </ConfigProvider>
  );
}
