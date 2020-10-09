import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact";
import List from "@material-ui/core/List";
import useStyles from "./styles";
import Header from "../Header";
import { contactsLoaded } from "../../redux/actions";

function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsLoaded());
  }, [dispatch]);

  const classes = useStyles();

  const contacts = useSelector((state) => {
    const {contacts, contactSearchString} = state;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().indexOf(contactSearchString.toLowerCase()) !== -1
    })
  });

  return (
    <>
      <Header />
      <div className={classes.contacts}>
        <List>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </List>
      </div>
    </>
  );
}

export default Contacts;
