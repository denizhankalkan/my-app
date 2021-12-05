import React from "react";
 import {
   faChevronLeft,
   faChevronRight,
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./index.sass";
import {  Grid} from '@material-ui/core';


const Pagination = (props) => {
  const { links } = props;
  let { activePage, setActivePage } = props;

  const pages = [...Array(Math.ceil(links.length / 5)).keys()].map(
    (value) => value + 1
  );

  const generatePages = () => {
    return pages.map((page, index) => {
      return (
        <span
          onClick={() => setActivePage(page)}
          key={index}
          className={index + 1 === activePage ? "active page" : "page"}
        >
          {page}
        </span>
      );
    });
  };

  return (
    <Grid container className="pagination-container">
     <FontAwesomeIcon
        icon={faChevronLeft}
        className="icon"
        onClick={() => {
          if (activePage > 1) {
            setActivePage(--activePage);
          }
        }}
      />
      <Grid className="pages-container">{generatePages()}
      
      </Grid>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="icon"
        onClick={() => {
          if (activePage < pages.pop()) {
            setActivePage(++activePage);
          }
        }}
      />
    </Grid>
  );
};

Pagination.propTypes = {
  links: PropTypes.array,
  activePage: PropTypes.number,
  setActivePage: PropTypes.func
};

export default Pagination;