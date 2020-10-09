import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../common/Loader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

function Auth() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const emptyForms = login === "" || password === "";

  return (
    <div className={classes.auth}>
      <div>
        <TextField
          label="Введите имя пользователя"
          value={login}
          onChange={handleChangeUsername}
          variant="outlined"
          className={classes.textField}
        />
      </div>
      <div>
        <TextField
          label="Введите пароль"
          value={password}
          onChange={handleChangePassword}
          variant="outlined"
          className={classes.textField}
        />
      </div>
      <div>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
        >
          Войти
        </Button>
      </div>
      <div>
        {clicked && <Loader size="small" />}
      </div>
    </div>
  );
}

export default Auth;
