"use client";

import { ITask } from "@/api/type";
import { Divider } from "@nextui-org/react";
import { FC, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

interface Props {
  tasks: ITask[];
}
const TaskManager: FC<Props> = ({ tasks: taskApi }) => {
  const [tasks, setTasks] = useState(taskApi || []);

  const onTaskAdded = (newTask: ITask) => {
    setTasks([newTask, ...tasks]);
  };

  const onTaskDeleted = (task: ITask) => {
    setTasks(tasks.filter((e) => e._id !== task._id));
  };

  return (
    <div>
      <TaskForm onTaskAdded={onTaskAdded} />
      <Divider className="bg-gray-100" />

      <div>
        {tasks.map((v, i) => (
          <TaskItem key={v._id} task={v} onTaskDeleted={onTaskDeleted} />
        ))}
        {!tasks.length && (
          <p className="text-center my-20">There are no next tasks ❌</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
