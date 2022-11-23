
import theme from "../../../utils/theme/theme";
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({

    AddTask :{
        color: "#27418b",
        marginTop: "45px",
        marginBottom: "40px",
        cursor: "pointer"
    },

    AddIcon: {

    },

    AddTaskText: {
        fontSize: "14px",
        fontWeight: "600"
    }
}));

 const AddTaskButton = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.AddTask} onClick={() => props.setHidden(!props.hidden)}>

<Grid container>
<Grid item>
   <AddIcon className={classes.AddIcon}></AddIcon>
  </Grid>
  <Grid>
    <Typography className={classes.AddTaskText}>Add Task</Typography>
  </Grid>
  </Grid>
        </div>
    );
};

export default AddTaskButton;