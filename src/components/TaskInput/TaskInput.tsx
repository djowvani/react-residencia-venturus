import { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:first-child) {
    margin-top: 1rem;
  }
`;

const StyledTaskInput = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 100%;

  button {
    margin-left: 1rem;
    width: 5rem;
  }
`;

interface ITaskInput {
  register: (title: string, description: string, status: boolean) => void;
}

const TaskInput: React.FC<ITaskInput> = ({ register }) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const isSubmitDisabled = taskTitle === "" || taskDescription === "";

  const capitalizeText = (text: String) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const handleRegister = (e: any) => {
    const form = document.getElementById("taskForm") as HTMLFormElement;
    form.reset();
    register(capitalizeText(taskTitle), capitalizeText(taskDescription), false);
    setTaskTitle("");
    setTaskDescription("");
    e.preventDefault();
  };

  return (
    <StyledTaskInput id="taskForm" onSubmit={(e: any) => handleRegister(e)}>
      <StyledInputs>
        <TextField
          id="taskTitle"
          placeholder="Task title"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TextField
          id="taskDescription"
          placeholder="Task description"
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </StyledInputs>
      <Button disabled={isSubmitDisabled} type="submit">
        Add Task
      </Button>
    </StyledTaskInput>
  );
};

export default TaskInput;
