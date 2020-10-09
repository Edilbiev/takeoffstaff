import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import { contactEdited } from "../../redux/actions";

function EditorDialog({ contact, isOpened, handleClose}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState(contact.name);
  const handleChangeName = (e) => setName(e.target.value);

  const [phone, setPhone] = useState(contact.phone);
  const handleChangePhone = (e) => setPhone(e.target.value);

  const [mail, setMail] = useState(contact.email);
  const handleChangeMail = (e) => setMail(e.target.value);

  const emptyForms = name === "" || phone === "" || mail === "";

  const handleEditContact = () => {
    dispatch(contactEdited(contact.id, name, phone, mail));
    handleClose();
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={isOpened}
        classes={{ paper: classes.contactForm }}
      >
        <DialogContent>
          <div>
            <TextField
              label="Введите имя"
              variant="outlined"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div>
            <TextField
              label="Введите номер"
              variant="outlined"
              value={phone}
              onChange={handleChangePhone}
            />
          </div>
          <div>
            <TextField
              label="Введите email"
              variant="outlined"
              value={mail}
              onChange={handleChangeMail}
            />
          </div>
        </DialogContent>
        <Button onClick={handleEditContact} disabled={emptyForms}>
          Редактировать
        </Button>
        <Button onClick={handleClose} color="secondary">Отмена</Button>
      </Dialog>
    </>
  );
}

export default EditorDialog;
