import React from "react";
import Summary from "@/components/Summary";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/types/task";
import clipboardImage from "@/asserts/clipboard_image.png";
import Image from "next/image";

interface TasksProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="w-screen min-h-screen bg-zinc-900 text-white flex flex-col items-center p-8 space-y-6 z-0 ">
      {/* Summary Section */}
      <Summary
        total={tasks.length}
        completed={tasks.filter((task) => task.completed).length}
      />
      {/* Task Cards or Empty State */}
      <div className="w-full max-w-3xl mx-auto space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="flex flex-col items-center text-center pt-10 text-gray-500 mt-8 space-y-6">
            <Image
              alt="Clipboard Image"
              className="w-14"
              src={clipboardImage}
            />
            <p className="text-lg font-semibold">
              You don't have any tasks registered yet.
            </p>
            <p className="text-sm">
              Create tasks and organize your to-do items.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
