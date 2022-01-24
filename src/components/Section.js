import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade top>
        <TextItem>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </TextItem>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonsGroup>
            <LeftButton>
              <a href="#">{props.LeftButton}</a>
            </LeftButton>
            <RightButton>
              <a href="#">{props.RightButton}</a>
            </RightButton>
          </ButtonsGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const TextItem = styled.div`
  padding-top: 15vh;
  h1 {
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 50px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
  }
`;

const ButtonsGroup = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 796px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftButton = styled.div`
  height: 35px;
  width: 256px;
  background: black;
  border-radius: 100px;
  opacity: 0.65;

  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-size: 14px;
  }
  @media screen (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #2b2b2b;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 65px;
  color: black;
  margin-bottom: 20px;
  animation: bounce infinite 2s;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(3px);
    }
    60% {
      transform: translateY(5px);
    }
  }
`;

const Buttons = styled.div``;
