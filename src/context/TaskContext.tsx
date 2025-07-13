import React, { createContext, useState, useContext } from "react";
import type { Task } from "../models/Task";

interface TaskContextType {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [tasks, setTasks] = useState<Task[]>([]);

   return (
    <TaskContext.Provider value={{ tasks, setTasks }}> {children} </TaskContext.Provider>
   );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if(!context) throw new Error("userTaskContext must be used within a TaskProvider");
    return context;
}