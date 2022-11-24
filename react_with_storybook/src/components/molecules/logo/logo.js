import  React from 'react';
import { makeStyles,Grid, Typography} from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
    logo : {
        width : '32px',
        height : '28px',
        marginRight : '10px'
    },
    title : {
        fontWeight:'600',
        color:'#333333'
    }
  
}));

const Logo = () => {
    const classes=useStyles();
    return ( 
        <Grid container >
            <Grid item>
                <img src={require("../../../../src/static/images/logo.png")} className={classes.logo} alt="Logo" data-testid='logoImage'/>
            </Grid>
            <Grid item>
                <Typography className={classes.title} data-testid='imageTitle'>
                    TODO
                </Typography>
            </Grid>
        </Grid>
     );
}
export default Logo;