import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="75" type="Basic" />
      <PriceCard price="99" type="Premium" />
      <PriceCard price="129" type="Advanced" />
    </Container>
  );
};

export default Price;
