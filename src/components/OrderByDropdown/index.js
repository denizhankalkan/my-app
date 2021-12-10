import React from "react";
import PropTypes from "prop-types";
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import {  Grid} from '@material-ui/core';

const OrderByDropdown = ({onChangeDropdown}) => {

  const useStyles = makeStyles(styles);
  const classes = useStyles();
 
  return (
  <Grid container style={{marginTop: '20px'}}>
    <select 
    className={classes.selectStyle}
    onChange={(e) => onChangeDropdown(e.target.value)}>
      <option defaultValue>Order By</option>
      <option value="mv">Most Voted (Z &#8594; A)</option>
      <option value="lv">Less Voted (A &#8594; Z)</option>
    </select>
  
   </Grid>
  );
};

OrderByDropdown.propTypes = {
  onChangeDropdown: PropTypes.func,
};

export default OrderByDropdown;
