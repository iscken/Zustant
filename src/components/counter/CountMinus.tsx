"use client";
import { useCountStore } from "@/stores/useCoutStore";
import React from "react";

const CountMinus = () => {
  const { decriment } = useCountStore();
  return (
    <div>
      <button onClick={decriment}>Minssssssss</button>
    </div>
  );
  //
  //git
};

export default CountMinus;
