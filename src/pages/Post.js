import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import a from "../assets/6.png";
import b from "../assets/7.png";
import c from "../assets/8.png";
import d from "../assets/9.png";
import e from "../assets/10.png";
import f from "../assets/4.png";
import g from "../assets/5.png";
import h from "../assets/2.png";
import Sidebar from "../components/Sidebar";
import { Chip } from "@material-ui/core";

export const images = [a, b, c, d, e, f, g, h, a, b, c];

const Wrapper = styled.div`
  width: 100%;
  height: 150vh;
  background: #fafafa;
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  gap: 16px;
  justify-content: start;

  @media only screen and (max-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(4, 240px);
  }

  @media only screen and (max-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(4, 200px);
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 90px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cfcfcf;
`;

const C1 = styled.div`
  cursor: pointer;
  margin-left: 2rem;
`;

const C2 = styled.div`
  cursor: pointer;
  margin-right: 2rem;
`;

const H4 = styled.h4`
  font-size: 24px;
`;

const ImageBox = styled.div`
  width: 280px;
  height: 280px;
  margin: 8px;

  @media only screen and (max-width: 1600px) {
    width: 240px;
    height: 240px;
    margin: 6px;
  }

  @media only screen and (max-width: 1400px) {
    width: 200px;
    height: 200px;
    margin: 4px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-top: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Flex = styled.div`
  width: 1170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  @media only screen and (max-width: 1600px) {
    width: 1010px;
  }

  @media only screen and (max-width: 1400px) {
    width: 850px;
  }
`;

const CkeckDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Post = () => {
  const [checked, setChecked] = useState([]);
  const [age, setAge] = useState("");
  const [age2, setAge2] = useState("");
  const [gen, setGen] = useState("");

  const handleToggle = (product) => {
    const currentIndex = checked.indexOf(product);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(product);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <Header>
        <C1>
          <ArrowBackIcon />
        </C1>
        <H4>Post Selector</H4>
        <C2>
          <CloseIcon />
        </C2>
      </Header>
      <Wrapper>
        <Sidebar
          age={age}
          setAge={setAge}
          age2={age2}
          setAge2={setAge2}
          gen={gen}
          setGen={setGen}
          checked={checked}
          handleToggle={handleToggle}
        />
        <ContentWrapper>
          <Flex>
            <CkeckDiv>
              {checked.length ? (
                <Chip
                  variant="outlined"
                  label="Clear All"
                  onDelete={() => {
                    setChecked([]);
                    setAge("");
                    setAge2("");
                    setGen("");
                  }}
                />
              ) : null}
              {checked.map((check) => (
                <Chip
                  style={{ margin: "4px" }}
                  label={check}
                  onDelete={() =>
                    setChecked(checked.filter((item) => item !== check))
                  }
                />
              ))}
              {gen !== "" && (
                <Chip
                  style={{ margin: "0 4px" }}
                  label={gen}
                  onDelete={() => {
                    setGen("");
                  }}
                />
              )}
              {(age && age2) !== "" && (
                <Chip
                  style={{ margin: "0 4px" }}
                  label={"Aged" + " " + age + " - " + age2}
                  onDelete={() => {
                    setAge("");
                    setAge2("");
                  }}
                />
              )}
            </CkeckDiv>
            <Column>
              <label htmlFor="sort">SORT BY</label>
              <Select id="sort" name="sort">
                <option>Most Popular</option>
                <option>High to Low</option>
                <option>Low to High</option>
              </Select>
            </Column>
          </Flex>
          <Content>
            {images.map((img, i) => (
              <ImageBox key={i}>
                <Image src={img} />
              </ImageBox>
            ))}
          </Content>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default Post;
