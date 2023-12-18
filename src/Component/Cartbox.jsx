import React from "react";

function Card(props){

    return(
        <section className="section-products">
            
        <div id="product-1" className="single-product">
      <div className="card_img">
       <a href="/ProductDetail">
            <img className="product_1" src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390796_960_720.jpg" width="100%"/>
            <img className="product_2" src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390799_960_720.jpg" width="100%"/>
            </a>
        <span className={props.className}>{props.discount}</span>
                <ul>
      <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart" ><i className="fas fa-shopping-cart"></i></a></li>
            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
         <li><a href="/ProductDetail" data-bs-toggle="tooltip" data-bs-placement="top" title="View More"><i className="fa-solid fa-circle-info"></i></a></li>
                </ul>
        </div>
        <div className="part-2">
                <small>{props.discrption}</small>
               <h3 className="product-title fw-bold">{props.title}</h3>
              <h4 className="product-old-price"><s>{props.oldprice}</s></h4>
           <h4 className="product-price fw-bold">{props.price}</h4>
        </div>
</div>

</section>
    )
}

export default Card;