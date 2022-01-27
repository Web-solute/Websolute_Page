import styled from "styled-components";
import "./styles.css";
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
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"
            ></img>
          </a>
          <a href="https://instagram.com/web_solute?utm_medium=copy_link">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            ></img>
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
