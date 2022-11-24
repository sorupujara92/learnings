import * as React from "react";
import { Input } from "@material-ui/core";
import { makeStyles,FormControl,IconButton,Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import InputLabel from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
const useStyles = makeStyles((theme) => ({

    PasswordField:{
    
    },
    PasswordTextField:{
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


 const PasswordField = (props) => {
    const [showPassword,setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = event => {
        event.preventDefault();
      };
    const classes = useStyles();

    return (
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
         <Typography className={classes.label} data-testid="passwordLabel">
                {props.label}
            </Typography>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={props.password}
            onChange={props.onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    );
};

export default PasswordField;