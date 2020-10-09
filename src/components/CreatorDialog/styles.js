import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    padding: theme.spacing(1),
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },

  button: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 170,
    right: 0,
  }
}));

export default useStyles;
