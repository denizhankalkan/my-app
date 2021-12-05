import React from "react";
import PropTypes from "prop-types";
import "./index.style.sass";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteIcon from '@mui/icons-material/Delete';
import {  Grid, Typography} from '@material-ui/core';

const LinkCard = ({link, onDialogOpened, onUpVote, onDownVote}) => {

  return (
    <Grid className="link-container">
    <Grid className="link-points">
      <Typography className="points" data-testid="link-points">
        <strong>{link.points}</strong> Points
      </Typography>
      
    </Grid>
    <Grid className="link-details">
      <Typography className="link-title" data-testid="link-name">
        {link.name}
      </Typography>
      <Typography className="link-url" data-testid="link-url">
        ({link.url})
      </Typography>
      <Grid className="link-vote-container">
        <Grid className="link-vote" onClick={onUpVote}>
          <FontAwesomeIcon icon={faArrowUp} className="icon" />
          Up Vote
        </Grid>
        <Grid className="link-vote" onClick={onDownVote}>
          <FontAwesomeIcon icon={faArrowDown} className="icon" />
          Down Vote
        </Grid>
      </Grid>
    </Grid>
     <DeleteIcon
    onClick={onDialogOpened}
    >    
      </DeleteIcon> 
 </Grid>
  );
};

LinkCard.propTypes = {
  link: PropTypes.object,
  onDialogOpened: PropTypes.func,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
};

export default LinkCard;