import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../../store/photos";
import PhotosContent from "../PhotoContent";
import LoadMore from "../loadMore";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  return (
    <section>
      <PhotosContent />
      <LoadMore />
    </section>
  );
};

export default Photos;
