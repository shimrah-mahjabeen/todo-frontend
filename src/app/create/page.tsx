"use client";

import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import axios from "axios";
import API_BASE_URL from "@/config";

export default function CreateTaskPage() {
  const router = useRouter();

  const handleSubmit = async (task: { title: string; color: string }) => {
    await axios.post(API_BASE_URL, task);
    router.push("/");
  };

  return <TaskForm onSubmit={handleSubmit} />;
}
