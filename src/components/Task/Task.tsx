import Image from "next/image";
import styled from "styled-components";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const StyledTaskContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  width: 90%;
  background: #e3fbfd;
  padding: 0 3rem;
  border-radius: 1rem;

  p {
    font-size: 1.5rem;
  }
`;

export interface ITask {
  title: string;
  status: boolean;
}

interface ITaskComponent {
  title: string;
  status: boolean;
  updateStatus: (title: string, status: boolean, deleting?: boolean) => void;
}

const Task: React.FC<ITaskComponent> = ({ title, status, updateStatus }) => {
  const experiencesMap = new Map([
    [false, "incomplete"],
    [true, "complete"],
  ]);

  return (
    <StyledTask>
      <StyledTaskContent key={title}>
        <p>{title}</p>
        <Image
          src={`/${experiencesMap.get(status)}.png`}
          width={40}
          height={40}
          onClick={() => updateStatus(title, !status)}
        />
      </StyledTaskContent>
      <Image
        onClick={() => updateStatus(title, status, true)}
        src={"/delete.png"}
        width={40}
        height={40}
      />
    </StyledTask>
  );
};

export default Task;
