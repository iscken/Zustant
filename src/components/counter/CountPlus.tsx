"use client";
import { useCountStore } from "@/stores/useCoutStore";
import React from "react";

const CountPlus = () => {
  const { increment } = useCountStore();
  return (
    <div>
      <button onClick={increment}>plus</button>
    </div>
  );
};

export default CountPlus;
