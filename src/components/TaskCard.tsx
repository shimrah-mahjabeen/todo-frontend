import React from "react";
import { Task } from "@/types/task";
import { FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`flex items-center justify-between w-full p-4 rounded-lg shadow-md transition-all duration-200 ${
        task.completed
          ? "bg-zinc-800 text-gray-500 line-through"
          : "bg-zinc-700 text-white"
      }`}
    >
      {/* Checkbox and Task Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className="text-blue-500 hover:text-blue-300"
        >
          {task.completed ? (
            <FaCheckCircle size={20} />
          ) : (
            <FaRegCircle size={20} />
          )}
        </button>
        <span className="text-lg font-medium">{task.title}</span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-300 transition-all duration-200"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default TaskCard;
