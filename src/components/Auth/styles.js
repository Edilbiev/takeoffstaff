import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  auth: {
    width: 440,
    margin: 'calc(50vh - 90px) auto',
    '& .MuiTextField-root': {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },

  button: {
    width: "100%",
  }
}));

export default useStyles;
