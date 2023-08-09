import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    background-color: #00008b;
    color: #fff;
    cursor: pointer;
    transition: 0.7s;
    .button {
      background-color: crimson;
      transition: 0.7s;
    }
  }

  &:hover button {
    background-color: crimson;
    color: #fff;
    border: 2px solid #fff;
    transition: 0.7s;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;

const Type = styled.button`
  padding: 10px;
  border: 2px solid crimson;
  color: crimson;
  background-color: #fff;
  border-radius: 25px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 30px;
`;

const ListItem = styled.li``;

const Button = styled.button`
  border: none;
  background-color: #00008b;
  color: #fff;
  font-size: 18px;
  padding: 15px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 hand-crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ preBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
        <ListItem>Free Account in Netflix</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
