import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  const [Data, Setdata] = useState([]);
  const [LastTask, SetLastTask] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onsubmit = (data) => {
    if (data.name === LastTask) {
      alert("Please change the task before submitting again.");
      return;
    }

    Setdata([...Data, data.name]);
    SetLastTask(data.name);
    reset();
  };

  const handleDelete = (index) => {
    const updatedTodos = Data.filter((_, i) => i !== index);
    Setdata(updatedTodos);
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 underline decoration-blue-500">
        📝Todo List
      </h2>

      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Enter a task..."
          className="p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
        {errors.name && (
          <p className="text-red-600 text-sm italic">Please enter a task name.</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
        >
          ➕ Add Task
        </button>
      </form>

      <ul className="mt-8 space-y-4">
        {Data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition"
          >
            <span className="text-gray-700 font-medium">{item}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition"
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
