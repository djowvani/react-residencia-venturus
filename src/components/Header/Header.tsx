import styled from "styled-components";
import Image from "next/image";

import Profile from "components/Profile/Profile";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100%;
  justify-content: space-between;
  padding: 0 3rem;
  background: #32a1ab;

  h2 {
    margin-left: 1rem;
    color: #ffffff;
  }
`;

const StyledLogo = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Image src="/todo.png" height={70} width={70} />
        <h2>ToDo App</h2>
      </StyledLogo>
      <Profile />
    </StyledHeader>
  );
};

export default Header;
