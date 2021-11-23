import type { NextPage } from "next";

import Header from "components/Header/Header";
import Task from "components/Task/Task";

const TaskView: NextPage = () => {
  return (
    <div>
      <Header />
      <Task />
      <footer>Grupo - Giovani, Daniel, Enrico</footer>
    </div>
  );
};

export default TaskView;
