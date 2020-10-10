import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { contactEdited } from "../../redux/actions";
import Grid from "@material-ui/core/Grid";

function EditorDialog({ contact, isOpened, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
  });

  const handleChangeInputs = (e) =>
    setInputs({
      [e.target.name]: e.target.value,
    });

  // const [name, setName] = useState(contact.name);
  // const handleChangeName = (e) => setName(e.target.value);
  //
  // const [phone, setPhone] = useState(contact.phone);
  // const handleChangePhone = (e) => setPhone(e.target.value);
  //
  // const [mail, setMail] = useState(contact.email);
  // const handleChangeMail = (e) => setMail(e.target.value);
  //
  const emptyForms =
    inputs.name === "" || inputs.phone === "" || inputs.email === "";

  const handleEditContact = () => {
    const { name, phone, email } = inputs;
    dispatch(contactEdited(contact.id, name, phone, email));
    handleClose();
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={isOpened}
        classes={{ paper: classes.contactForm }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Введите имя"
              variant="outlined"
              value={inputs.name}
              onChange={handleChangeInputs}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Введите номер"
              variant="outlined"
              value={inputs.phone}
              onChange={handleChangeInputs}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Введите email"
              variant="outlined"
              value={inputs.email}
              onChange={handleChangeInputs}
            />
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Button onClick={handleEditContact} disabled={emptyForms}>
              Редактировать
            </Button>
            <Button onClick={handleClose} color="secondary">
              Отмена
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default EditorDialog;
