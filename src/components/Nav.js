import React, { useRef, useState } from "react";
import "animate.css";
import content from "../content/content";

export default function Navbar() {
const [activ,isactiv]=useState(false);
const iconref=useRef(""); 
const listref=useRef(""); 
let defaultClass="fa fa-sharp fa-solid fa-bars";
let activClass="activ fa fa-solid fa-xmark";
const animate=()=>activ==false?"list":"list animate__animated animate__fadeInLeft";
const iconclick=()=>{
if(activ==false){
iconref.current.className=activClass;
listref.current.style.display="block";
isactiv(true);
}else{
  iconref.current.className=defaultClass;
  listref.current.style.display="none";
  isactiv(false);
}
}
  return (
      <nav id="nav">
      <i className={defaultClass} ref={iconref} onClick={iconclick}></i>
      <ul className={animate()} ref={listref}>
        <li><a href="#home">    {content.nav_links[0]}</a></li>
        <li><a href="#section2">{content.nav_links[1]}</a></li>
        <li><a href="#section3">{content.nav_links[2]}</a></li>
        <li><a href="#section4">{content.nav_links[3]}</a></li>
        <li><a href="#section5">{content.nav_links[4]}</a></li>
        <li><a href="#contact"> {content.nav_links[5]}</a></li>
      </ul>
    </nav>
  )
}