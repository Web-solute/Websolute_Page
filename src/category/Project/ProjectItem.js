import React from 'react';
import Fade from 'react-reveal/Fade';
import "./Project.css";


const ProjectItem = ({ itemsToRender, clickItems, clickedObject }) => {
  const list = itemsToRender.map((project, index) => (
    <Fade bottom>
      <div
        className="ProjectItem_div1"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          clickItems(true);
          clickedObject(itemsToRender[index]);
        }}

      >
        <a
          className="a1"
          key={index}
        >
          <div className="ProjectItem_div2">
            <img
              alt="cover"
              className="img_tag"
              src={project.imageurl}
              key={project.imageurl}
            />
          </div>
          <div className="ProjectItem_div3">
            <h2
              className="h2tag"
              key={project.title}
            >
              {project.title}
            </h2>
            <p className="ptag">
              {project.content.substr(0, 50) + '...'}
            </p>
          </div>

        </a>
      </div>
    </Fade>
  ));

  return list;
};

export default ProjectItem;
