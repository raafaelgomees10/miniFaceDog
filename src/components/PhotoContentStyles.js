import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr auto;
  grid-template-rows: 50px;
  align-items: center;
  gap: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding-right: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;

export const Access = styled.span`
  font-family: monospace;
  font-size: 0.875rem;
  color: #999;
`;
