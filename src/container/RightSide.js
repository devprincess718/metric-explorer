import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CustomChart from '../components/CustomChart';
import CustomTable from '../components/CustomTable';
import DataService from '../services/DataService';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    marginTop: 45,
  },
  paperTable : {
    padding: theme.spacing(1)
  }
}));

const RightSide = () => {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    DataService.getSampleData().then(res => {
      setData(res);
    })
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item md={12}>
        <Paper className={classes.paper}>
          <CustomChart data={data}/>
        </Paper>
      </Grid>
      <Grid item md={12}>
        <Paper className={classes.paperTable}>
          <CustomTable data={data}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightSide;
