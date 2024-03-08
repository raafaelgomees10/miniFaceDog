import React from "react";
import * as S from "./HeaderStyles";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/login";

const Header = () => {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();

  const userLogged = token.data || user.data;
  return (
    <S.Header>
      <S.Title>Mini Dogs</S.Title>
      <S.Button
        aria-label="Logout"
        className={`${loading ? "loading" : ""} ${user.data ? "loaded" : ""}`}
        onClick={() => dispatch(userLogout())}
      >
        {userLogged ? "Logout" : "Login"}
      </S.Button>
    </S.Header>
  );
};

export default Header;
