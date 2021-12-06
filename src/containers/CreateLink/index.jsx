
import React, { useState } from "react";
import StyledButton from '../../components/Button';
import { TextField, Grid , Typography} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useHistory } from 'react-router-dom'; 
import styles from './index.style';
import { makeStyles } from '@material-ui/styles';
import Toast from '../../components/ToastMessages';

const CreateLink = () => {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [isButtonClickable, setIsButtonClickable] = useState(true);
  const [isToastActive, setIsToastActive] = useState(false);

  const history = useHistory();
  const useStyles = makeStyles(styles);
  const classes = useStyles(); 
 
  const validURL = (str) => {
    var linkPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    return !!linkPattern.test(str);
  };

  const checkandAddNewLink = () => {
    if (!validURL(linkUrl) || !linkName) {
      alert("NOT VALID LINK ADDRESS");
     return; 
    }
   addNewLinkToLocalStorage();
  };

  const addNewLinkToLocalStorage = () => {
    const allLinks = JSON.parse(localStorage.getItem("links") || "[]");
    const link = {
      name: linkName,
      url: linkUrl,
      points: 0,
      createdAt: new Date(),
      id: Date.now(),
    };
    allLinks.unshift(link);

    localStorage.setItem("links", JSON.stringify(allLinks));
    setIsButtonClickable(false);
    setIsToastActive(true);
  };


const onClick = () => {
  history.push({pathname: `/`})
}

const onToastClosed = () => {
  setIsToastActive(false);
};

const onToastUnMount = () => {
  setIsButtonClickable(true);
};

  return (
    <>
      <Grid 
      container 
      justifyContent="center"
      direction="column"
      spacing={1}
      alignItems='center'
      style={{marginTop: '20px'}}
      >   

<Grid item>          
   <Grid container>
      <Typography>
        <ArrowBackIcon />  
       </Typography>
         
       <Typography onClick={onClick}>
          <u><strong>Return To List</strong></u>
       </Typography>      
     </Grid>
  </Grid>  

        <Grid item> 
            <h1>Add New Link</h1>
          </Grid>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={4}>  
          <TextField
          autoComplete="off"
          label="Link Name"
          variant="outlined"
          placeholder="e.g.Alphabet"
          value={linkName}
          style={{width: '100%'}}
          onChange={(e) => setLinkName(e.target.value)}
          id="outlined-required"
          disabled={!isButtonClickable}
        />
        </Grid>      
      </Grid> 

    <Grid container alignItems="center" justifyContent="center" style={{marginTop: '10px'}}>
     <Grid item xs={4}>
        <TextField
         autoComplete="off"
          variant="outlined"
          style={{width: '100%'}}
          placeholder="e.g.http://abc.xyz"
          onChange={(e) => setLinkUrl(e.target.value)}
          id="outlined-required"
          label="Link Url"
          disabled={!isButtonClickable}
        />
      </Grid>
   </Grid>

<Grid  item xs={4} container alignItems="flex-end" justifyContent="flex-end" direction="row">
  <Grid container item xs={12} alignItems="flex-end" justifyContent="flex-end" className={classes.button}>  
      <StyledButton
       id="secondary-button"
       variant='outlined'
       color='primary'
       style={{width: '150px'}}
       onClick={checkandAddNewLink}
       disabled={!isButtonClickable}   
         >
       <Typography>
          ADD
        </Typography>
       </StyledButton>

    {isToastActive && (
        <Toast
          onToastClosed={onToastClosed}
          linkName={linkName}
          message="added."
          onToastUnMount={onToastUnMount}
        ></Toast>
      )}
   </Grid> 
  </Grid>
</Grid>    
    </>
  );
};

export default CreateLink;