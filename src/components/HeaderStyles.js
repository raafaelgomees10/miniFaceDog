import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0px;
  margin: 0;
  display: block;
  color: white;
  background: black;
  width: fit-content;
  border: 2px solid black;
  border-radius: 15px;
  padding: 0.3rem 1rem;

  &.loading {
    background: orange;
  }

  &.loaded {
    background: greenyellow;
  }
`;
