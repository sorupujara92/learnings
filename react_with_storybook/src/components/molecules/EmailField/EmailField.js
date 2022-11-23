
import theme from "../../../utils/theme/theme";
import {TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({

    EmailField:{
    
    },
    EmailTextField:{
        color: "#333333",
        fontSize: "12px",
        paddingBottom: "8px",
        float:"left",
        alignSelf:"baseline"
    },
    textField: {
        paddingBottom: "9px"
    }
}));

 const EmailField = (props) => {

    const classes = useStyles();

    return (
        <FormControl fullWidth className={classes.textField}>
           <Typography className={classes.EmailTextField}>{props.value}</Typography>
           <TextField variant="standard" fullWidth type="text" placeholder={props.emailText} value={props.emailvalue}/>
        </FormControl>
    );
};

export default EmailField;