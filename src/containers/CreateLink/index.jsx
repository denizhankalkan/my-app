
// import { Autocomplete } from '@material-ui/lab';
// import React from 'react'
// import { TextField, Grid, Paper , Typography} from '@material-ui/core';
// import { useEffect, useState } from 'react';
// import StyledButton from '../../components/Button';
// import {  Route, Link, useHistory } from 'react-router-dom'; 

// export const Home = (props) => {

// const options = ['Lisans', 'Yüksek Lisans', 'Doktora'];
// const countryOptions = ['Turkey', 'USA', 'Germany'];

// const [value, setValue] = useState('');
// const [countryValue, setCountryValue] = useState('');
// const history = useHistory();


// const onChangeValue = (data) => {
// setValue(data);
// }

// const onChangeCountryValue = (data) => {
// setCountryValue(data);
// };

// const onClickSave = () => {
//   history.push({pathname: `/about`})
// }

// return(
//     <Grid>  
//         <Paper style={{backgroundColor: 'pink'}}>

       
//        <Grid container>
//          <Grid item xs={4}>
//         <Autocomplete
//             value={value}
//             onChange={onChangeValue}          
//             id="controllable-states-demo"
//             options={options}
//             renderInput={(params) => <TextField {...params} label="Eğitim Durumu Seçiniz" />}
//         />
//          </Grid>
         
//          <Grid item xs={4} style={{marginLeft: 30}}>
//          <Autocomplete
//             value={countryValue}
//             onChange={onChangeCountryValue}          
//             id="controllable-states-demo"
//             options={countryOptions}
//             renderInput={(params) => <TextField {...params} label="Ülke Seçiniz" />}
//         />
//           </Grid>
//          <Grid container>
//          <Grid item xs={4}>
//         <Autocomplete
//             value={value}
//             onChange={onChangeValue}          
//             id="controllable-states-demo"
//             options={options}
//             renderInput={(params) => <TextField {...params} label="Eğitim Durumu Seçiniz" />}
//         />
//          </Grid>
         
//          <Grid item xs={4} style={{marginLeft: 30}}>
//          <Autocomplete
//             value={countryValue}
//             onChange={onChangeCountryValue}          
//             id="controllable-states-demo"
//             options={countryOptions}
//             renderInput={(params) => <TextField {...params} label="Ülke Seçiniz" />}
//         />
//           </Grid>
//          </Grid>
         
//         <StyledButton
//         id="secondary-button"
//         variant='outlined'
//         color='primary'
//         onClick={onClickSave}   
//         >
//        <Typography>
//            Kaydet
//        </Typography>

//         </StyledButton>



//        </Grid>
//        </Paper>
//     </Grid>
//     )
// };

// export default Home;

import React, { useState } from "react";
import {
  Link
} from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {AccessAlarm, ThreeDRotation} from '@mui/icons-material';
import Icon from '@mui/material/Icon';
import StyledButton from '../../components/Button';
import { TextField, Grid, Paper , Typography} from '@material-ui/core';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import Toast from "../../components/toast";
//import "./new-link.sass";

const CreateLink = () => {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [isButtonClickable, setIsButtonClickable] = useState(true);
  const [isToastActive, setIsToastActive] = useState(false);
  const [open, setIsOpen] = React.useState(false);
 
 
  const onToastClosed = () => {
    setIsToastActive(false);
  };

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
      alert("NOT VALID");
     
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
    setIsToastActive(true);
  };

  const onToastUnMount = () => {
    setIsButtonClickable(true);
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


  return (
    <>
      <Grid 
      container 
      justifyContent="center"
     // display="flex"
      //margin="20px auto"
     // width="350px"
      direction="column"
      spacing={1}
      alignItems='center'
      style={{marginTop: '20px'}}
      >
        <Link to="/">
           <Grid item>
            <strong>Return To List</strong>
            </Grid>
        </Link>

        <Grid item> 
            <h1>Add New Link</h1>
          </Grid>

        <Grid item xs={6}>  
          <TextField
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
        
     <Grid item xs={6}>
        <TextField
          variant="outlined"
          placeholder="e.g.http://abc.xyz"
          onChange={(e) => setLinkUrl(e.target.value)}
          id="outlined-required"
          label="Link Url"
          disabled={!isButtonClickable}
        />
      </Grid>
       
  <Grid item xs={6} style={{marginTop: '10px'}}>
      
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

      {/* {isToastActive && (
        <Toast
          onToastClosed={onToastClosed}
          linkName={linkName}
          message="added."
          onToastUnMount={onToastUnMount}
        ></Toast>
      )} */}
    </>
  );
};

export default CreateLink;