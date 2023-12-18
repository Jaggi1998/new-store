import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
function Form(){
    return(
        <>
      <div className="Login_back">
              <div className="container top_ligin mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-12">
      <ul className="nav nav-pills sign_tab mb-3" id="pills-tab" role="tablist">
  <li className="nav-item signPage_1" role="presentation">
    <button className="nav-link active" id="Login_form" data-bs-toggle="pill" data-bs-target="#Login" type="button" role="tab" aria-controls="Login" aria-selected="true"><i className="fa-solid fa-right-to-bracket"></i> Sign In</button>
  </li>
  <li className="nav-item signPage_1" role="presentation">
    <button className="nav-link" id="Register_form" data-bs-toggle="pill" data-bs-target="#Register" type="button" role="tab" aria-controls="Register" aria-selected="false"><i className="fa-regular fa-user"></i> Register</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="Login" role="tabpanel" aria-labelledby="Login_form">
  <Login/>
  </div>
  <div className="tab-pane fade" id="Register" role="tabpanel" aria-labelledby="Register_form">
   <SignUp/>
  </div>

</div>
</div>
</div></div>
</div>

        </>
    )
}
export default Form;