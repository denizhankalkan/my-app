import './App.css';
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, TextField, Typography, Divider} from '@material-ui/core';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { history } from '../../utils/history';
// import AutoComplete from '@material-ui/lab/Autocomplete';
// import Home from '../CreateLink';
// import Contact from '../containers/Contact';
// import About from '../LinkList';
// import Logo from ''

const HomePage = ({isVisible}) => {

 
const useStyles = makeStyles(styles);
const classes = useStyles();

  return (
  <>
    <Grid container 
    direction="row"
    justifyContent="space-between"
    alignItems="baseline"
    >
      <Grid item xs={4}>
      <img
        src="hepsiburada.png"
        alt="hepsiburada.png"
       
      />
      </Grid>
     <Grid item xs={4}>
       <Typography style={{fontSize: '2rem'}}>
         <strong>LinkVote Challange</strong>
       </Typography>
      
     </Grid>     
    </Grid>
 <Divider/>
</>
  );
}

HomePage.propTypes = {
isVisible: PropTypes.bool,
};

export default HomePage;
