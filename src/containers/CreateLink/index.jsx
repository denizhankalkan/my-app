
import React, { useState } from "react";
import StyledButton from '../../components/Button';
import { TextField, Grid , Typography} from '@material-ui/core';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useHistory } from 'react-router-dom'; 

const CreateLink = () => {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [isButtonClickable, setIsButtonClickable] = useState(true);
  const [open, setIsOpen] = React.useState(false);
  const history = useHistory();
 
  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    return !!pattern.test(str);
  };

  const checkandAddNewLink = () => {
    if (!validURL(linkUrl) || !linkName) {
      alert("NOT VALID LINK ADDRESS");
     return; 
    }
   setIsOpen(true);
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
  
  };



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setIsOpen(false);
};

const onClick = () => {
  history.push({pathname: `/`})
}

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

  <Grid container alignItems="center" justifyContent="space-evenly">


  <Grid item xs={1} style={{marginTop: '10px', marginLeft: '290px'}}>  
     <Stack spacing={2} >
      <StyledButton
       id="secondary-button"
       variant='outlined'
       color='primary'
       onClick={checkandAddNewLink}
       disabled={!isButtonClickable}   
         >
       <Typography>
          ADD
        </Typography>
       </StyledButton>

       <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {linkName} Added
        </Alert>
      </Snackbar>
    </Stack>
   </Grid> 
  </Grid>
</Grid>    
    </>
  );
};

export default CreateLink;