import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { errorReset, userAuthorised } from "../../redux/actions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.application.error);

  const closeAlert = () => dispatch(errorReset());

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
      if (!emptyForms) {
        handleClick();
      }
    }
  };

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
          type="password"
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
      <Snackbar open={error} autoHideDuration={6000} onClose={closeAlert}>
        <Alert
          severity="error"
          elevation="5"
          variant="filled"
          onClose={closeAlert}
        >
          При входе произошла ошибка
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Auth;
