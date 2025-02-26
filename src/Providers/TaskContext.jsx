import { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "./AuthProvider";


export const TaskContext = createContext();

const axiosInstance = axios.create({
  baseURL: "https://plan-fusion-backend.vercel.app",
  withCredentials: true,
});

export const TaskProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // fetching tasks
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/records/${user?.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  const { mutateAsync: addTask } = useMutation({
    mutationFn: async (newTask) => {
      const res = await axiosInstance.post("/records", {
        ...newTask,
        email: user?.email,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["records", user?.email]);
    },
  });

  // updating task
  

  const { mutate: updateTask } = useMutation({
    mutationFn: async ({ id, updatedTask }) => {
      const res = await axiosInstance.patch(`/tasks/${id}`, updatedTask);
      return res.data;
    },
    onMutate: async ({ id, updatedTask }) => {
      await queryClient.cancelQueries(["tasks", user?.email]);
  
      const previousTasks = queryClient.getQueryData(["tasks", user?.email]);
  
      queryClient.setQueryData(["tasks", user?.email], (old = []) =>
        old?.map((task) =>
          task._id === id ? { ...task, ...updatedTask } : task
        )
      );
  
      return { previousTasks };
    },
    onError: (err, variables, context) => {
      console.error("Mutation Error:", err.response ? err.response.data : err.message);
      queryClient.setQueryData(["tasks", user?.email], context.previousTasks);
    },
    onSettled: () => {
      console.log("Invalidating tasks...");
      queryClient.invalidateQueries(["tasks", user?.email]);
    },
  });
  



  // Delete task
  const { mutateAsync: deleteTask } = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.delete(`/records/${id}`);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks", user?.email]);
    },
  });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        updateTask,
        isLoading,
        deleteTask,
        addTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
