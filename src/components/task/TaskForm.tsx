"use client";

import { addTaskAction } from "@/api/actions";
import { ITask } from "@/api/type";
import { Button, Input } from "@nextui-org/react";
import React, { FC, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface Props {
  onTaskAdded: (newTask: ITask) => void;
}
const TaskForm: FC<Props> = ({ onTaskAdded }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isSubmitting || title.trim().length === 0) return;

      setIsSubmitting(true);
      const res = await addTaskAction({ title });

      onTaskAdded(res.newTask);
    } catch (err) {
      alert((err as any).message);
    } finally {
      setIsSubmitting(false);
      setTitle("");
    }
  };

  return (
    <form onSubmit={addTask} className="flex gap-2 mt-5 mb-3">
      <Input
        type="title"
        variant={"flat"}
        placeholder="Enter your task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isSubmitting}
        autoFocus
      />
      <Button
        type="submit"
        variant="solid"
        color="primary"
        isIconOnly
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
      >
        {!isSubmitting && <CiCirclePlus size="1.5em" />}
      </Button>
    </form>
  );
};

export default TaskForm;
