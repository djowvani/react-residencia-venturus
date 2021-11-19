import { useState } from "react";
import styled from "styled-components";
import { ITask } from "../Task/Task";

const StyledTaskInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 100%;
  padding: 0 2rem;

  * {
    border-radius: 1rem;
    border: none;
  }

  input {
    padding: 1rem;
    height: 3rem;
    font-size: xx-large;
    text-transform: capitalize;
  }

  button {
    margin-left: 1rem;
    height: 3rem;
    width: 5rem;
    font-size: large;
  }
`;

interface ITaskInput {
  register: (title: string, status: boolean) => void;
}

const TaskInput: React.FC<ITaskInput> = ({ register }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(capitalizedText);
  };

  const handleRegister = () => {
    const input = document.getElementById("taskInput") as HTMLInputElement;
    input.value = "";
    input.focus();
    register(text, false);
    setText("");
  };

  return (
    <StyledTaskInput>
      <input id="taskInput" onChange={handleChange}></input>
      <button onClick={() => handleRegister()}>Add Task</button>
    </StyledTaskInput>
  );
};

export default TaskInput;
