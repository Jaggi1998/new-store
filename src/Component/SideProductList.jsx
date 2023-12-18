import React from "react";

function SideProductList(){
    
    return( 
        <>
                    <div className="accordion sticky_tab" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">

      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Shop
      </button>

    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">

            <ul className="product_side_list">
                <li><a href="#!">Temperture Logger(3)</a></li>
                <li><a href="#!">Humidity Logger(2)</a></li>
                <li><a href="#!">Temperture Logger with Sansor(5)</a></li>
                <li><a href="#!">Water monitor(1)</a></li>
                <li><a href="#!">Energy Meter(30)</a></li>
                <li><a href="#!">Energy Meter with Screen(8)</a></li>
                <li><a href="#!">Soil Sansor(9)</a></li>
            </ul>

      </div>
    </div>
  </div>
  </div>
        </>
    )
}

export default SideProductList;