import { Component } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Menu from "../Menu";
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

            <a href="https://pf.kakao.com/_TLxixls">@_TLxixls</a>
          </div>

          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"></img>
            <p>Github</p>

            <a href=" https://www.websolute.co.kr/">@websolute</a>
          </div>

          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></img>
            <p>Instagram</p>

            <a href=" https://instagram.com/web_solute?utm_medium=copy_link">
              @websolute
            </a>
          </div>
          <div className="box">
            <img src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png"></img>
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
