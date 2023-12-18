import React from "react";
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import Card from "../Component/Cartbox";
import Testimonial from "../Component/Testimonial";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



          
function Index(){

    const options = {
        responsiveClass: true,
        dots: false,
        autoplay: true,
        navText:["<div class='nav-btn prev-slide'><span class='carousel-control-prev-icon owl_prev'></span></div>","<div class='nav-btn next-slide'><span class='carousel-control-next-icon owl_prev'></span></div>"],
        smartSpeed: 1000,
        responsive: {
            0: {    
                items: 2,
            },
            500: {
                items: 2,
            },

            991: {
                items: 3,
            },

            1000: {
                items: 4,
            }
        },
    };

    
    const testimonial = {
        responsiveClass: true,
        dots: false,
        autoplay: true,
        smartSpeed: 500,
        responsive: {
            0: {    
                items: 1,
            },
    
            991: {
                items: 2,
            },

            1000: {
                items: 3,
            }
        },
    };
    return(
            <>
  <div id="carouselExampleControls" className="carousel slide sider_1" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  src={banner2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  src={banner3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
</div>

        <div className="container div_form pb-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
              <div className="form_2 pt-4 pb-5">
                <h3 className="text-center pb-4 text-white fw-bold">FIND A PRODUCT</h3>
                <form>
                <div className="row">
                <div className="col-lg-5 mb-2">
                   <select className="form-select">
                    <option>Select a category</option>
                    <option>1</option>
                   </select>
                   </div>

                   <div className="col-lg-5 mb-2">
                   <select className="form-select">
                    <option>By Model</option>
                    <option>1</option>
                   </select>
              </div>     

                 <div className="col-lg-2">
                <input type="submit" className="btn_2" value="Submit"/>
              </div>    
              </div>
              </form>
              </div>
                </div>
            </div>
        </div>

        <div className="container mb-4">
            <h2 className="text-center fw-bold mb-5">Product Catagires</h2>
            <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="cata_hover">
               <a href="#">
                 <div className="cata_log">
     <img src="https://cdn.pixabay.com/photo/2023/05/16/10/53/technology-7997259_960_720.jpg" alt=".." width="100%"/>        
                </div>
                <h6 className="cata_head fw-bold">Humidity Loggers</h6>
        </a>
            </div></div>  
            <div className="col-lg-3 col-md-6">
            <div className="cata_hover">
               <a href="#"> <div className="cata_log">
      <img src="https://cdn.pixabay.com/photo/2023/05/16/10/53/technology-7997259_960_720.jpg" alt=".." width="100%"/>        
                </div>
            <h6 className="cata_head fw-bold">Temperature Loggers</h6></a>
            </div>  </div>

            <div className="col-lg-3 col-md-6">
            <div className="cata_hover">
               <a href="#"> <div className="cata_log">
      <img src="https://cdn.pixabay.com/photo/2023/05/16/10/53/technology-7997259_960_720.jpg" alt=".." width="100%"/>        
                </div>
            <h6 className="cata_head fw-bold">Sencers</h6></a>
            </div>  </div>
            <div className="col-lg-3 col-md-6">
            <div className="cata_hover">
               <a href="#"> <div className="cata_log">
     <img src="https://cdn.pixabay.com/photo/2023/05/16/10/53/technology-7997259_960_720.jpg" alt=".." width="100%"/>        
                </div>
            <h6 className="cata_head fw-bold">CCTV</h6></a>
            </div> 
             </div> </div>
            </div>

            <div className="product_sec mt-5">
                <div className="container">
                <div>
						<h3 className="text-center feature_product">Featured Product</h3>
						<h2 className="text-center fw-bold">Popular Products</h2>
                         <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
                    <div className="row">
                    <div className="col-md-12">

            
                    <OwlCarousel className='owl-theme mt-4' loop  nav  {...options} >
                        <div className='item'>
                        <Card title="Temperature Logger" discrption="Lorem Ipsum is simply dummy text of the printing.." discount="15% off" oldprice="₹1500" price="₹800 including GST @18%" className="discount"/>
                          </div>
                     <div className='item'>
                     <Card title="Humidity Logger" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1200" price="₹700 including GST @18%"/>
                         </div>
                         <div className='item'>
                         <Card title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" className="discount"/>
                             </div>

                             <div className='item'>
                         <Card title="Sensors" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹3000" price="₹2000 including GST @18%"/>
                             </div>
                    </OwlCarousel>

                    </div>

                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                 <div className="col-lg-3">
                    <h3 className="product_list">96</h3>
                    <p  className="product_list_p">Catagories</p>
                 </div>

                 <div className="col-lg-3">
                 <h3 className="product_list">800</h3>
                    <p  className="product_list_p">Products</p>      
                </div>

                 <div className="col-lg-3">
                 <h3 className="product_list">350+</h3>
                    <p  className="product_list_p">Resellers</p>
                 </div>

                 <div className="col-lg-3">
                 <h3 className="product_list">15+</h3>
                    <p  className="product_list_p">Countries </p>
                 </div>
                </div>
            </div>


            <div className="product_sec mt-4">
                <div className="container">
                <div>
						<h2 className="text-center fw-bold">New Products</h2>
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>
                    <div className="row">
                    <div className="col-md-12">

            
                    <OwlCarousel className='owl-theme mt-4' loop  nav  {...options} >
                        <div className='item'>
                        <Card title="Temperature Logger" discrption="Lorem Ipsum is simply dummy text of the printing.." discount="15% off" oldprice="₹1500" price="₹800 including GST @18%" className="discount"/>
                          </div>
                     <div className='item'>
                     <Card title="Humidity Logger" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1200" price="₹700 including GST @18%"/>
                         </div>
                         <div className='item'>
                         <Card title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" className="discount"/>
                             </div>

                             <div className='item'>
                         <Card title="Sensors" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹3000" price="₹2000 including GST @18%"/>
                             </div>
                    </OwlCarousel>

                    <OwlCarousel className='owl-theme' loop  nav  {...options} >
                        <div className='item'>
                        <Card title="Temperature Logger" discrption="Lorem Ipsum is simply dummy text of the printing.." discount="15% off" oldprice="₹1500" price="₹800 including GST @18%" className="discount"/>
                          </div>
                     <div className='item'>
                     <Card title="Humidity Logger" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1200" price="₹700 including GST @18%"/>
                         </div>
                         <div className='item'>
                         <Card title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" className="discount"/>
                             </div>

                             <div className='item'>
                         <Card title="Sensors" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹3000" price="₹2000 including GST @18%"/>
                             </div>
                    </OwlCarousel>

                    </div>

                    </div>
                </div>
            </div>


            <div className="mt-5 mb-4">
                <div className="container">
                <div>

						<h2 className="text-center fw-bold">Our Testimonial</h2>
                         <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry  <br/>printing and typesetting industry.</p>
						</div>
                    <div className="row">
                    <div className="col-md-12">

            
                    <OwlCarousel className='owl-theme mt-4' loop  nav  {...testimonial} >
                        <div className='item'>
                            <Testimonial discrption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula."  userName="@John21" Name="Johan"/>
                          </div>
                     <div className='item'>
        
                     <Testimonial discrption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula ."  userName="@Alex22" Name="Alex"/>
              
                    </div>
                       
                         <div className='item'>
                         <Testimonial discrption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula."  userName="@Exmple1" Name="Exmple"/>
                             </div>

                             <div className='item'>
                             <Testimonial discrption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula."  userName="@John21" Name="Johan"/>
                             </div>
                    </OwlCarousel>

                    </div>

                    </div>
                </div>
            </div>

    

            </>
    )
}

export default Index;