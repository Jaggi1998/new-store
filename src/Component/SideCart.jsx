import React from "react";


function SideCart(props){
    return(
        <>
         
        <div className={props.className}>
		<i className="fa-regular fa-circle-xmark  hide_Tab" onClick={props.onClick}></i>
		<div className="container cart_top">
		<div className="row">
		<div className="col-md-12">
<ul className="nav nav-pills mb-3 tab_side" id="pills-tab" role="tablist">
  <li className="nav-item cart_tab" role="presentation">
    <button className="nav-link cart_tab1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Cart_product" type="button" role="tab" aria-controls="Cart_product" aria-selected="true"><i className="fa-solid fa-cart-shopping"></i> Cart Product</button>
  </li>
  <li className="nav-item cart_tab" role="presentation">
    <button className="nav-link Fav_tab"  id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#fav_product" type="button" role="tab" aria-controls="fav_product" aria-selected="false"><i className="fa-solid fa-heart"></i> Favourite</button>
  </li>

</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show cart_product12 active" id="Cart_product" role="tabpanel" aria-labelledby="pills-home-tab">
		<div className="row">
			<div className="col-md-12">
            <div className="Cart_listGroup">
            <div className="cart_list">
	<div className="cancel_item">
		<a href="#"><i className="fa-regular fa-heart"></i></a> &nbsp;
		<a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
		</div>
	<div style={{display:'flex'}}>
		<div className="cart_tab_add">
		<img src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390796_960_720.jpg" width="100%"/>&nbsp;
		</div>
		<span><p className="p_cartlist" >Tamperature Logger </p>
		<p className="price_item">₹250 <span className="quantity_item">Quantity: 02</span></p> 
		
		</span>
		</div>
		<hr className="hr_side"/>
		<div className="hr_cart">
	
		<span className="price_total">Total ₹500</span>
	</div>
	</div>

    </div>

    <div className="sideCart_flex">
    <div className="sideCart_btn">
    <a href="/ViewCart" className="btn_4"><i className="fa-solid fa-cart-shopping"></i> View Cart</a>&nbsp;&nbsp;&nbsp;
    <a href="#" className="btn_4"><i className="fa-solid fa-credit-card"></i> Checkout</a> 
    </div>  </div>
		 </div>
		</div>
  </div>
  <div className="tab-pane fade fav_product" id="fav_product" role="tabpanel" aria-labelledby="pills-profile-tab">
    
  <div className="cart_list">
	<div className="cancel_item">
		<a href="#"><i className="fa-solid fa-heart"></i></a> &nbsp;
		<a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
		</div>
	<div style={{display:'flex'}}>
		<div className="cart_tab_add">
		<img src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390796_960_720.jpg" width="100%"/>&nbsp;
		</div>
		<span><p className="p_cartlist" >Tamperature Logger </p>
		<p className="price_item">₹250 <span className="quantity_item">Quantity: 02</span></p> 
		
		</span>
		</div>
		<hr className="hr_side"/>
		<div className="hr_cart">
	
		<span className="price_total">Total ₹500 12</span>
	</div>
	</div>
  </div>
</div>

</div></div></div>
	</div>
        </>
    )
}
export default SideCart;