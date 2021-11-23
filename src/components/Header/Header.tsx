import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";

import Profile from "components/Profile/Profile";

import { headerColor, fullWhite } from "styles/_variables";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100%;
  justify-content: space-between;
  padding: 0 3rem;
  background: ${headerColor};

  h2 {
    margin-left: 1rem;
    color: ${fullWhite};
  }
`;

const StyledLogo = styled.div`
  display: flex;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo onClick={() => Router.push("/")}>
        <Image src="/todo.png" height={70} width={70} />
        <h2>ToDo App</h2>
      </StyledLogo>
      <Profile />
    </StyledHeader>
  );
};

export default Header;
