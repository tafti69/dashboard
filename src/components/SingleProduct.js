import React from "react";
import styled from "styled-components";
import model from "../assets/model.png";

const ProductContainer = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid #cfcfcf;
  text-align: left;
  border-radius: 5px;
  margin-top: 2rem;
  margin: 0 8px;

  @media only screen and (max-width: 1500px) {
    width: 300px;
    height: 450px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;
`;

const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const SecondaryText = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #afafaf;
  margin-top: 1rem;
  text-transform: uppercase;
`;

const MainText = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin: 5px 0;

  @media only screen and (max-width: 1500px) {
    font-size: 18px;
  }
`;

const SingleProduct = () => {
  return (
    <ProductContainer>
      <ProductImage src={model} alt="" />
      <ProductTextContainer>
        <SecondaryText>brand</SecondaryText>
        <MainText>CoolSculpting® CoolTone®</MainText>

        <SecondaryText>promotion</SecondaryText>
        <MainText>
          Gift Card <br /> $300 for $400
        </MainText>

        <SecondaryText>campaign budget</SecondaryText>
        <MainText>$200</MainText>
      </ProductTextContainer>
    </ProductContainer>
  );
};

export default SingleProduct;
