import {useState} from "react";

function ViewCart(){

  const min = 0;
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
      setCount(count + 1);
      };

      const DecrementCount = () =>{
        const value = Math.max(min, Math.min(count - 1));
        setCount(value);
      }

    return(
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-8">
        <h5 className="fw-bold">My shopping Bag (4 item)</h5>
        <h5 className="fw-bold" style={{float:"right" , marginTop:"-35px"}}>Total: ₹145</h5>
            <div className="car_dev">
                <div className="row">
                 <div className="col-lg-3">
                 <div className="view_Cart">
        <img src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390796_960_720.jpg" width="100%"/>
            </div>
                 </div>
              <div className="col-lg-9">
              <div className="price_Cart">
              <h3 className="price_cartmain">₹900</h3>
              <spam>₹150 </spam><spam className="dicount_off"><i>15% off</i></spam>
              </div>
            <h5 className="fw-bold">Tamperture Logger</h5>
            <p style={{marginBottom:"0px"}}>Men white slim fit solid causal shirt</p>
            <spam className="cart_quantity">Quantity({count})</spam>
            <div className="mt-2" style={{display:"flex"}}>
                    <button className="count_btn cart_view_add" onClick={DecrementCount}><i className="fa-solid fa-minus"></i></button> 
                 <spam className="form-control count_box cart_box_add">{count}</spam>
                 <button className="count_btn cart_view_add"  onClick={incrementCount}><i className="fa-solid fa-plus"></i></button> 
                </div>
                <p className="mt-1">Estimated delivery by 5 Aug 2021</p>
              </div>
              <hr/>
              <a href="#" style={{color:"#ff0000"}}><i class="fa-solid fa-trash"></i> Remove</a>
                </div>
            </div>

            <div className="car_dev">
                <div className="row">
                 <div className="col-lg-3">
                 <div className="view_Cart">
        <img src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390796_960_720.jpg" width="100%"/>
            </div>
                 </div>
              <div className="col-lg-9">
              <div className="price_Cart">
              <h3 className="price_cartmain">₹900</h3>
              <spam>₹150 </spam><spam className="dicount_off"><i>15% off</i></spam>
              </div>
            <h5 className="fw-bold">Tamperture Logger</h5>
            <p style={{marginBottom:"0px"}}>Men white slim fit solid causal shirt</p>
            <spam className="cart_quantity">Quantity({count})</spam>
            <div className="mt-2" style={{display:"flex"}}>
                    <button className="count_btn cart_view_add" onClick={DecrementCount}><i className="fa-solid fa-minus"></i></button> 
                 <spam className="form-control count_box cart_box_add">{count}</spam>
                 <button className="count_btn cart_view_add"  onClick={incrementCount}><i className="fa-solid fa-plus"></i></button> 
                </div>
                <p className="mt-1">Estimated delivery by 5 Aug 2021</p>
              </div>
              <hr/>
              <a href="#" style={{color:"#ff0000"}}><i class="fa-solid fa-trash"></i> Remove</a>
                </div>
            </div>

                </div>

                <div className="col-lg-4">
                <div className="car_dev sticky_pricebox">
             <h4 className="fw-bold mb-3">Product Details (1 item)</h4>
             <div className="mb-2">
             <spam>Total MRP</spam>     
             <spam className="float">₹350</spam><br/>
                </div>

                <div className="mb-2">
             <spam>Discount on MRP</spam>     
             <spam className="float">-₹150</spam><br/>
             </div>

             <div className="mb-2">
             <spam>Shipping charge</spam>   
               <spam className="float">₹60</spam><br/>
               </div>
            <hr/>
            <spam>Total Amount</spam>     <spam className="float">₹960</spam><br/>
            <button className="btn_2 btn_5">Checkout</button>
                </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default ViewCart;