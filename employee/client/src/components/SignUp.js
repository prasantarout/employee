import React, { Component } from "react";
import axios from "axios";
import "../components/style/signup.css";
import {Link} from "react-router-dom";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file:" ",
      email: " ",
      firstname: "",
      dob:"",
      doj:"",
      password: "",
      password_con: "",
      userdata: null,
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
      // file:URL.createObjectURL(e.target.files[0]),
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://localhost:3000/api/register", this.state)
      .then(result => {
        if (result.data.errors) {
          return this.setState(result.data);
        }
        return this.setState({
          userdata: result.data,
          errors: null,
          success: true
        });
      });
  }
  render() {
    return (
      <>
      <div className="vh-100 gradient-custom">
      {this.state.success && <p>You are successfully registerated!</p>}
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign Up</h3>
            <form onSubmit={this.submitHandler}>
            <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label"for="uploadFile">Upload Image</label>
                    <input type="file" 
                    id="file"
                    onChange={this.changeHandler}
                    className="form-control form-control-lg"/>
                    {" "}
                  {this.state.errors &&
                  this.state.errors.file && (
                  <p>{this.state.errors.file.msg}</p>
                  )}
                  </div>
                  </div>
              <div className="row">
              
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label"for="firstName">First Name</label>
                    <input type="text" 
                    id="firstName"
                    onChange={this.changeHandler}
                    className="form-control form-control-lg"/>
                    {" "}
               {this.state.errors &&
               this.state.errors.firstname && (
              <p>{this.state.errors.firstname.msg}</p>
            )}
            </div>
                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label" for="lastName">Last Name</label>
                    <input type="text"
                     id="lastName"
                     onChange={this.changeHandler}
                     className="form-control form-control-lg" />
                     {this.state.errors &&
            this.state.errors.lastname && <p>{this.state.errors.lastname.msg}</p>}
                     </div>
              </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <label for="birthdayDate" className="form-label">Birthday</label>
                    <input
                      type="date"
                      onChange={this.changeHandler}
                      className="form-control form-control-lg"
                      id="birthdayDate"
                    />
                    {this.state.errors &&
                    this.state.errors.dob && <p>{this.state.errors.dob.msg}</p>}
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                <div className="form-outline datepicker w-100">
                    <label for="birthdayDate" className="form-label">DOJ</label>
                    <input
                      type="date"
                      onChange={this.changeHandler}
                      className="form-control form-control-lg"
                      id="birthdayDate"
                    />
                    {this.state.errors &&
                    this.state.errors.doj && <p>{this.state.errors.doj.msg}</p>}
                      </div>
                </div> 
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" for="emailAddress">Email</label>
                    <input type="email" 
                    id="emailAddress" 
                    onChange={this.changeHandler}
                    className="form-control form-control-lg" />
                 </div>
                 {this.state.errors &&
                    this.state.errors.email && <p>{this.state.errors.email.msg}</p>}

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" for="phoneNumber">Phone Number</label>
                    <input type="tel" 
                     onChange={this.changeHandler}
                    id="phoneNumber" 
                    className="form-control form-control-lg" />
                    </div>
                    {this.state.errors &&
                    this.state.errors.phone && <p>{this.state.errors.phone.msg}</p>}
                  </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                <label className="form-label" for="phoneNumber">Password</label>
                    <input type="password" 
                    id="password" 
                    onChange={this.changeHandler}
                    className="form-control form-control-lg" />
                    </div>
                    {this.state.errors &&
                    this.state.errors.password && <p>{this.state.errors.password.msg}</p>}
                 </div>
                 <div className="col-md-6 mb-4 pb-2">
                     <div className="form-outline">
                    <label className="form-label" for="phoneNumber">Confirm Password</label>
                      <input type="password" 
                      id="confirmpassword"
                      onChange={this.changeHandler}
                       className="form-control form-control-lg" />
                      </div>
                      {this.state.errors &&
                    this.state.errors.cnfpassword && <p>{this.state.errors.cnfpassword.msg}</p>}
                      </div>
                 </div>
               <div className="mt-4 pt-2">
               <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
               <Link to="/login" className="link">Login Here!</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
       </>
    );
  }
}

export default SignUp


