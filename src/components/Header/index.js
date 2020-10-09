import React from "react";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./styles";
import CreatorDialog from "../CreatorDialog";
import { useDispatch, useSelector } from "react-redux";
import { contactSearchStringSet } from "../../redux/actions";

function Header() {
  const dispatch = useDispatch();

  const contactSearchString = useSelector((state) => state.contactSearchString);

  const handleSearchStringChange = (e) =>
    dispatch(contactSearchStringSet(e.target.value));

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <div>
            <Typography variant="h4" noWrap>
              Contacts
            </Typography>
            <CreatorDialog />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={contactSearchString}
              onChange={handleSearchStringChange}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
