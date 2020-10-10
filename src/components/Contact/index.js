import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ContactMenu from "../ContactMenu";
import useStyles from "./styles";

function Contact({ contact }) {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemIcon>
        <Avatar />
      </ListItemIcon>
      <ListItemText>{contact.name}</ListItemText>
      <ListItemText className={classes.phone}>{contact.phone}</ListItemText>
      <ListItemText className={classes.email}>{contact.email}</ListItemText>
      <ListItemSecondaryAction>
        <ContactMenu contact={contact} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Contact;
