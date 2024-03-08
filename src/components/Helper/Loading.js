import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return <Loader />;
};

export default Loading;

const loading = keyframes`
from{
    transform: translateX(-100%);
}
to{
    transform: translateX(125%);
}
`;

export const Loader = styled.div`
  height: 2px;
  background: black;
  overflow: hidden;
  max-width: 25%;
  margin: 2rem auto;

  &::after {
    content: "";
    display: block;
    width: 75%;
    height: 2px;
    background: white;
    animation: ${loading} 0.5s linear forwards infinite;
  }
`;
