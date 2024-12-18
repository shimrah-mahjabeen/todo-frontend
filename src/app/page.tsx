"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "@/components/Header";
import Button from "@/components/Button";
import TaskBoard from "@/components/TaskBoard";
import { Task } from "@/types/task";
import API_BASE_URL from "@/config";
import { PlusIcon } from "@/icons";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      try {
        await axios.put(`${API_BASE_URL}/${id}`, {
          ...task,
          completed: !task.completed,
        });
        setTasks((prev) =>
          prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
      } catch (error) {
        console.error("Error toggling task:", error);
      }
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCreateTask = () => {
    router.push("/create"); // Navigate to the create-task page
  };

  return (
    <>
      <Button
        label="Create Task"
        onClick={handleCreateTask}
        icon={<PlusIcon />}
        // className="mb-6"
      />
      <TaskBoard tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </>
  );
}
