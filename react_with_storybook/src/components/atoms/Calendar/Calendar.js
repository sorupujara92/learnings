
import theme from "../../../utils/theme/theme";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
const useStyles = makeStyles((theme) => ({

    Calendar : {
        display: "flex",
        justifyContent: "center"
    }
}));

 const Calendar = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.Calendar}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
          disableToolbar
          variant="static"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          minDate={Date.now()}
          value={props.value}
          onChange={props.onChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
        </div>
    );
};

export default Calendar;