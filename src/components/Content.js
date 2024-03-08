import React from "react";
import Login from "./login";
import Photos from "./photos";
import Loading from "./Helper/Loading";
import { useSelector } from "react-redux";

const Content = () => {
  const { user, token } = useSelector((state) => state.login);

  if (user.loading || token.loading) {
    return <Loading />;
  }
  if (user.data) {
    return <Photos />;
  } else {
    return <Login />;
  }
};

export default Content;
