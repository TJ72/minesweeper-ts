"use client";

import { useContext } from "react";
import { ConfigContext } from "@/providers/configProvider";

import Cell from "./Cell";

function Board() {
  const { config } = useContext(ConfigContext);
  const { rows, cols } = config;

  return (
    <>
      {Array.from({ length: rows }, (_, i) => (
        <div className="flex" key={i}>
          {Array.from({ length: cols }, (_, j) => (
            <Cell key={j} />
          ))}
        </div>
      ))}
    </>
  );
}

export default Board;
