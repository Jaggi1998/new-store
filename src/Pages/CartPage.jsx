import React, { useState } from "react";
import Produtimg from "../Component/ProductDetailimg";
import CommentBox from "../Component/CommentBox";
import Card from '../Component/Cartbox';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';
function CartPage(){

  const min = 0;
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
      setCount(count + 1);
      };

      const DecrementCount = () =>{
        const value = Math.max(min, Math.min(count - 1));
        setCount(value);
      }

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
                items: 5,
            }
        },
    };

    
    return(
        <>
       <div className="container mt-5">
            <div className="row">
            <div className="col-md-12 mb-3">
            <span><a href="/" className="detail_nav"><i className="fa-solid fa-house" style={{color:"var(--websiteColor)"}}></i></a>
            <svg   viewBox="0 -960 960 960" width="20" style={{fill:"var(--websiteColor)"}}>
 <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg><a href="/ProductList" className="detail_nav"> Shop </a>  
 <svg   viewBox="0 -960 960 960" width="20" style={{fill:"var(--websiteColor)"}}>
  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg> Tamperture Logger
              </span>
            <hr/>
            </div>
                <div className="col-lg-5">
                <Produtimg/>
                </div>
                <div className="col-lg-7">
                <h1 className="fw-bold">Tamperture Logger</h1><br/>
                <spam className="price_tag_product"><s>₹8000.00</s></spam>
                <h2 className="fw-bold">₹6,821.00 including GST @18%</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                <spam>Categories: 
                <spam> <a href="#" className="cata_product12">Data Logger</a></spam>, <spam ><a href="#" className="cata_product12">Solar Tools</a></spam> , <spam><a href="#" className="cata_product12">Temperature and Humidity Data Logger</a></spam>,<spam><a href="#" className="cata_product12"> Temperature and Humidity Meter</a></spam>, <spam><a href="#" className="cata_product12"> Thermo-hygro Meter</a></spam><a href="#" className="cata_product12"> Thermo-hygro Meter</a></spam>
                <hr/>

                <div style={{display:"flex"}}>
                    <div className="" style={{display:"flex"}}>
                    <button className="count_btn" onClick={DecrementCount}><i className="fa-solid fa-minus"></i></button> 
                 <spam className="form-control count_box">{count}</spam>
                 <button className="count_btn"  onClick={incrementCount}><i className="fa-solid fa-plus"></i></button> 
        
                </div>
              
                &nbsp;&nbsp;
                <button className="btn_4"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
              </div>
              <hr/>
              </div>

              
            </div>
       </div>

       <div className="container">
        <div className="row">
            <div className="col-md-12"></div>
            <nav>
  <div className="nav nav-tabs product_detail_tab" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description </button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#Description" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Specifications</button>
    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Video" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Video</button>

    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Comments" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Comments</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div className="top_product_page">
 <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></div>
    </div>

  <div className="tab-pane fade" id="Description" role="tabpanel" aria-labelledby="nav-profile-tab">
  <div className="top_product_page">
  <table className="table table-striped">
  <thead>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Model</th>
      <td>DL-TH-01</td>
    </tr>
    <tr>
      <th scope="row">Warranty</th>
      <td>One year against manufacturing defects</td>

    </tr>
    <tr>
      <th scope="row">Display</th>
      <td>LCD</td>
    </tr>

    <tr>
      <th scope="row">Humidity Range</th>
      <td>0%RH to 100%RH</td>
    </tr>

    <tr>
      <th scope="row">Accuracy</th>
      <td>±3%</td>
    </tr>

    <tr>
      <th scope="row">Temperature Range</th>
      <td>-40°C to 70°C</td>
    </tr>

  </tbody>
</table>
    </div>
    </div>

  <div className="tab-pane fade" id="Video" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div className="top_product_page">
        <h1>For Video</h1>
    </div>
    </div>

  <div className="tab-pane fade" id="Comments" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div className="top_product_page col-md-8">
  <form className="pb-3">
 <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control"></textarea>
        <div style={{float:"right"}}>
    <input type="submit" value="Comment" className="btn_4 mt-2"/>
    </div>
            </form>
            <hr className="mt-5"/>
        <CommentBox name="Alex" username="Alex123" comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," className="fa-solid fa-pen-to-square edit" className1="fa-solid fa-trash delete"/>

        <CommentBox name="Nanncy" username="Nanncy23" comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/>
        
    </div> 
    </div>

</div>
        </div>
       </div>

       <div className="container mt-5">
        <div className="row">
            <div className="col-md-12 Related_product">
            <h2 className="fw-bold">Related products</h2>
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
        </>
    )
}

export default CartPage;