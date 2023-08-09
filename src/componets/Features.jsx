import React from "react";
import styled from "styled-components";
import Animated from "./Animated";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
`;

const Title = styled.span`
  font-size: 70px;
`;

const Subtitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
  line-height: 25px;
`;

const Button = styled.button`
  border: none;
  width: 150px;
  margin-top: 30px;
  padding: 15px 20px;
  background-color: darkblue;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Features = () => {
  return (
    <Container>
      <Left>
        <Img src="/img/7.png" alt="icon" />
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <Subtitle>We know that good design means good business</Subtitle>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          soluta provident laboriosam excepturi voluptas quaerat dignissimos
          tenetur dolor totam magnam? Molestias harum reiciendis sint placeat
          error vitae ab et officia.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <Animated />
    </Container>
  );
};

export default Features;
