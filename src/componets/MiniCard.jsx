import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.99);
  box-shadow: 0px 0px 29px -11px rgba(0, 0, 0, 3);
  align-items: center;
  background-color: #fff;
`;

const Img = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 20px;
  text-align: center;
  line-height: 25px;
`;

const MiniCard = () => {
  return (
    <Container>
      <Img src="/img/search.png" />
      <Text>Lorem ipsum sit amet consectetur</Text>
    </Container>
  );
};

export default MiniCard;
