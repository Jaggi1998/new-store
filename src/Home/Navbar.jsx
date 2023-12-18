import React from "react";
import $ from 'jquery'; 
import logo from '../assets/images/logo.png'
import SideCart from "../Component/SideCart";
function Navbar(){

  const handleClick = () => {
    const toggle = document.querySelector('.nav_menu');
    toggle.classList.toggle('nav-open');
  };

  const CartSide = () => {
    const toggle = document.querySelector('.sideBar');
    toggle.classList.toggle('sideShow');

    const toggle1 = document.querySelector('.overlay_bar');
    toggle1.classList.toggle('hide_overlay');

    const showFav = document.querySelector('.fav_product');
    showFav.classList.remove('active' ,  'show');

    const hideCart = document.querySelector('.cart_product12 ');
    hideCart.classList.add('active' ,  'show');

    const cart_tab = document.querySelector('.cart_tab1');
    cart_tab.classList.add('active');

    const fav_tab = document.querySelector('.Fav_tab');
    fav_tab.classList.remove('active');
  };

  const CartWish = () =>{
    const toggle = document.querySelector('.sideBar');
    toggle.classList.toggle('sideShow');
  
    const toggle1 = document.querySelector('.overlay_bar');
    toggle1.classList.toggle('hide_overlay');

    const showFav = document.querySelector('.fav_product');
    showFav.classList.add('active' ,  'show');

    const hideCart = document.querySelector('.cart_product12 ');
    hideCart.classList.remove('active' ,  'show');

    const cart_tab = document.querySelector('.cart_tab1');
    cart_tab.classList.remove('active');

    const fav_tab = document.querySelector('.Fav_tab');
    fav_tab.classList.add('active');
  }
      
    

$(window).on("scroll" , function() {    
  var scroll = $(window).scrollTop();
    if (scroll >= 1){
       $('.info_sec').slideUp(150);
      } 

    else{
      $(".info_sec").slideDown(150);
    }
});



return(
             <>
  <div className="overlay_bar" onClick={CartSide}></div>
          <SideCart className="sideBar" onClick={CartSide}/>
            <header className="header">
            <div className="info_sec">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
         <div className="info_ic info_mail">
        <a href="#"><span><i className="fa-solid fa-truck-fast"></i> Shipping all over India</span></a>

            </div>  
             </div>
            <div className="col-md-4">
            <div className="info_ic">
                <div style={{float:"right"}}>
                <a href="/Login"> <span><i className="fa-regular fa-user"></i> Register / <i className="fa-solid fa-right-to-bracket"></i> Sign In</span></a> 
             
            </div>   </div> </div>
        </div>
    </div></div>

    <div className="sec_1">
    <div className="container ">
        <div className="row">
            <div className="col-lg-2">
            <div className="header_top1">
          
          <a href="/"><img src={logo} width="83px"/></a>
            </div>
            </div>
            <div className="col-lg-7 order-lg-2 order-sm-3">
            <div className="header_top">
            <form className="form_1">
                <input className="input_1" type="text"/>
          <button className="btn_1"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div></div>

        <div className="col-lg-3 order-lg-3 order-sm-2 ">
        <div className="header_top"  style={{float:"right"}}>
            <div className="cart_add">
     <div className="wishList" onClick={CartWish} ><a href="#!" aria-expanded="false">
     <svg  viewBox="0 -960 960 960" fill="#ff0000" width="46"><path d="m480-175.346-22.077-20.885q-99.817-91.279-165.175-156.965-65.358-65.687-103.799-115.532t-53.118-89.927q-14.677-40.083-14.677-79.614 0-74.09 50.268-124.449 50.269-50.359 124.309-50.359 54.117 0 101.058 29.308 46.942 29.307 83.211 85.807 38.923-57.461 84.421-86.288 45.498-28.827 99.977-28.827 73.915 0 124.182 50.262 50.266 50.262 50.266 124.207 0 39.843-14.677 79.939-14.677 40.096-53.003 89.732-38.325 49.635-103.94 115.574-65.615 65.94-165.149 157.132L480-175.346Zm0-40.5q97.925-89.633 161.46-153.281 63.534-63.647 100.883-111.414t51.83-84.643q14.481-36.877 14.481-72.844 0-61.895-41.474-103.376-41.473-41.481-102.44-41.481-51.77 0-93.197 29.577-41.428 29.577-78.658 91.693h-26q-37.77-61.885-79.539-91.577-41.769-29.693-91.925-29.693-60.358 0-102.217 41.324-41.858 41.324-41.858 104.199 0 35.909 14.908 72.684 14.907 36.776 51.568 84.508 36.661 47.731 100.439 111.431Q382.038-305.038 480-215.846Zm0-283.962Z"/></svg>

        <div className="cart_1">
        <label>Wishlist</label><br/>
        <span>10</span>
        </div> </a>
        </div>

    <div className="cart_btn" onClick={CartSide}><a href="#!" aria-expanded="false">
        <svg  height="48" viewBox="0 -960 960 960" width="48"><path d="M215.961-121.154q-22.204 0-38.506-16.301-16.301-16.302-16.301-38.506v-452.924q0-22.204 16.301-38.506 16.302-16.302 38.506-16.302h109.462q0-64.692 44.231-109.634 44.231-44.943 108.423-44.943 64.998 0 110.749 44.962 45.751 44.962 45.751 109.615h109.462q22.204 0 38.506 16.302 16.301 16.302 16.301 38.506v452.924q0 22.204-16.301 38.506-16.302 16.301-38.506 16.301H215.961Zm0-30.192h528.078q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923v-452.924q0-9.231-7.692-16.923-7.693-7.692-16.923-7.692H215.961q-9.23 0-16.923 7.692-7.692 7.692-7.692 16.923v452.924q0 9.23 7.692 16.923 7.693 7.692 16.923 7.692Zm264.031-303.077q64.816 0 111.047-46.225 46.23-46.226 46.23-111.044h-30.192q0 52.577-37.712 89.827-37.711 37.25-89.442 37.25-51.731 0-88.981-37.241-37.25-37.24-37.25-89.836H323.5q0 64.807 45.838 111.038 45.839 46.231 110.654 46.231Zm-124.377-229.27h248.77q0-51.807-36.275-88.096-36.275-36.288-88.096-36.288-51.822 0-88.11 36.279-36.289 36.278-36.289 88.105ZM191.346-151.346V-653.5v502.154Z"/></svg>
        <div className="quantity_1">
        <span >10</span></div>
        <div className="cart_1">
        <label>Cart</label><br/>
        <span>₹100</span>
        </div>  </a>
        
        </div> 
         </div>
         </div>

        </div>
        </div>
    </div>  </div>

    <nav className="navbar navbar-expand-lg  navbar-light">
  <div className="container  nav_mob">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler nav_menu" onClick={handleClick}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span></span>
	<span></span> 
	<span></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item navbar_pad">
          <a className="nav-link nav_co  active" aria-current="page" href="/">HOME</a>
        </li>

        <li className="nav-item navbar_pad">
          <a className="nav-link nav_co" href="#">ABOUT US</a>
        </li>

        <li className="nav-item navbar_pad">
          <a className="nav-link nav_co" href="/ProductList">BEST SELLING</a>
        </li>
        <li className="nav-item navbar_pad dropdown">
          <a className="nav-link nav_co dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATAGIRES
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item navbar_pad">
          <a className="nav-link nav_co" href="/ContactUs">CONTACT US</a>
        </li>

        <li className="nav-item navbar_pad">
          <a className="nav-link nav_co" href="#">FAQ</a>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
</header><div className="top_1"></div>
            </>
    )
}

export default Navbar;