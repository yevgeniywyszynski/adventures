import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";
import Animated from "./Animated";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Right = styled.div`
  width: 50%;
`;

const Img = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.span`
  font-size: 50px;
  font-weight: 900;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #555;
  line-height: 25px;
  font-weight: 300;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Button = styled.button`
  border: 2px solid #fff;
  width: 200px;
  padding: 15px;
  background-color: #e9b5fa;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Service = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Img open={open} src="/img/chi.png" alt="img " />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            accusamus reiciendis totam nulla maiores facilis architecto pariatur
            eveniet adipisci. Libero, et doloribus? Rerum, perspiciatis est
            accusamus tenetur porro iste ullam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Ex deleniti accusantium natus ratione,
            blanditiis magni provident id perferendis cum, vel ullam, quos velit
            quae aliquam officia ab voluptatum soluta explicabo?
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(!open)}>
            <Icon src="/img/play-button.png" />
            How its works
          </Button>
        </Wrapper>
      </Right>
      <Animated />
    </Container>
  );
};

export default Service;
