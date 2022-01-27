import { Link } from "react-router-dom";
import Logo from "./Media/Logo.png";
import Logo2 from "./Media/Logo2.png";
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
        <Im src={Logo2}></Im>
      </Link>
      <Menubar>
        <Link className="link" to="/about">
          About
        </Link>

        <Link to="/Projectpage" className="link">
          Project
        </Link>

        <Link to="/recruitment" className="link">
          Recruitment
        </Link>

        <Link to="/member" className="link">
          Member
        </Link>

        <Link to="/contact" className="link">
          Contact
        </Link>

      </Menubar>
    </div>
  );
};
export default Menu;
