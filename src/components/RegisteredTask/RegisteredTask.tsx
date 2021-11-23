import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";

import { taskBackground } from "styles/_variables";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const StyledTaskActions = styled.div`
  display: flex;
`;

const StyledTaskContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  width: 90%;
  background: ${taskBackground};
  padding: 0 3rem;
  border-radius: 1rem;

  span {
    font-size: 1.5rem;
  }
`;

export interface ITask {
  title: string;
  description: string;
  status: boolean;
}

interface ITaskComponent {
  title: string;
  description: string;
  status: boolean;
  updateStatus: (title: string, status: boolean, deleting?: boolean) => void;
}

const RegisteredTask: React.FC<ITaskComponent> = ({
  title,
  description,
  status,
  updateStatus,
}) => {
  const experiencesMap = new Map([
    [false, "incomplete"],
    [true, "complete"],
  ]);

  return (
    <StyledTask>
      <StyledTaskContent key={title}>
        <div>
          <span>{title}</span>
          <p>{description}</p>
        </div>
        <Image
          src={`/${experiencesMap.get(status)}.png`}
          width={40}
          height={40}
          onClick={() => updateStatus(title, !status)}
        />
      </StyledTaskContent>
      <StyledTaskActions>
        <Image
          onClick={() => Router.push(title.toLowerCase())}
          src={"/check.png"}
          width={40}
          height={40}
        />
        <Image
          onClick={() => updateStatus(title, status, true)}
          src={"/delete.png"}
          width={40}
          height={40}
        />
      </StyledTaskActions>
    </StyledTask>
  );
};

export default RegisteredTask;
