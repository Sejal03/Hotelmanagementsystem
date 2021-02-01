import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';
import Hero from './Hero';
import Navbaradmin from './Navbaradmin';
import Title from './Title';




class Addemployee extends Component {

  constructor() {

    super();
  this.state = {
    Id:'',
    EmployeeName:'',
    Password:'',
    Email:'',
    City:'',
    Department:'',
      formErrors: {}
    }
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.City = this.City.bind(this);
    this.Department=this.Department.bind(this);
    this.addemp = this.addemp.bind(this);

  }
  handleFormValidation() {    
    const {EmployeeName,Email,  City,  Password,Department } = this.state;    
    let formErrors = {};    
    let formIsValid = true;  
        
    if (!EmployeeName) {    
        formIsValid = false;    
        formErrors["fnameErr"] = "Name is required.";    
    } 
    else if (!( /^[a-zA-Z]+$/.test(EmployeeName))) {    
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
if (!Department) {    
    formIsValid = false;    
    formErrors["depterr"] = "Address is required.";    
} else if (!( /^[a-zA-Z]+$/.test(Department))) {    
  formIsValid = false;    
  formErrors["detperr"] = "Invalid Department";    

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
  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value })
  }
  Department(event) {
    this.setState({ Department: event.target.value })
  }
  addemp(event) {
    event.preventDefault()
    if (this.handleFormValidation()) {    
           
      this.setState(this.initialState) 
      console.log(this.state);
    fetch('https://localhost:44335/api/employee/add', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({

        EmployeeName: this.state.EmployeeName,

        Password: this.state.Password,

        Email: this.state.Email,

        City: this.state.City,
        Department:this.state.Department

      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status == 'Success'){

        alert('Add Successfull! Login to your account')      
        this.props.history.push("/Viewemployee");
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
    const { fnameErr, emailIdErr,depterr, passErr, addressErr} = this.state.formErrors;
    return (

      <>
      <Navbaradmin/>
      <Title title="Add Employee"/>
       <Hero>
        
    <div class="login">    
    <form id="login" > 
    <label><b>Name    
        </b>    
        </label>    
        <input  onChange={this.EmployeeName} className={fnameErr ? ' showError' : ''} type="text" name="Uname" id="Uname" placeholder="ENTER EMPLOYEE NAME"/>    
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
        <label><b>Department    
        </b>    
        </label>    
        <input onChange={this.Department} type="text" name="Uname" id="Uname" placeholder="ENTER DEPARTMENT" className={depterr ? ' showError' : ''}/>    
        {
                depterr &&    
                <div style={{ color: "red" }}>{depterr}</div>    
            }
        <br/><br/> 
        <Button onClick={this.addemp} color="success" block className="btn-primary">Add Employee</Button>      
        <br/><br/>    
         
       <Link to="Viewemployee" className="btn-primary">Cancel</Link>   
         
    </form>   
</div> 
                      
 </Hero>   
      </>

    );

  }

}

export default Addemployee;