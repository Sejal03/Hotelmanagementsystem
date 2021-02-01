import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';
import Hero from '../Hero';
import Navbar from '../Navbar';


class Reg extends Component {

  constructor() {

    super();
  this.state = {

      Name: '',

      City: '',

      Email: '',

      Password: '',
      formErrors: {}
    }
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.Name = this.Name.bind(this);
    this.City = this.City.bind(this);
    this.register = this.register.bind(this);

  }
  handleFormValidation() {    
    const {Name,Email,  City,  Password } = this.state;    
    let formErrors = {};    
    let formIsValid = true;  
        
    if (!Name) {    
        formIsValid = false;    
        formErrors["fnameErr"] = "Name is required.";    
    } 
    else if (!( /^[a-zA-Z]+$/.test(Name))) {    
            formIsValid = false;    
            formErrors["fnameErr"] = "Invalid Name";    
          
    }   

    //Email    
    if (!Email) {    
        formIsValid = false;    
        formErrors["emailIdErr"] = "Email id is required.";    
    }    
    else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(Email))) {    

        formIsValid = false;    
        formErrors["emailIdErr"] = "Invalid email id.";    
    }    

    if (!City) {    
        formIsValid = false;    
        formErrors["addressErr"] = "Address is required.";    
    } else if (!( /^[a-zA-Z]+$/.test(City))) {    
      formIsValid = false;    
      formErrors["addressErr"] = "Invalid City";    
    
} 

    if(!Password){
        formIsValid = false;
        formErrors["passErr"] = "Password is required";
    }
    else if (!(/^((?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,})+$/.test(Password))){
            formIsValid = false;
            formErrors["passErr"] = "Password is invalid! Password must be combination of atleast one uppercase letter,atleast one special character and atleast one number and must be atleast 8 character long";
            
        }
    

    this.setState({ formErrors: formErrors });    
    return formIsValid; 
}  
  
  Email(event) { 
    this.setState({ Email: event.target.value }) 
  }
  
  Password(event) {
    this.setState({ Password: event.target.value })
  }
  City(event) {
    this.setState({ City: event.target.value })
  }
  Name(event) {
    this.setState({ Name: event.target.value })
  }

  register(event) {
    event.preventDefault()
    if (this.handleFormValidation()) {    
           
      this.setState(this.initialState) 
      console.log(this.state);
    fetch('https://localhost:44353/Api/login/InsertEmployee', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({

        Name: this.state.Name,

        Password: this.state.Password,

        Email: this.state.Email,

        City: this.state.City,

      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status == 'Success'){

        alert('Registeration Successfull! Login to your account')      
        this.props.history.push("/Login");
        }
        else if(Result.Status =="AlreadyExists"){

          alert('Your Email Already Exists')
        }
        else{
          alert('Sorry, Unauthenticated user')
        }
      })

  }
}

  render() {
    const { fnameErr, emailIdErr,addressErr, passErr } = this.state.formErrors;
    return (

      <>
      <Navbar/>
       <Hero>
    <div class="login">    
    <form id="login" > 
    <label><b>Name    
        </b>    
        </label>    
        <input  onChange={this.Name} className={fnameErr ? ' showError' : ''} type="text" name="Uname" id="Uname" placeholder="ENTER NAME"/>    
        {fnameErr &&    
        <div style={{ color: "red"}}>{fnameErr}</div> } 
        <br/><br/>    
        <label><b>Email    
        </b>    
        </label>    
        <input onChange={this.Email} type="text" name="Uname" id="Uname" placeholder="ENTER EMAIL"  className={emailIdErr ? ' showError' : ''}/>    
        {emailIdErr &&    
            <div style={{ color: "red"}}>{emailIdErr}</div>    
            } 
        <br/><br/>    
        <label><b>Password     
        </b>    
        </label>    
        <input onChange={this.Password} type="Password" name="Pass" id="Pass" placeholder="ENTER PASSWORD"  className={passErr ? ' showError' : ''} />    
        {passErr &&    
        <div style={{ color: "red" }}>{passErr}</div>} 
        <br/><br/>  
        <label><b>City    
        </b>    
        </label>    
        <input onChange={this.City} type="text" name="Uname" id="Uname" placeholder="ENTER YOUR CITY" className={addressErr ? ' showError' : ''}/>    
        {
                addressErr &&    
                <div style={{ color: "red" }}>{addressErr}</div>    
            }
        <br/><br/>   
        <Button onClick={this.register} color="success" block className="btn-primary">Create Account</Button>      
        <br/><br/>    
         
        <h6> Already have an account?<Link to="/login"> Login</Link></h6>
           
        <br/><br/>    
         
    </form>   
</div> 
                      
 </Hero>   
      </>

    );

  }

}

export default Reg;