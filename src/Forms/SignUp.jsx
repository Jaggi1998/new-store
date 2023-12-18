import React from "react";

const ShowPassWord1 = () => {
    var x = document.getElementById("myInput1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const ShowPassWord2 = () => {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


function SignUp(){
    return(
        <>
            <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <p className="Sign_in_head">Sign in to your account</p>
              <form id="stripe-login">
              <div className="field padding-bottom--24 login_form">
                  <label ><i class="fa-solid fa-user"></i> Name</label>
                  <input type="email" name="name" placeholder="Enter your Name"  className="form-control"/>
                </div>

                <div className="field padding-bottom--24 login_form">
                  <label ><i class="fa-solid fa-envelope"></i> Email</label>
                  <input type="email" name="email" placeholder="Enter your Email"  className="form-control"/>
                </div>

                <div className="field padding-bottom--24 login_form">
                  <label ><i class="fa-solid fa-mobile"></i> Mobile Number</label>
                  <input type="number" name="mobile" placeholder="Enter your Mobile Number"  className="form-control"/>
                </div>
                <div className="field padding-bottom--24 login_form">
                  <div className="grid--50-50">
                    <label ><i class="fa-solid fa-lock"></i> Password</label>
                  </div>
                  <input type="password"  className="form-control" id="myInput1" placeholder="Enter your Password" name="password"/>
                  <i className="fa-solid fa-eye eye_show"  onClick={ShowPassWord1}></i>
                </div>

                <div className="field padding-bottom--24 login_form">
                  <div className="grid--50-50">
                    <label ><i class="fa-solid fa-lock"></i> Conform Password</label>
                  </div>
                  <input type="password"  className="form-control" id="myInput2" placeholder="Enter your conform Password" name="password"/>
                  <i className="fa-solid fa-eye eye_show"  onClick={ShowPassWord2}></i>
                </div>

                <div className="field padding-bottom--24">
                  <input type="submit" className="login_button" name="submit" value="Sign Up"/>
                </div>
                <div className="field">
                  <a className="ssolink" href="#" >If you have an account? Sign In</a>
                </div>
              </form>
            </div>
          </div>

        </div>
        </>
    )
}
export default SignUp;