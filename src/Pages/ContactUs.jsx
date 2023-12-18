import React from "react";

function Contact(){
    return(
        <>
         <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-7">
                    <h2>Reach out to us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h1>Space for Google Map</h1>
                    </div>

                    <div className="col-md-5">
                        <div className="contact_form">
                            <h3>Contact Us</h3>
                            <hr/>
                            <p className="text-light">Fill out the form below to more Query!</p>
                        </div>
                        <div className="contact_filed">
                            <form>
                          <div className="form-group  mt-3">
                        <label>First Name</label>
                         <input type="text" className="form-control" placeholder="Enter your First Name"/>
                         </div>

                         <div className="form-group mt-3">
                        <label>First last</label>
                         <input type="text" className="form-control"  placeholder="Enter your First Last"/>
                         </div>

                         <div className="form-group  mt-3">
                        <label>Email</label>
                         <input type="text" className="form-control"  placeholder="Enter your First Email"/>
                         </div>

                         <div className="form-group  mt-3">
                        <label>Message</label>
                         <textarea type="text" className="form-control"  placeholder="Enter your First Message"/>
                         </div>
                         <div className="mt-3">
                       <input type="submit" value="Submit" className="btn_4" style={{width:"100%"}}/>
                       </div> 
                            </form>
                        </div>
                        </div>
                </div>
        </div>
        </>
    )
}
export default Contact;