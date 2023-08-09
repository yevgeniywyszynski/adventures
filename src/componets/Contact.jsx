import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90%;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: #000;
  padding: 50px;
  align-items: center;
  width: 50%;
  z-index: 10;
`;

const AdressItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
`;

const Text = styled.span`
  font-size: 20px;
`;

const Form = styled.form`
  height: 250px;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 25px;
  outline: none;
  border: none;
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: #fff;
  font-size: 18px;
  padding: 15px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.99);
  box-shadow: 0px 0px 29px -11px rgba(0, 0, 0, 3);
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 50px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea rows="8" placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AdressContainer>
          <AdressItem>
            <Icon src="img/map.png" />
            <Text>Klimczaka 1, Warszawa, 01-233</Text>
          </AdressItem>
          <AdressItem>
            <Icon src="img/phone.png" />
            <Text>+22 122 221 31</Text>
            <Text>+48 881 100 311</Text>
          </AdressItem>
          <AdressItem>
            <Icon src="img/send.png" />
            <Text>contact@adventure@.pl</Text>
          </AdressItem>
        </AdressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
