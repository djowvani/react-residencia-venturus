import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";

import Header from "components/Header/Header";
import TaskInput from "components/TaskInput/TaskInput";
import RegisteredTasks from "components/RegisteredTasks/RegisteredTasks";
import { ITask } from "components/RegisteredTask/RegisteredTask";

const Home: NextPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleTask = (
    title: string,
    description: string,
    status: boolean,
    deleting: boolean = false
  ) => {
    if (deleting) {
      const updatedTasks = [...tasks].filter((el) => el.title !== title);
      setTasks(updatedTasks);
      return;
    }
    if (tasks.find((el) => el.title === title)) {
      const newArr = [...tasks];
      const updatedTasks = newArr.map((task) => {
        if (task.title === title) {
          return { ...task, status: status };
        }
        return task;
      });

      setTasks(updatedTasks);
      return;
    }

    setTasks([
      ...tasks,
      { title: title, description: description, status: status },
    ]);
  };

  return (
    <div>
      <Head>
        <title>TODO App - Venturus Residência React</title>
      </Head>

      <Header />
      <TaskInput register={handleTask} />
      <RegisteredTasks tasks={tasks} update={handleTask} />

      <footer>Grupo - Giovani, Daniel, Enrico</footer>
    </div>
  );
};

export default Home;
