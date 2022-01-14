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
      <Link to="/">
        <img src={Logo} width="250" height="80" alt="로고"></img>
      </Link>
      <Menubar className="menubar">
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
