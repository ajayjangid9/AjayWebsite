import React from "react";
import pic from "../src/images/conceptnew.png";
import image from "../src/images/concept3.png";


import { NavLink } from "react-router-dom";



const Common2 = (props) => {
  return(
    <>
    <section className="section-bg">
      <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-5">
              <div className="my-services">
                <h6>{props.myservices}</h6>
              </div>
              <div className="services-inner">
                <h1>{props.servicesinner}</h1>
              </div>
              <p>{props.servicespage}</p>
              <nav className="services-list">
               <ul className="services-listed animated">
              <li className="text-animated">{props.uiux}</li>
              <li className="text-animated">{props.mobileappdesgin}</li>
              <li className="text-animated">{props.webdesgin}</li>
              <li className="text-animated">{props.webdeveloper}</li>
               </ul>
              </nav>
            </div>
            
            <div className="col-lg-6 order-1 order-lg-1 mt-5">
            <img src={props.img1} className="img-fluid fade-in mt-3" alt="home-image" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className="section-bg">
      <div className="container-fluid">
      <div className="row ">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-5 p-0">
            <img src={props.img2} className=" img-fluid fade-in mt-3" alt="home-image" />
             
            </div>
            
            <div className="col-lg-6 order-1 order-lg-1 mt-5">
            <div className="my-services">
                <h6>{props.namecurrent}</h6>
              </div>
              <div className="services-inner">
                <h1>{props.name5}</h1>
              </div>
              <p>{props.name6}</p>
              <div className="progress-set">
             <div className="progress-name1">
             <h6>{props.progress1}</h6>
             </div>
              <div class="progress mt-2">
  <div class="progress-bar1" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
<div className="progress-name">
             <h6>{props.progress2}</h6>
             </div>
              <div class="progress mt-2">
  <div class="progress-bar2" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="">70%</div>
</div>
<div className="progress-name">
             <h6>{props.progress3}</h6>
             </div>
              <div class="progress mt-2">
  <div class="progress-bar3" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
</div>
<div className="progress-name">
             <h6>{props.progress4}</h6>
             </div>
              <div class="progress mt-2">
  <div class="progress-bar4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
</div>
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
export default Common2;


           