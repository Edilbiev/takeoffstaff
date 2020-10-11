import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { contactAdded } from "../../redux/actions";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

function CreatorDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChangeInputs = (e) =>
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

  const [creatorOpened, setCreatorOpened] = useState(false);
  const handleCreator = () => setCreatorOpened(!creatorOpened);

  const emptyForms =
    inputs.name === "" || inputs.phone === "" || inputs.email === "";

  const handleCreateContact = () => {
    const { name, mail, phone } = inputs;
    dispatch(contactAdded(name, mail, phone));
    handleCreator();
  };

  return (
    <>
      <Fab onClick={handleCreator} className={classes.button} color="secondary">
        <AddIcon />
      </Fab>
      <Dialog
        onClose={handleCreator}
        open={creatorOpened}
        classes={{ paper: classes.contactForm }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              name="name"
              placeholder="Введите имя"
              variant="outlined"
              value={inputs.name}
              onChange={handleChangeInputs}
            />
          </Grid>
          <Grid item>
            <TextField
              name="phone"
              placeholder="Введите номер"
              variant="outlined"
              value={inputs.phone}
              onChange={handleChangeInputs}
            />
          </Grid>
          <Grid item>
            <TextField
              name="email"
              placeholder="Введите email"
              variant="outlined"
              value={inputs.email}
              onChange={handleChangeInputs}
            />
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Button onClick={handleCreateContact} disabled={emptyForms}>
              Добавить
            </Button>
            <Button onClick={handleCreator} color="secondary">
              Отмена
            </Button>
          </Grid>
        </Grid>

      </Dialog>
    </>
  );
}

export default CreatorDialog;
