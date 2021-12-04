import React, {useState} from "react";
import PropTypes from "prop-types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "./order-by-dropdown.sass";
import Icon from '@mui/material/Icon';
import { Autocomplete } from '@material-ui/lab';
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import { TextField, Grid, Paper , Typography} from '@material-ui/core';


const OrderByDropdown = (props) => {
  const {onChangeDropdown, optionValue, optionList} = props;

  const useStyles = makeStyles(styles);
  const classes = useStyles();
 
  //const [optionValue, setOptionValue] = useState('');

  return (
  <div className="my-select">
    <select onChange={(e) => onChangeDropdown(e.target.value)}>
      <option defaultValue>Order By</option>
      <option value="mv">Most Voted (Z &#8594; A)</option>
      <option value="lv">Less Voted (A &#8594; Z)</option>
    </select>
    <div className="icon-wrapper">
      <FontAwesomeIcon icon={faChevronDown} className="icon" />
    </div>
  </div>
  
  );
};

OrderByDropdown.propTypes = {
  onChangeDropdown: PropTypes.func,
};

export default OrderByDropdown;

 // <div className={classes.mySelect}>
    //   <select onChange={(e) => onChangeDropdown(e.target.value)}>
    //     <option defaultValue>Order By</option>
    //     <option value="mv">Most Voted (Z &#8594; A)</option>
    //     <option value="lv">Less Voted (A &#8594; Z)</option>
    //   </select>
    //   <div className={classes.iconWrapper}>
    //     <Icon  className="icon" />
    //   </div>
    // </div>

  //   <div className="my-select">
  //   <select onChange={(e) => onChangeDropdown(e.target.value)}>
  //     <option defaultValue>Order By</option>
  //     <option value="mv">Most Voted (Z &#8594; A)</option>
  //     <option value="lv">Less Voted (A &#8594; Z)</option>
  //   </select>
  //   <div className="icon-wrapper">
  //     <FontAwesomeIcon icon={faChevronDown} className="icon" />
  //   </div>
  // </div>


//   <Grid container style={{marginLeft: '400px', marginTop: '10px'}}>
//   <Grid item xs={3} style={{marginTop: 10}}>   
//        <Autocomplete
//          //defaultValue="Order By"
//          size="small"
//          onChange={(event, value) => onChangeDropdown(event, value)}       
//          id="controllable-states-demo"
//          options={optionList}
//          disableClearable
//          value={optionList.label}

//          getOptionLabel={(option) => typeof option === 'string' ? option: option.label}
//          renderInput={(params) => 
       
//          <TextField {...params} 
//          label="Order By" 
//          variant="outlined"
//          style={{height: '40px'}}
//          />}
//      />
// </Grid>
// </Grid>