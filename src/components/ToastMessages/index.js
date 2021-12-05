import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid} from "@material-ui/core";
import "./index.style.sass";

const Toast = ({onToastClosed, onToastUnMount, linkName, message}) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {  
    setTimeout(() => {
      setIsActive(false);
    }, 3000); 

    setTimeout(() => {
      onToastClosed();
    },5000); 

    return () => {
      onToastUnMount();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return (

   <Grid className={isActive ? "toast-success fadeIn" : "toast-success fadeOut"}>
    <span>{linkName}</span> {message}
  </Grid>
    
  );
};

Toast.propTypes = {
  onToastClosed: PropTypes.func,
  onToastUnMount: PropTypes.func,
  linkName: PropTypes.string,
  message: PropTypes.string
};

export default Toast;