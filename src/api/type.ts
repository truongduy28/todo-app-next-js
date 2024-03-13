export interface ITaskForm {
  title: string;
}

export interface ITask {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
