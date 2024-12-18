"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import API_BASE_URL from "@/config";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import Button from "@/components/Button";

const colors = [
  { name: "red", value: "bg-red-500" },
  { name: "orange", value: "bg-orange-500" },
  { name: "yellow", value: "bg-yellow-400" },
  { name: "green", value: "bg-green-500" },
  { name: "blue", value: "bg-blue-500" },
  { name: "indigo", value: "bg-indigo-500" },
  { name: "purple", value: "bg-purple-500" },
  { name: "pink", value: "bg-pink-500" },
  { name: "stone", value: "bg-stone-500" },
];

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setError("Title is required.");
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}`, { title, color: selectedColor });
      router.push("/");
    } catch (err) {
      setError("Failed to save task. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white flex flex-col items-center p-8">
      {/* Header */}
      <div className="w-full flex items-center mb-8 px-8">
        <button
          onClick={() => router.back()}
          className="text-gray-400 hover:text-gray-200 mr-4"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-3xl font-bold text-center flex-1">
          Create a New Task
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-zinc-800 p-8 rounded-lg shadow-md"
      >
        {/* Title */}
        <div className="mb-6">
          <label
            className="block text-blue-400 font-semibold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Ex. Brush your teeth"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Color Selection */}
        <div className="mb-8">
          <label className="block text-blue-400 font-semibold mb-4">
            Color
          </label>
          <div className="flex justify-center gap-4">
            {colors.map((color) => (
              <button
                type="button"
                key={color.name}
                className={`w-10 h-10 rounded-full border-4 transition-all ${
                  selectedColor === color.value
                    ? "border-white shadow-md"
                    : "border-transparent"
                } ${color.value}`}
                onClick={() => setSelectedColor(color.value)}
              ></button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button label="Add Task" type="submit" icon={<FaPlus />} />
        </div>
      </form>

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
