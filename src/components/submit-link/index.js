import React from "react";
//import { faPlus } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//import "./submit-link.sass";
import Icon from '@mui/material/Icon';
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, TextField, Typography, Box, Paper} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';

const SubmitLink = () => {

const useStyles = makeStyles(styles);
const classes = useStyles();


  return (
    <Grid container>

    
<Grid item xs={6} style={{marginTop: '30px', marginLeft: '400px'}}>


    <Link to="/create"  style={{color: 'inherit'}}>
      
       <Grid container item xs={8} spacing={1}> 
       <Grid item xs={2}>
       <AddIcon  className={classes.icon} />
        </Grid>
       
        <Grid item xs={6}>
        <Typography>
        SUBMIT A LINK
        </Typography>
        
        </Grid>
       
        </Grid>
    </Link>
    </Grid>
    </Grid>
  
  );
};

export default SubmitLink;