import React from 'react';
import "./Project.css";

const Clickpage = ({ itemsToShow, clickItems }) => {
  const list = (
    <div>
      <div className="Clickpage_div1">
        <div className="Clickpage_div2">
          <div className="Clickpage_div3">
            <div className="Clickpage_div4">
              <h1 className="Clickpage_title">
                {itemsToShow.title}
              </h1>
            </div>
            <div className="Clickpage_div5"></div>
            <div className="Clickpage_div6">
              <img className="Clickpage_img" src={itemsToShow.imageurl} />
              <p className="Clickpage_p">
                {itemsToShow.content}
              </p>
              <br />
            </div>
            <div className="Clickpage_div7"></div>
            <div className="Clickpage_div8">
              <p className="Clickpage_p2">
                <a
                  className="Clickpage_a"
                  href={itemsToShow.link}
                >
                  Link
                </a>
              </p> &nbsp; &nbsp;
              <button
                className="Clickpage_button"
                type="button"
                onClick={() => clickItems(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Clickpage_div9"></div>
    </div>
  );

  return list;
};

export default Clickpage;
