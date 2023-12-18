import React from "react";

const ShowPassWord = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function Login(){
    return(
        <>
            <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <p className="Sign_in_head">Sign in to your account</p>
              <form id="stripe-login">
                <div className="field padding-bottom--24 login_form">
                  <label ><i class="fa-solid fa-envelope"></i> Email</label>
                  <input type="email" name="email" placeholder="Enter your Email" className="form-control"/>
                </div>
                <div className="field padding-bottom--24 login_form">
                  <div className="grid--50-50">
                    <label><i class="fa-solid fa-lock"></i> Password</label>
            
                  </div>
   <input type="password"  className="form-control" id="myInput"  placeholder="Enter your Password" name="password"/>
   <i className="fa-solid fa-eye eye_show"  onClick={ShowPassWord}></i>
   <div className="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                </div>

                
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label>
                    <input type="checkbox" name="checkbox"/> Stay signed in for a week
                  </label>
                </div>
                
                <div className="field padding-bottom--24">
                  <input type="submit" className="login_button" name="submit" value="Sign In"/>
                </div>
                <div className="field">
                  <a className="ssolink" href="#" >Don't have an account? Sign up</a>
                </div>
              </form>
            </div>
          </div>

        </div>
        </>
    )
}
export default Login;