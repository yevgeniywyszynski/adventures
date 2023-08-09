import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  text-decoration: underline #f8a200;
  font-size: 26px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  margin-left: 50px;
`;
const MenuItem = styled.li`
  font-size: 18px;
  font-weight: 700;
  color: #777;
  cursor: pointer;
`;

const Button = styled.button`
  border: 2px solid #fff;
  padding: 10px 15px;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Price</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
