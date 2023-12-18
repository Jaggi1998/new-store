import React from "react";
import Cart from '../Component/Cartbox'
import SideProductList from "../Component/SideProductList";
function ProductList(){
    return(
        <>
        <div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-12 mb-3">
        <span><a href="/" className="detail_nav"><i className="fa-solid fa-house" style={{color:"var(--websiteColor)"}}></i></a>
            <svg   viewBox="0 -960 960 960" width="20" style={{fill:"var(--websiteColor)"}}>
 <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg><a href="/ProductList" className="detail_nav"> Shop </a>  
            </span>
            <hr/>
            </div>
            
        <div className="col-lg-3">
            <SideProductList/>
            </div>

  <div className="col-lg-9 cart_responsive">
    <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-size">
        <Cart title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" className="discount"/>
        </div>
        <div className="col-lg-4 col-md-6  col-sm-6 col-6 col-size">
        <Cart title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" />
        </div>

        <div className="col-lg-4 col-md-6  col-sm-6 col-6 col-size">
        <Cart title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" className="discount"/>
        </div>

        <div className="col-lg-4 col-md-6  col-sm-6 col-6 col-size">
        <Cart title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" />
        </div>

        <div className="col-lg-4 col-md-6  col-sm-6 col-6 col-size">
        <Cart title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" />
        </div>

        <div className="col-lg-4 col-md-6  col-sm-6 col-6 col-size">
        <Cart title="Energy Meter" discrption="Lorem Ipsum is simply dummy text of the printing.."  oldprice="₹1400" discount="20% off" price="₹900 including GST @18%" />
        </div>
    </div>
  </div>
  </div>
</div>
        </>
    )
}
export default ProductList;