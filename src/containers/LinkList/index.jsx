import React, { useState, useEffect } from "react";
import SubmitLink from "../../components/submit-link";
import OrderByDropdown from "../../components/order-by-dropdown";
import Link from "../../components/link";
import Pagination from "../../components/Pagination";
import Dialog from "../../components/dialog";
//import Toast from "../../components/toast/toast";
//import "./listing.sass";
import { Button, Grid, TextField, Typography} from '@material-ui/core';

const Linklist = () => {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  let [activePage, setActivePage] = useState(1);
  const [isDialogActive, setIsDialogActive] = useState(false);
  //const [isToastActive, setIsToastActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({});
  const [optionValue, setOptionValue] = useState('');
  
  const optionList = [{label: 'Most Voted(Z -> A)', id: 1}, {label: 'Less Voted (A -> Z)', id: 2 }];


  // useEffect(() => {
  //  if()
  // }, [id])

  const onDialogOpened = (link) => {
    setSelectedLink(link);
    setIsDialogActive(true);
  };

  const onDialogClosed = () => {
    setIsDialogActive(false);
  };

  const onDialogConfirm = () => {
    removeLinkLocalStorage();
    onDialogClosed();
  // setIsToastActive(true);
  };

  const onToastClosed = () => {
  // setIsToastActive(false);
  };

  // console.log("links", links)
  // console.log("optionList-^^^^", optionList[0].id)
  
  // var aa = optionList.find(function (aa) {
  //   if (aa.id === 1) {
  //     return aa
  //   }
  // })

  // console.log("aa", aa)



  // const onChangeDropdown = (optionList) => {
  //   // console.log("value", value);
  //   // console.log("value-id", value.id)
  //   // console.log("id-data", optionList.id)
  //   //console.log("atanan-Value", optionList[0].label)
  //  // setOptionValue(optionList.label);
  //   let sortedLinks = []; 
    
  //   if (optionList === optionList[0].label) {
  //     console.log("cevap", value)
  //     sortedLinks = [...links.sort((a, b) => a.points - b.points)];
  //   } else if (value === optionList[1].label) {
  //     sortedLinks = [...links.sort((a, b) => b.points - a.points)];
  //   } else {
  //     sortedLinks = [
  //       ...links.sort((a, b) => {
  //         const aDate = new Date(a.createdAt);
  //         const bDate = new Date(b.createdAt);

  //         return bDate - aDate;
  //       }),
  //     ];
  //   }

  //   setLinks(sortedLinks);
  // };

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
  alignItems="center">

      <SubmitLink></SubmitLink>
      <div className="horizontal-line"></div>
      <OrderByDropdown 
      onChangeDropdown={onChangeDropdown}
      optionValue={optionValue}
      optionList={optionList}
      />
      {generateLinks()}
      {links.length > 5 && (
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          links={links}
        ></Pagination>
      )}
      {isDialogActive && (
        <Dialog
          onDialogClosed={onDialogClosed}
          onDialogConfirm={onDialogConfirm}
          selectedLink={selectedLink}
        ></Dialog>
      )}
      {/* {isToastActive && (
        <Toast
          onToastClosed={onToastClosed}
          linkName={selectedLink.name}
          message="removed."
          onToastUnMount={() => {}}
        ></Toast>
      )} */}
       </Grid>
   </>
  );
};

export default Linklist;