import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { userAuthorised } from "../../redux/actions";
import { Redirect } from "react-router-dom";

function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isAdmin = useSelector((state) => state.isAdmin);
  const error = useSelector((state) => state.error);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const emptyForms = login === "" || password === "";

  const handleClick = () => dispatch(userAuthorised(login, password));

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (!emptyForms){
        handleClick()
      }
    }
  };

  if (isAdmin) {
    return <Redirect to="/contacts" />;
  }

  return (
    <div className={classes.auth}>
      <div>
        <TextField
          label="Введите имя пользователя"
          value={login}
          onChange={handleChangeUsername}
          variant="outlined"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <TextField
          label="Введите пароль"
          value={password}
          onChange={handleChangePassword}
          variant="outlined"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          disabled={emptyForms}
          onClick={handleClick}
        >
          Войти
        </Button>
      </div>
      <div>{error && "При входе произошла ошибка"}</div>
    </div>
  );
}

export default Auth;
