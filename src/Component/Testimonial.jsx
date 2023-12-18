import React from "react";

function Testimonial(props){
    
    return(
    <>
       <div className="testimonial">
      <div className="testimonial-content">
         <div className="testimonial-icon">
           <i className="fa fa-quote-left"></i>
              </div>
     <p className="description">
        {props.discrption}
            </p>
             </div>
         <h3 className="title"> {props.userName}</h3>
          <span className="post"> {props.Name}</span>
         </div>
    </>


    )
}

export default Testimonial;