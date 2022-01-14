import { Link } from "react-router-dom";
import Logo from "./Media/Logo.png";
import styled from "styled-components";
import "./styles.css";
const Menubar = styled.ul`
  display: inline;
  margin-top: 20px;
  position: absolute;
`;
const Im = styled.img`
  width: 210px;
  height: 55px;
`;
const Menu = () => {
  return (
    <div>
      <Link to="/">
        <Im src={Logo}></Im>
      </Link>
      <Menubar>
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
