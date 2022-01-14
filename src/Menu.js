import { Link } from "react-router-dom";
import Logo from "./Media/Logo.jpg";
import styled from "styled-components";
import "./styles.css";
const Menubar = styled.ul`
  display: inline;
`;

const Menu = () => {
  return (
    <div>
      <Menubar className="menubar">
        <Link className="title" to="/">
          WEBSOLUTE
        </Link>
        <Link className="link" to="/about">
          About
        </Link>

        <Link to="/project" className="link">
          Project
        </Link>

        <Link to="/recruitment" className="link">
          Recruitment
        </Link>

        <Link to="/contact" className="link">
          Contact
        </Link>
      </Menubar>
    </div>
  );
};
export default Menu;
