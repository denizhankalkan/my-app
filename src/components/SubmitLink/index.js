import React from "react";
import { Link } from "react-router-dom";
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import {  Grid,  Typography, Paper} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from "@mui/material";

const SubmitLink = () => {
const useStyles = makeStyles(styles);
const classes = useStyles();

return (
  <>
    <Paper 
    variant="outlined" 
    className={classes.paper}
    >
      <Grid item className={classes.grid}> 
        <Link to="/create"  style={{color: '#8a00e6'}}> 
          <Grid container spacing={2}> 
            <Grid item xs={2} >
            <AddIcon  className={classes.icon} />
              </Grid>
            
              <Grid item xs={10} >
                <Typography className={classes.typographyStyle}>
                SUBMIT A LINK
                </Typography>  
              </Grid> 
              </Grid>
          </Link>
        </Grid>
        </Paper>
        <Divider/>
  </>
  );
};

export default SubmitLink;