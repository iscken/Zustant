"use client";
import { useCountStore } from "@/stores/useCoutStore";

const CountResult = () => {
  const { count } = useCountStore();

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default CountResult;
