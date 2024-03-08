import React from "react";
import * as S from "./PhotoContentStyles";
import { useSelector } from "react-redux";

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos);
  return (
    <S.List>
      {list.map((photo) => (
        <S.Item className="anime" key={photo.id}>
          <S.Image src={photo.src} alt={photo.title} />
          <S.Title>{photo.title}</S.Title>
          <S.Access>{photo.acessos}</S.Access>
        </S.Item>
      ))}
    </S.List>
  );
};

export default PhotosContent;
