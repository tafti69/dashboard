import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CloseIcon from "@material-ui/icons/Close";
import a from "../assets/1.png";
import b from "../assets/2.png";
import c from "../assets/3.png";
import d from "../assets/4.png";
import e from "../assets/5.png";
import fb from "../assets/fb.svg";

const Background = styled.div`
  background: #f8f3f1;
  width: 100%;
  height: 150vh;
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const FlexText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  outline: none;
  background: #000;
  color: #fff;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

const ModalButton = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  background: #000;
  color: #fff;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

const ImageOne = styled.div`
  width: 340px;
  height: 250px;
  position: absolute;
  top: 5%;
  left: 5%;
`;

const ImageTwo = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  top: 55%;
  right: 5%;
`;

const ImageThree = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  top: 90%;
  left: 40%;
`;

const ImageFour = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  top: 5%;
  right: 8%;
`;

const ImageFive = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  top: 45%;
  left: 8%;
`;

const ImageItself = styled.img`
  width: 100%;
  display: block;
`;

const H1 = styled.h1`
  font-size: 56px;
  font-weight: 500;
`;

const SmallIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4rem;
`;

const SmallCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: #d09284;
`;

const Comments = styled.span`
  font-size: 14px;
  color: #808080;
`;

const Flex = styled.span`
  display: flex;
  align-items: center;
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 600px;
  height: 500px;
  border-radius: 10px;
  z-index: 11;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// const ModalWindow = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: #c4c4c4;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 10;
//   width: 100%;
//   height: 100vh;
// `;

const CloseModal = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

const FbCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: #f8f3f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

const FbIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const P = styled.p`
  opacity: 70%;
`;

export const Home = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Background>
      <ImageOne>
        <ImageItself src={a} />
        <SmallIcons>
          <Flex>
            <SmallCircle>
              <ThumbUpAltIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
            <SmallCircle>
              <FavoriteIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
          </Flex>
          <Comments>42 comments 12 shares</Comments>
        </SmallIcons>
      </ImageOne>
      <ImageTwo>
        <ImageItself src={b} />
        <SmallIcons>
          <Flex>
            <SmallCircle>
              <ThumbUpAltIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
            <SmallCircle>
              <FavoriteIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
          </Flex>
          <Comments>42 comments 12 shares</Comments>
        </SmallIcons>
      </ImageTwo>
      <ImageThree>
        <ImageItself src={c} />
        <SmallIcons>
          <Flex>
            <SmallCircle>
              <ThumbUpAltIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
            <SmallCircle>
              <FavoriteIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
          </Flex>
          <Comments>42 comments 12 shares</Comments>
        </SmallIcons>
      </ImageThree>
      <ImageFour>
        <ImageItself src={d} />
        <SmallIcons>
          <Flex>
            <SmallCircle>
              <ThumbUpAltIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
            <SmallCircle>
              <FavoriteIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
          </Flex>
          <Comments>42 comments 12 shares</Comments>
        </SmallIcons>
      </ImageFour>
      <ImageFive>
        <ImageItself src={e} />
        <SmallIcons>
          <Flex>
            <SmallCircle>
              <ThumbUpAltIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
            <SmallCircle>
              <FavoriteIcon style={{ color: "white" }} fontSize="small" />
            </SmallCircle>
          </Flex>
          <Comments>42 comments 12 shares</Comments>
        </SmallIcons>
      </ImageFive>
      <CenterText>
        <H1>
          Welcome to <br /> Alle Grow
        </H1>
        <FlexText>
          <Circle>
            <AccessTimeIcon />
          </Circle>
          <p>
            Launching a Facebook ad with Alle takes <br /> under 5 minutes.
          </p>
        </FlexText>
        <FlexText>
          <Circle>
            <SignalCellularAltIcon />
          </Circle>
          <p>
            Alle insights help you target people that are <br /> more likely to
            become a patient.
          </p>
        </FlexText>
        <FlexText>
          <Circle>
            <AttachMoneyIcon />
          </Circle>
          <p>
            Have reimbursement credits? Quickly allocate <br /> these to pay for
            your ads.
          </p>
        </FlexText>
        <Button onClick={() => setOpen(true)}>GET STARTED</Button>
        {open && (
          <ModalBlock>
            <CloseModal>
              <CloseIcon onClick={() => setOpen(false)} />
            </CloseModal>
            <FbCircle>
              <FbIcon src={fb} alt="" />
            </FbCircle>
            <h2>Connect Facebook</h2>
            <P>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit,
              sed do eiusmod.
            </P>
            <ModalButton>Connect</ModalButton>
          </ModalBlock>
        )}
      </CenterText>
    </Background>
  );
};
