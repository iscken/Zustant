"use client";
import { useTodoStore } from "@/stores/useTodoStore";
import { Form, SubmitHandler, useForm } from "react-hook-form";

interface IFormTodo {
  title: string;
  description: string;
}

const TodoAdd = () => {
  const { addTodo } = useTodoStore();
  const { register, handleSubmit, reset } = useForm<IFormTodo>();
  const onSubmit: SubmitHandler<IFormTodo> = (data) => {
    const newData = {
      id: Date.now(),
      title: `${data.title}`,
      description: `${data.description}`,
    };
    addTodo(newData);
  };
  return (
    <div>
      <h1>TodoAdd</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder=" todo title"
          type="text"
          {...register("title", { required: true })}
        />
        <input
          placeholder=" todo description"
          type="text"
          {...register("description", { required: true })}
        />
        <button type="submit">Send</button>
      </form>

      <div className=""></div>
    </div>
  );
};

export default TodoAdd;
