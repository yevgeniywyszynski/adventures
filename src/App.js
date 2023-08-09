import React from "react";
import styled, { css } from "styled-components";
import Navbar from "./componets/Navbar";
import Intro from "./componets/Intro";
import Features from "./componets/Features";
import Service from "./componets/Service";
import Price from "./componets/Price";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 68% 0%, 45% 100%, 300% 100%);
  background-color: #dc143c;
`;

const FeaturesShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 45% 0%, 45% 100%);
  background-color: #fec0ca;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(45% 0%, 100% 0%, 100% 100%);
  background-color: #fec0ca;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  background-color: #dc143c;
`;

const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 0% 90%, 100% 90%);
  background-color: #dc143c;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
        <Features />
      </Container>

      <Container>
        <Features />
        <FeaturesShape />
      </Container>

      <Container>
        <Service />
        <ServiceShape />
      </Container>

      <Container>
        <Price />
        <PriceShape />
      </Container>

      <Container>
        <Contact />
        <ContactShape />
        <Footer />
      </Container>
    </>
  );
}

export default App;
