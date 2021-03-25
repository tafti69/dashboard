import React from "react";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";

const ProductWrapper = styled.div`
  width: 85%;
  margin: 4rem auto;
`;

const ProductWrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px;
`;

const Credit = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cfcfcf;
  background: #fbfbfb;
  border-radius: 5px;
  padding: 0 8px;
`;

const H1 = styled.h1`
  font-size: 45px;
  font-weight: 400;
`;

const H3 = styled.h3`
  font-size: 15px;
  font-weight: 400;
  color: #afafaf;
  margin-right: 2rem;
`;

const H2 = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

const ProductDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductList = () => {
  return (
    <ProductWrapper>
      <ProductWrapperTop>
        <H1>Curaited Paid Posts</H1>
        <Credit>
          <H3>CREDIT AVAILABLE</H3>
          <H2>$200</H2>
        </Credit>
      </ProductWrapperTop>
      <ProductDisplay>
        {/* reusable product component */}
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </ProductDisplay>
    </ProductWrapper>
  );
};

export default ProductList;
