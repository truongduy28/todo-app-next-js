"use server";

import { MongooseClient } from "@/libs/mongoose.lib";
import Task from "@/models/task.model";

export const getTaskAction = async () => {
  try {
    await MongooseClient();

    const tasks = await Task.find().sort("-createdAt");

    return JSON.parse(JSON.stringify(tasks));
  } catch (err) {
    throw err;
  }
};

export const addTaskAction = async ({ title }: { title: string }) => {
  try {
    await MongooseClient();

    const newTask = await Task.create({ title });

    return {
      newTask: JSON.parse(JSON.stringify(newTask)),
    };
  } catch (err) {
    throw err;
  }
};

export const deleteTaskAction = async ({ id }: { id: string }) => {
  try {
    await MongooseClient();

    await Task.findOneAndDelete({ _id: id });

    return { success: true };
  } catch (err) {
    throw err;
  }
};

export const updateTaskStatusAction = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: boolean;
}) => {
  try {
    await MongooseClient();

    const task = await Task.findById(id);

    if (!task) throw new Error("Task not found");

    task.completed = newStatus;

    await task.save();

    return { success: true };
  } catch (err) {
    throw err;
  }
};
