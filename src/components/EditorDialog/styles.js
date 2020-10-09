import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    padding: theme.spacing(1),
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },

}));

export default useStyles;
