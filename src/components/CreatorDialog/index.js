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

function CreatorDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();



  const [creatorOpened, setCreatorOpened] = useState(false);
  const handleCreator = () => setCreatorOpened(!creatorOpened);

  const [name, setName] = useState("");
  const handleChangeName = (e) => setName(e.target.value);

  const [phone, setPhone] = useState("");
  const handleChangePhone = (e) => setPhone(e.target.value);

  const [mail, setMail] = useState("");
  const handleChangeMail = (e) => setMail(e.target.value);

  const emptyForms = name === "" || phone === "" || mail === "";

  const handleCreateContact = () => {
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
        <Button onClick={handleCreateContact} disabled={emptyForms}>
          Добавить
        </Button>
        <Button onClick={handleCreator} color="secondary">Отмена</Button>
      </Dialog>
    </>
  );
}

export default CreatorDialog;
