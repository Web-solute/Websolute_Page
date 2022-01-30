import styled from "styled-components";
import "./styles.css";
import instagram from "./Media/instagram.png";
import github from "./Media/github.png";
const Copy = styled.span`
  font-size: 18px;
  font-weight: 800;
`;
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <span>
          <a href="https://github.com/Web-solute">
            <img className="icon" src={github}></img>
          </a>
          <a href="https://instagram.com/web_solute?utm_medium=copy_link">
            <img className="icon" src={instagram}></img>
          </a>
        </span>
        <Copy>
          Copyright© WEBSOLUTE<span>{year}</span>
        </Copy>
      </div>
    </footer>
  );
};

export default Footer;
