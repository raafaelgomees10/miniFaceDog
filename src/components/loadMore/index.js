import React from "react";
import styled from "styled-components";
import Loading from "../Helper/Loading";
import { loadNewPhotos } from "../../store/photos";
import { useDispatch, useSelector } from "react-redux";

const LoadMore = () => {
  const { pages, infinite, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadNewPhotos(pages + 1));
  };

  if (loading) {
    return <Loading />;
  }

  if (!infinite) {
    return null;
  }
  return <Button onClick={() => handleClick(2)}>Carregar Mais</Button>;
};

export default LoadMore;

const Button = styled.button`
  margin: 1rem 0 0 auto;
  display: block;
  width: 120px;
  height: 32px;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 16px;
  border: none;
  font-family: "Roboto", sans-serif;
`;
