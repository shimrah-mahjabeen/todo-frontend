import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import axios from "axios";
import { Task } from "@/types/task";
import API_BASE_URL from "@/config";

export default function EditTaskPage() {
  const { id } = useParams();
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (updatedTask: {
    title: string;
    color: string;
  }) => {
    await axios.put(`${API_BASE_URL}/${id}`, updatedTask);
    router.push("/");
  };

  return task ? (
    <TaskForm initialTask={task} onSubmit={handleSubmit} />
  ) : (
    <p>Loading...</p>
  );
}
