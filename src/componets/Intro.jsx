import React from "react";
import { styled } from "styled-components";
import Animated from "./Animated";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 60px;
  width: 70%;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 70%;
  margin-top: 20px;
  line-height: 25px;
`;

const Info = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #f8a200;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PhoneNumber = styled.span`
  color: #f0667d;
  font-weight: 800;
`;

const ContactText = styled.span`
  color: #777;
`;

const Right = styled.div`
  width: 40%;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Welcome Adventure Agency</Title>
        <Description>
          To our world of unforgettable moments and seamless experiences. At
          Adventure Agency, we craft dreams into reality, curating exceptional
          events that leave a lasting imprint.
        </Description>
        <Info>
          <Button>Start your project</Button>
          <Contact>
            <PhoneNumber>Call Us (+48) 112-323-232 </PhoneNumber>
            <ContactText>For any question</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Img src="/img/remo.png" />
      </Right>
      <Animated />
    </Container>
  );
};

export default Intro;
