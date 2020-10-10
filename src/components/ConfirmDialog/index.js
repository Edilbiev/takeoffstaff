import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

function ConfirmDialog({ isOpened, handleClose, handleDelete }) {
  return (
    <Dialog open={isOpened} onClose={handleClose}>
      <DialogTitle>Удалить?</DialogTitle>
      <DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Удалить</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDialog;
