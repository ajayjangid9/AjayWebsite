import React from "react";
import pic from "../src/images/conceptnew.png";
import image from "../src/images/concept3.png";

import { NavLink } from "react-router-dom";



const Common1 = (props) => {
  return(
    <>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
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
            <p>{props.name}</p>
            <h1 className="text-animated"><strong className="brand-name">{props.name2}</strong></h1>
            <h5 className="my-3">
                {props.name3}
            </h5>
          
            <div className="mt-4 btn-get-started">
              <NavLink to={props.visit} className="btn btn- " >
                {props.btname}
                 </NavLink>
            </div>
            <img src={props.imgsrcnew} className="round-animated img-fluid" style={{width: '5%'}} alt="home-image" />
            <div className="new">
              <h2>{props.name4}</h2>
            </div>
          
          </div>
        
          <div className="col-md-6 order-1 order-lg-1 mt-3 header-img">
            <img src={props.imgsrc} className="animated img-fluid" style={{width: '80%'}} alt="home-image" />
          </div>
          </div>
      </div>
      </div>
      </div>
    </section>
    <section>
      <div className="container-fluid">
        <div className="row mt-5 ">
          <div className="col-10 mx-auto">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 order-1 order-lg-1 ">
              <div className="my-about ">
                <h6>{props.myabout}</h6>
              </div>
              <div className="my-about2">
                <h1>{props.myabout2}</h1>
              </div>
              </div>
            </div>
            <div className="row mt-5">
        
            <div className="col-lg-4 col-md-6 col-12" >
         
              <div className="icons-add">
              <img src={props.imgnew} className="img-fluid animation-about" style={{width: '40%'}}/>
              </div>
          
            <div className="choose-us mt-4">
              <h6>{props.myabout3}</h6>
            </div>
            <div className="page-icon mt-2">
              <p>We use top-notch hardware to<br></br> develop the most efficient Desgin for<br></br> our customers</p>
            </div>
             
            </div>
            <div className="col-lg-4 order-1 order-lg-1" >
            <div className="icons-add">
              <img src={props.imgnew2} className="img-fluid animation-about2" style={{width: '40%'}}/>
              </div>
          
            <div className="choose-us mt-4">
              <h6>{props.myabout4}</h6>
            </div>
            <div className="page-icon mt-2">
              <p>This type of approach to our work<br></br>helps our specialists to quickly<br></br> develop better apps.</p>
            </div>
            </div>
            
            <div className="col-lg-4 order-1 order-lg-1" >
            <div className="icons-add">
              <img src={props.imgnew3} className="img-fluid animation-about3" style={{width: '40%'}}/>
              </div>
          
            <div className="choose-us mt-4">
              <h6>{props.myabout5}</h6>
            </div>
            <div className="page-icon mt-2">
              <p>All our products have high usability<br></br> allowing users to easily<br></br>  operate the apps.</p>
            </div>
            </div>
            
          </div>
       
          
          </div>
         
          
        </div>
        
      </div>
     
    </section>
    <section>
     <div className="container-fluid">
       <div className="row mt-5">
         <div className="col-10 mx-auto">
           <div className="about-brand mt-5" style={{textAlign: 'center'}}>
             <h2>Trusted by Organizations Worldwide</h2>
           </div>
           <div className="row mt-5" >
             <div className="col-lg-3 order-1 order-lg-1" >
            <div className="brand-box justify-content-around flex-absolute left-0" id="icon-add" style={{width: '100%'}}>
            <img src={props.imgnew4} className="img-fluid" />
            </div>
             </div>
             <div className="col-lg-3 order-1 order-lg-1">
            <div className="brand-box" id="icon-add2">
            <img src={props.imgnew5} className="img-fluid" />
            </div>
             </div>
             <div className="col-lg-3 order-1 order-lg-1">
            <div className="brand-box" id="icon-add3">
            <img src={props.imgnew6} className="img-fluid" />
            </div>
             </div>
             <div className="col-lg-3 order-1 order-lg-1">
            <div className="brand-box" id="icon-add4">
            <img src={props.imgnew7} className="img-fluid" />
            </div>
             </div>
             
           </div>
         </div>
       </div>
     </div>
    </section>
    <section className="bg-contact">
      <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-10 mx-auto">
          <div className="row mt-5">
            <div className="col-lg-6 order-1 order-lg-1">
            <img src={props.imgnew8} className="img-fluid rounded-animatedd" />
            </div>
            <div className="col-lg-6 order-1 order-lg-1">
           <div className="contact-area d-flex justify-content-center">
             <h1>Get a <strong className="color-strong">Free</strong> Prototype of Your Future Website!</h1>
           </div>
           <p>Send your requirements for a website, we will<br></br>M research your specification, create a prototype of the<br></br> website for free and sed a result to you!</p>
           <form action="">
           <div className="row">
              <div className="col-lg-8 order-1 order-lg-1">
                <div className="name-txt mt-4">
                <input type="email" class="form-control form-control-2" name="email" placeholder="Your Email" required="required"/>
                </div>
              </div>
              <div className="col-sm-4 order-1 order-sm-1">
                <div className="btn-contact" style={{padding:'15.5%'}}>
                <input class="btn btn-default" type="submit" name="fld_1739855" id="fld_1739855_3" value="Go" data-field="fld_1739855"/>
                </div>
              </div>
            </div>
            </form>
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
export default Common1;


           