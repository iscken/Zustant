import CountMinus from "@/components/counter/CountMinus";
import CountPlus from "@/components/counter/CountPlus";
import CountResult from "@/components/counter/CountResult";
import TodoAdd from "@/components/Todo/TodoAdd";
import TodoList from "@/components/Todo/TodoList";
import React from "react";

const page = () => (
  <div>
    <div className="">
      <CountPlus />
      <CountResult />
      <CountMinus />
    </div>
    <div className="">
      <TodoAdd />
      <TodoList />
    </div>
  </div>
);

export default page;
