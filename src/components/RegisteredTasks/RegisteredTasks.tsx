import styled from "styled-components";
import RegisteredTask, { ITask } from "../RegisteredTask/RegisteredTask";

const StyledRegisteredTasks = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  width: 100%;
  padding: 0 3rem;

  & > :not(:first-child) {
    margin-top: 1rem;
  }
`;

interface IRegisteredTasks {
  tasks: ITask[];
  update: (title: string, description: string, status: boolean) => void;
}

const RegisteredTasks: React.FC<IRegisteredTasks> = ({ tasks, update }) => {
  return (
    <StyledRegisteredTasks>
      {tasks.map((task) => {
        return (
          <RegisteredTask
            key={task.title}
            title={task.title}
            description={task.description}
            status={task.status}
            updateStatus={update}
          />
        );
      })}
    </StyledRegisteredTasks>
  );
};

export default RegisteredTasks;
