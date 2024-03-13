import { getTaskAction } from "@/api/actions";
import FramePage from "@/components/layout/FramePage";
import TaskManager from "@/components/task/TaskManager";

const Home = async () => {
  const tasks = await getTaskAction();

  return (
    <FramePage>
      <h3 className="text-center font-bold text-xl text-gray-700">
        Todo List with Next App 🚀
      </h3>
      <p className="text-center text-gray-500 text-sm">
        NextUI - ReactIcons - MongoDB
      </p>
      <TaskManager tasks={tasks} />
    </FramePage>
  );
};

export default Home;
