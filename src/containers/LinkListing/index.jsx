import React, { useState} from "react";
import SubmitLink from "../../components/SubmitLink";
import OrderByDropdown from "../../components/OrderByDropdown";
import Link from "../../components/LinkCard";
import Pagination from "../../components/Pagination";
import Dialog from "../../components/DeletePopup";
import {Grid} from '@material-ui/core';
import PropTypes from "prop-types";
import Toast from '../../components/ToastMessages'

const Linklist = () => {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  let [activePage, setActivePage] = useState(1);
  const [selectedLink, setSelectedLink] = useState({});
  const [open, setIsOpen] = useState(false);
  const [isToastActive, setIsToastActive] = useState(false);

  const onDialogOpened = (link) => {
    setSelectedLink(link);
    setIsOpen(true);
  };

  const onDialogClosed = () => {
    setIsOpen(false);
  };

  const onDialogConfirm = () => {
    removeLinkLocalStorage();
    onDialogClosed();
    setIsToastActive(true);
  };

  const onToastClosed = () => {
    setIsToastActive(false);
  };


  const onChangeDropdown = (value) => {
    let sortedLinks = [];
    if (value === "lv") {
      sortedLinks = [...links.sort((a, b) => a.points - b.points)];
    } else if (value === "mv") {
      sortedLinks = [...links.sort((a, b) => b.points - a.points)];
    } else {
      sortedLinks = [
        ...links.sort((a, b) => {
          const aDate = new Date(a.createdAt);
          const bDate = new Date(b.createdAt);

          return bDate - aDate;
        }),
      ];
    }
    setLinks(sortedLinks);
  };

  const removeLinkLocalStorage = () => {
    const newLinks = links.filter((link) => {
      return link.id !== selectedLink.id;
    });

    localStorage.setItem("links", JSON.stringify(newLinks));
    setLinks(newLinks);

    if (newLinks.length % 5 === 0 && activePage !== 1) {
      setActivePage(--activePage);
    }
  };

  const onUpVote = (selectedLink) => {
    const foundIndex = links.findIndex((link) => link.id === selectedLink.id);
    links[foundIndex].points++;

    const newLinks = [...links];

    localStorage.setItem("links", JSON.stringify(newLinks));
    setLinks(newLinks);
  };

  const onDownVote = (selectedLink) => {
    const foundIndex = links.findIndex((link) => link.id === selectedLink.id);
    links[foundIndex].points--;

    const newLinks = [...links];

    localStorage.setItem("links", JSON.stringify(newLinks));
    setLinks(newLinks);
  };

  const generateLinks = () => {
    return links.slice((activePage - 1) * 5, activePage * 5).map((link) => { 
    
      return (
        <Link
          link={link}
          key={link.id}
          onDialogOpened={() => onDialogOpened(link)}
          onUpVote={() => onUpVote(link)}
          onDownVote={() => onDownVote(link)}
        ></Link>
      );
    });
  };

  return (
  <>
  <Grid 
    container
    direction="column"
    justifyContent="center"
    alignItems="center" 
    spacing={1}
    >

    <Grid item xs={12}>   
      <SubmitLink/>
      </Grid>
    
    <Grid item>
      <OrderByDropdown 
      onChangeDropdown={onChangeDropdown}
      />   
     </Grid>

      <Grid>  
      {generateLinks()}
      {links.length > 5 && (
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          links={links}
        ></Pagination>
      )}
        </Grid>
      {open && (
        <Dialog
          onDialogClosed={onDialogClosed}
          onDialogConfirm={onDialogConfirm}
          selectedLink={selectedLink}
          onDialogOpened={onDialogOpened}
        ></Dialog>
      )}
      {isToastActive && (
        <Toast
          onToastClosed={onToastClosed}
          linkName={selectedLink.name}
          message="removed."
          onToastUnMount={() => {}}
        ></Toast>
      )} 
       </Grid>
   </>
  );
};

Linklist.propTypes = {
  onDialogClosed: PropTypes.func,
  onDialogConfirm: PropTypes.func,
  selectedLink: PropTypes.object
}

export default Linklist;