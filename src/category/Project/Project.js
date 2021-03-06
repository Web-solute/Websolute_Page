import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import Clickpage from './Clickpage';
import ProjectList from './ProjectList';
import "./Project.css";
import styled from "styled-components";
import Footer from "../../Footer";
import Menu from "../../Menu";

const itemsPerPage = 3;
let arrayForHoldingItems = [];

const Projectpage = () => {

  const [itemsToShow, setItemsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedItems = ProjectList.slice(start, end);
    arrayForHoldingItems = [...arrayForHoldingItems, ...slicedItems];
    setItemsToShow(arrayForHoldingItems);
  };

  useEffect(() => {
    loopWithSlice(0, itemsPerPage);
  }, []);

  const handleShowMoreItems = () => {
    loopWithSlice(next, next + itemsPerPage);
    setNext(next + itemsPerPage);
  };

  const [showModal, setShowModal] = useState(false);

  const [clickedObject, setClickedObject] = useState([]);

  console.log(itemsPerPage)
  console.log(itemsToShow)
  console.log(ProjectList.length)

  const Pro = styled.h1`
      font-size: 55px;
    `;

  return <>
    <Menu />
    <div className="proo">
      <Pro>Look Around Our Projects</Pro>
    </div>
    <section id="project" className="section">
      <div className="div3">
        <ProjectItem
          itemsToRender={itemsToShow}
          clickItems={setShowModal}
          clickedObject={setClickedObject}
        />
        {showModal ? (
          <Clickpage
            itemsToShow={clickedObject}
            clickItems={setShowModal}
          />
        ) : null}

      </div>
      {Object.keys(ProjectList).length ===
        Object.keys(arrayForHoldingItems).length ? null : (
        <button
          onClick={handleShowMoreItems}
          className="main_more_button"
        >
          더보기
          <svg
            className="more_button"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      )}

      <br />
      <br />
      <br />


      <Footer />
    </section>
  </>
};

export default Projectpage;