import React from "react";
import * as S from "./styles";
import { userLogout } from "../../store/login";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { user, token } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const userLogged = token.data || user.data;
  return (
    <S.Header>
      <S.Title>Mini Dogs</S.Title>
      <S.Button aria-label="Logout" onClick={() => dispatch(userLogout())}>
        {userLogged ? "Logout" : "Login"}
      </S.Button>
    </S.Header>
  );
};

export default Header;
