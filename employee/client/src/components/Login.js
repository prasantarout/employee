import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://localhost:3000/api/login", this.state)
      .then(res => {
        if (res.data.error) {
          return this.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return this.setState({ valerrors: res.data.errors });
        }
        return (window.location = "/mainpage");
      });
  }
  render(){
    return (
     <>
      <div className="vh-100" >
        {this.state.error && <p>{this.state.error}</p>}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
    
                <h3 className="mb-5">Sign in</h3>
              
            
                <div className="form-outline mb-4"onSubmit={this.submitHandler}>
                
                  <input type="email" 
                  id="email"
                   onChange={this.changeHandler}
                   className="form-control form-control-lg" 
                   placeholder="Enter Email"/>
                   {" "}
                   {this.state.valerrors &&
                this.state.valerrors.email && (
               <p>{this.state.valerrors.email.msg}</p>
               )}
                 </div>
              <div className="form-outline mb-4">
             
              <input type="password" id="typePasswordX" 
                  onChange={this.changeHandler}
                  className="form-control form-control-lg"
                   placeholder="Enter password" /> 
                   {" "}
                   {this.state.valerrors &&
                    this.state.valerrors.password && (
                    <p>{this.state.valerrors.password.msg}</p>
                  )}
               </div>
               <Link to="/signup" className="link">Dont't have account!</Link>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
               
    
               
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }

}
export default Login;