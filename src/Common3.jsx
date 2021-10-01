import React from "react";
import pic from "../src/images/conceptnew.png";
import image from "../src/images/concept3.png";


import { NavLink } from "react-router-dom";



const Common3 = (props) => {
  return(
    <>
    <section id="Header" className="d-flex align-items-center" className="section-bg">
    <div className="container-fluid">
      <div className="row header-bg">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-lg-0 order-2 order-lg-1 mt-5 ">
            <h5 className="color-c">
                {props.namenew}
            </h5>
            <h1>
                {props.namenxt}
            </h1>
           
            <p className="pagenxt">
                {props.pagenxt}
            </p>
            <h1 style={{lineHeight: '0.9'}}><strong className="brand-name1">{props.name2}</strong></h1>
          <form action="">
          <div className="row">
                <div className="col-lg-10 order-1 order-lg-1">
                    <div className="contact-info">
                    <input type="text" class="form-control" name="name" required="" aria-required="true" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-lg-10 order-1 order-lg-1">
                    <div className="contact-info">
                    <input type="text" class="form-control" name="email" required="" aria-required="true" placeholder="Email"/>
                    </div>
                </div>
                <div className="col-lg-10 order-1 order-lg-1">
                    <div className="contact-info-form">
                    <input type="textarea" class="form-control" name="message" required="" aria-required="true" placeholder="Type your Message"/>
                    </div>
                </div>
                <div className="col-lg-10 order-1 order-lg-1 justify-content-end">
                <div className="mt-4 btn-get-started">
              <NavLink to={props.visit} className="btn btn-" required="/required" aria-required="true" >
                {props.btnames}
                 </NavLink>
            </div>
                </div>
            </div>
          </form>
          </div>
          <div className="col-md-6 order-1 order-lg-1 mt-3 header-img">
            <img src={props.imgsrc} className="animated img-fluid" alt="home-image" />
          </div>
          </div>
      </div>
      </div>
      </div>
    </section>
    <section className="bg-contact2">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-10 mx-auto">
        <div className="set-contactnew">
            <div className="service-below">
                <h3>{props.contact}</h3>
            </div>
            <div className="service1-below">
                <h4>Are You Ready to Work with Me?<br></br>Don't be Shy, Say Hello!</h4>
            </div>
       
            <div className="col-10 mx-auto">
              <div className="contact-infonew">
                <p>{props.contact2}</p>
                <p className="phone-c">{props.contact3}</p>
              </div>
              
            </div>
        
        </div>
       
        </div>
      </div>
      </div>
    </section>
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
              <NavLink to={props.visit} className="btn btn- " >
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
export default Common3;


           