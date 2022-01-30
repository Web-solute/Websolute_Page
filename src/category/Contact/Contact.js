import { Component } from "react";
import styled from "styled-components";
import Footer from "../../Footer";
import Menu from "../../Menu";
import instagram from "../../Media/instagram.png";
import github from "../../Media/github.png";
import kakao from "../../Media/kakao.png";
import gmail from "../../Media/gmail.png";
import "./Contact.css";
class Contact extends Component {
  /*
      constructor(props){
          super(props);
      }
      getReadContent(){
  
      }
      
     */
  render() {
    const Contact = styled.h1`
      font-size: 55px;
    `;
    return (
      <>
        <Menu />
        <nav className="contact">
          <Contact>Contact Us</Contact>
          <div className="box">
            <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/kakaotalk_black_logo_icon_147117.png"></img>
            <p>Kakao Channel</p>

            <a href={kakao}>@_TLxixls</a>
          </div>

          <div className="box">
            <img src={github}></img>
            <p>Github</p>

            <a href=" https://www.websolute.co.kr/">@websolute</a>
          </div>

          <div className="box">
            <img src={instagram}></img>
            <p>Instagram</p>

            <a href=" https://instagram.com/web_solute?utm_medium=copy_link">
              @websolute
            </a>
          </div>
          <div className="box">
            <img src={gmail}></img>
            <p>Gmail</p>

            <a>psh090953@gmail.com</a>
          </div>
        </nav>
        <Footer />
      </>
    );
  }
}
export default Contact;
