"use client";

import { deleteTaskAction, updateTaskStatusAction } from "@/api/actions";
import { ITask } from "@/api/type";
import { Button, Checkbox, Divider } from "@nextui-org/react";
import { FC, useState } from "react";
import { CiTrash } from "react-icons/ci";

interface Props {
  task: ITask;
  onTaskDeleted: (task: ITask) => void;
}

const TaskItem: FC<Props> = ({ task: taskItem, onTaskDeleted }) => {
  const [task, setTask] = useState<ITask>(taskItem);
  const [isDeleting, setIsDeleting] = useState(false);

  const onUpdateStatus = async (newValue: boolean) => {
    setTask({ ...task, completed: newValue });

    try {
      await updateTaskStatusAction({
        id: task._id,
        newStatus: newValue,
      });
    } catch (err) {
      alert((err as any).message);
      setTask({ ...task, completed: !newValue });
    }
  };

  const onDeleteTask = async () => {
    if (isDeleting) return;
    setIsDeleting(true);

    try {
      await deleteTaskAction({ id: task._id });
      onTaskDeleted(task);
    } catch (err) {
      alert((err as any).message);
    }
  };

  return (
    <>
      <div className="flex gap-1 items-center justify-between py-6">
        <Checkbox
          isSelected={task.completed}
          isDisabled={isDeleting}
          onValueChange={onUpdateStatus}
        />
        <div className="flex items-center grow">
          <h5
            className={`${
              task.completed ? "line-through text-gray-300" : "text-gray-700"
            }`}
          >
            {task.title || "Example title"}
          </h5>
        </div>
        <Button
          isIconOnly
          color="danger"
          size="sm"
          isLoading={isDeleting}
          onClick={onDeleteTask}
        >
          {!isDeleting && <CiTrash size="1.5em" />}
        </Button>
      </div>
      <Divider className="bg-gray-100" />
    </>
  );
};

export default TaskItem;
