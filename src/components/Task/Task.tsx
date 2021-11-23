import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";

import Profile from "components/Profile/Profile";

import { headerColor, fullWhite } from "styles/_variables";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  width: 5rem;
  margin: 5rem;
  justify-content: space-between;
  background: ${headerColor};

  h2 {
    margin-left: 1rem;
    color: ${fullWhite};
  }
`;

const Task = () => {
  return <StyledTask></StyledTask>;
};

export default Task;
