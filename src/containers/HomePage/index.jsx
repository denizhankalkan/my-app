
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Divider} from '@material-ui/core';

const HomePage = () => {
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
       <Typography className={classes.header}>
         <strong>LinkVote Challange</strong>
       </Typography>  
     </Grid>     
    </Grid>
 <Divider/>
</>
 );
}

export default HomePage;
