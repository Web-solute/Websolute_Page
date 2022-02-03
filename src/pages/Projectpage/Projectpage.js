import React, { useState, useEffect } from 'react';
import Scrollup from '../Scrollup';
import './styles.css'
import ProjectItem from './ProjectItem';
import Clickpage from './Clickpage';
import ProjectList from './ProjectList';

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


  return (
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


      <Scrollup />
    </section>
  );
};

export default Projectpage;