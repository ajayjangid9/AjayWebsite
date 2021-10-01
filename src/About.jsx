import React from "react";
import pic from "../src/images/about3.png";
import icon from "../src/images/per.png";
import icon2 from "../src/images/per1.png";
import icon3 from "../src/images/fac3.png";
import icon4 from "../src/images/logo1.png";
import icon5 from "../src/images/logo2.png";
import icon6 from "../src/images/logo3.png";
import icon7 from "../src/images/logo4.png";
import icon8 from "../src/images/contact.png";
import icon9 from "../src/images/ani-5.png";

import { NavLink } from "react-router-dom";
import Common1 from "./Common1";



const About = () => {
  return(
    <>
   <Common1 namenew='Welcome to About Page'
    imgsrc={pic} 
    visit="/Contact" 
    btname="Contact Now"
    namenxt="Award-winning web design studio"
    pagenxt="Syntaxis is a small yet powerful web design & development. Over the last few Months we've made a reputation for Property, Fast Food websites that are:"
    myabout="Some Reason Us"
    myabout2="Why Choose Us"
    myabout3="High Quality Desgin"
    myabout4="Agile and Fast Working Style"
    myabout5="High Level of Usability"
    imgnew={icon}
    imgnew2={icon2}
    imgnew3={icon3}
    imgnew4={icon4}
    imgnew5={icon5}
    imgnew6={icon6}
    imgnew7={icon7}
    imgnew8={icon8}
    imgsrcnew={icon9}
    btnamecontact="Hire Me Now"
   
    mycontact2="Get a Prototype of Your Future Website!"
    newf="OPEN: Statue of Liberty & Ellis Island Tour: All Options"
    newf1="Phone: 7300149500"
    newf2="Email: theajayjangid9@gmail.com"
    newf3="Useful Links"
    newf4="Home"
    newf5="About"
    newf6="Portfolio"
    newf7="Services"
    newf8="Contact"
    newf9="Our-Services"
    newf10="Web Desgin"
    newf11="UI & UX Desgin"
    newf12="Mobile App Desgin"
    newf13="E-Commerce Desgin"
    newf14="Logo Desgin"
    newf15="Working Hours"
    newf16="Monday - Friday : 10:00 to 6:00"
    newf17="Saturday : 11:00 to 5:00"
    newf18="Sunday : Day Off (Holiday)"
    
    
    />
    </>
  );
};
export default About;