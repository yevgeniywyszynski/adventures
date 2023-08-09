import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #000;
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li`
  cursor: pointer;
`;
const Copyright = styled.span`
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>ywyszynski Ⓒ</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
