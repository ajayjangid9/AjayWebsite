import React from "react";
// import pic from "../src/images/conceptnew.png";
// import image from "../src/images/concept3.png";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



import { NavLink } from "react-router-dom";



const Common4 = (props) => {
  return(
    <>
    <section id="Headernew" className="d-flex align-items-center" className="section-bg">
    <div className="container-fluid">
      <div className="row header-bg">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-lg-0 order-2 order-lg-1 mt-5">
          <p className="my-3">
                {props.namep}
            </p>
           
            <h5 className="my-port">
            I Create the Best Product Quality<br></br> And I Am Good At This.
            </h5>
            <div className="mt-4 btn-get-started">
             
            </div>
           
          </div>
          <div className="col-md-6 order-1 order-lg-1 mt-3 header-img">
            <img src={props.imgsrc} className="animated img-fluid" alt="home-image" style={{width: '100%'}} />
          </div>
          </div>
        
      </div>
      </div>
      </div>
    </section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row mt-5">
                    <div className="col-lg-6 order-1 order-lg-1">
                    <img src={props.imgport} className=" img-fluid" alt="home-image" style={{width: '50%'}} />
                    </div>
                    <div className="col-lg-6 order-1 order-lg-1">
                    <img src={props.imgportnew} className=" img-fluid" alt="home-image" style={{width: '100%'}} />
                    </div>
                  
                   
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row mt-4">
                   <div className="col-lg-8 order-1 order-lg-1" style={{marginTop: '7%'}}>
                   <div className="hire">
                        <h6>Hire Me</h6>
                        <h3>Any Project in your Mind</h3>
                    </div>
                <div className="mt-4 btn-get-startedd mt-2">
                 <NavLink to={props.visit} className="btn btn- " >
                {props.btnamecontact}
                <i class="fa fa-long-arrow-right run-ic" aria-hidden="true" style={{marginLeft:'7px'}}></i>      </NavLink>
                <NavLink to={props.visit} className="btn btn- " style={{marginLeft: '4%'}}>
                {props.btnamecv}
                <i class="fa fa-download run-ic" aria-hidden="true" style={{marginLeft:'7px'}}></i>      </NavLink>
                </div>
                   </div>
                   <div className="col-lg-4 order-1 order-lg-1" style={{marginTop:'4%'}}>
                   <img src={props.imgportnewhire} className=" img-fluid" alt="home-image" style={{width: '100%'}} />
                   </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="bg-below">
   <div className="container-fluid">
     <div className="row mt-5">
       <div className="col-10 mx-auto">
         <div className="row">
           <div className="col-lg-9 order-1 order-lg-1">
          
          <div className="contact-now mt-5">
            <h2>Let’s Make Something Together Start a <strong style={{color: '#00CE8F'}}>conversation</strong></h2>
            
          </div>
        
           </div>
          
           <div className="col-lg-3 order-1 order-lg-1">
           <div className="mt-4 btn-get-startedd mt-5">
              <NavLink to={props.visit} className="btn btn-" >
                {props.btnamecontact}
                <i class="fa fa-long-arrow-right run-ic" aria-hidden="true" style={{marginLeft:'7px'}}></i>      </NavLink>
            </div>
            

           </div>
         </div>
        <div className="row mt-4">
          <div className="col-lg-3 order-1 order-lg-1 color-all">
            <h6 className="name-b">AJay Jangid</h6>
            <div className="Adress-bar color-all">
              <p>{props.newf}</p>
            </div>
            <div className="contact-detail">
              <h5>{props.newf1}</h5>
              <h5 className="email-se ">{props.newf2}</h5>
            </div>
            <div className="s-links mt-2 color-all">
              <div className="insta-set color-all">
              
              <i class="fa fa-instagram" aria-hidden="true"></i>
              
              </div>
              <div className="t-set color-all">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div className="f-set color-all">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </div> 
              <div className="l-set color-all">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </div>
            </div>
            <div className="col-lg-3 order-1 order-lg-1">
              <div className="us-links mt-1  color-all">
              <h6>{props.newf3}</h6>
              </div>
              <div className="s-links-f color-all">
                <div className="ic-add color-all">
                <ul className="footer-ui color-all">
              
                <NavLink to={"./Home"}>
                <li>{props.newf4}</li>
                </NavLink>
                <NavLink to={"./About"}>
                <li>{props.newf5}</li>
                </NavLink>
                <NavLink to={"./Portfiolio"}>
                <li>{props.newf6}</li>
                </NavLink>
                <NavLink to={"./Services"}>
                <li>{props.newf7}</li>
                </NavLink>
                <NavLink to={"./Contact"}>
                <li>{props.newf8}</li>
                </NavLink>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-1 order-lg-1">
              <div className="us-links mt-1 ">
              <h6>{props.newf9}</h6>
              </div>
              <div className="s-links-f color-all">
                <div className="ic-add color-all">
                <ul className="footer-new color-all">
                <li>{props.newf10}</li>
                <li>{props.newf11}</li>
                <li>{props.newf12}</li>
                <li>{props.newf13}</li>
                <li>{props.newf14}</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-1 order-lg-1">
              <div className="us-links mt-1 color-all ">
              <h6>{props.newf15}</h6>
              </div>
              <div className="s-links-f color-all">
                <div className="ic-add color-all">
                <ul className="footer-new color-all">
              
                <li>{props.newf16}</li>
                <li>{props.newf17}</li>
                <li>{props.newf18}</li>
                <li>{props.newf19}</li>
               
                </ul>
                </div>
              </div>
            </div>
            </div>
       </div>
     </div>
   </div>
   </footer>
   
  

    </>
  );
};
export default Common4;


           