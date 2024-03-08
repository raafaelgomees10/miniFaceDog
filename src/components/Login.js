import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";
import * as S from "./LoginStyles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <S.Label htmlFor="username" style={{ display: "block" }}>
        Usuário
      </S.Label>
      <S.Input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        id="username"
      />

      <S.Label htmlFor="password" style={{ display: "block" }}>
        Senha
      </S.Label>
      <S.Input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        id="password"
      />
      <S.Button>Enviar</S.Button>
    </form>
  );
};

export default Login;
