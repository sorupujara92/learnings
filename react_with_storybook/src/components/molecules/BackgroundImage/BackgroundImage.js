import  React from 'react';
import { makeStyles,Grid, Typography} from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
    root : {
      //  height: "100vh",
    },
    image : {
        backgroundImage :  'url(' + require('../../../../src/static/images/bg.png') + ')',
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height:"100vh"
    },
    remember: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: "48px",
        paddingLeft:"121px",
       width: "559px",
       top : "200px",
       height: "134px",
       textAlign:"left",
       position:"fixed",
      left: "0"
    }
  
}));

const BackGroundImage = () => {
    const classes=useStyles();
    return (
        <Grid container component="main" className={classes.root}>
        <Grid
            item    
            xs={false}
            sm={12}
            md={12}
            className={classes.image}
            data-testid="bgImage"
        >
            </Grid>

            <Grid item>
            <Typography
                variant="h1"
                className={classes.remember}
                data-testid="taglineText">
                Remember everything that matters
            </Typography>
        </Grid>
            </Grid>
      );
}
export default BackGroundImage;