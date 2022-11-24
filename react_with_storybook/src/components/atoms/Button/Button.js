
import theme from "../../../utils/theme/theme";
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';
const useStyles = makeStyles((theme) => ({

   
}));

 const SignInButton = (props) => {

    const classes = useStyles();

    return (
        <Button variant="contained" size="medium">
        {props.label}
      </Button>
    );
};

export default SignInButton;

