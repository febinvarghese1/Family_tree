import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {FaTwitter,FaFacebook,FaInstagramSquare} from "react-icons/fa"
import styledComponents from "styled-components";
import {device} from "../device";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <LeftMenu onClick={() => setToggle(!toggle)}>
        {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        <SideMenu toggle={toggle}>
          <SideMenuItems>Home</SideMenuItems>
          <SideMenuItems>About</SideMenuItems>
          <SideMenuItems>Gallery</SideMenuItems>
          <SideMenuItems>Blog</SideMenuItems>
          <SideMenuItems>Contact</SideMenuItems>
        </SideMenu>
      </LeftMenu>
      <CenterMenu>Family Tree</CenterMenu>
      <RightMenu>
          <SocialIcons><FaFacebook /></SocialIcons>
          <SocialIcons><FaTwitter /></SocialIcons>
          <SocialIcons><FaInstagramSquare /></SocialIcons>
      </RightMenu>
    </Container>
  );
};

// Main container
const Container = styledComponents.div`
display:flex;
justify-content:space-between;
align-items:center;
height:6vh;
background-color:#71C9CE;
font-family: var(--secondary-font);
font-size:1.5rem;
`;

//left menu
const LeftMenu = styledComponents.div`padding:0px 5px;
font-size:20px;
position:relative;

`;
const SideMenu = styledComponents.ul`position:absolute;
background-color:#CBF1F5;
height:100vh;
width: 25vw;
left: ${({ toggle }) => (toggle ? "0" : "-100vw")};
transition: all 600ms ease;
top:4.7vh;
z-index:500;
@media ${device.mobileL} {
  width:50vw;   
}

`;
const SideMenuItems = styledComponents.li`text-align:center; 
margin-top:20px;
text-transform:uppercase;
cursor:pointer;
&:hover{
    transform: scale(1.1);
    transition: all 700ms ease-in-out;
}
`;

//left Menu Ends

const CenterMenu = styledComponents.div``;


const RightMenu = styledComponents.div` display:flex;
justify-content: space-around;
`;

const SocialIcons = styledComponents.i`
color: #1d1919;
padding-left:10px;
`;

export default Header;
