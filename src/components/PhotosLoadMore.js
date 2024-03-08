import React from "react";
import * as S from "./PhotosLoadMoreStyles";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import Loading from "./Helper/Loading";

const PhotosLoadMore = () => {
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
  return <S.Button onClick={() => handleClick(2)}>Carregar Mais</S.Button>;
};

export default PhotosLoadMore;
