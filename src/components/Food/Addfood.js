import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Navbaradmin from '../Navbaradmin';
import Title from '../Title';


class Addfood extends Component {

  constructor() {

    super();
  this.state = {

      Name: '',

      Price: '',

      available: '',

     
      formErrors: {}
    }
    this.Price = this.Price.bind(this);
   
    this.Name = this.Name.bind(this);
    this.available = this.available.bind(this);
    this.addfood = this.addfood.bind(this);

  }
  handleFormValidation() {    
    const {Name,available,  Price } = this.state;    
    let formErrors = {};    
    let formIsValid = true;  
        
    if (!Name) {    
        formIsValid = false;    
        formErrors["fnameErr"] = "Name is required.";    
    } 
    else if (!( /^[a-zA-Z0-9]+$/.test(Name))) {    
            formIsValid = false;    
            formErrors["fnameErr"] = "Invalid Name";    
          
    }   

    if (!Price) {    
        formIsValid = false;    
        formErrors["fpriceErr"] = "Price is required.";    
    } 
    else if (!( /^[0-9]+$/.test(Price))) {    
            formIsValid = false;    
            formErrors["fpriceErr"] = "Invalid Name";    
          
    }    
    


   
    

    this.setState({ formErrors: formErrors });    
    return formIsValid; 
}  
  
  Name(event) { 
    this.setState({ Name: event.target.value }) 
  }
  
  Price(event) {
    this.setState({ Price: event.target.value })
  }
  available(event) {
    this.setState({ available: event.target.value })
  }
 

  addfood(event) {
    event.preventDefault()
    if (this.handleFormValidation()) {    
           
      this.setState(this.initialState) 
      console.log(this.state);
    fetch('https://localhost:44353/Api/Food/Add', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({

        Name: this.state.Name,

        Price: this.state.Price,

        available: this.state.available,

      

      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status == 'Success'){

        alert('Item Added ')      
        this.props.history.push("/adminfood");
        }
        else if(Result.Status =="Error"){

          alert('Your item Already Exists')
        }
        else{
          alert('Cannot add')
        }
      })

  }
}

  render() {
    const { fnameErr, fpriceErr } = this.state.formErrors;
    return (

      <>
      <Navbaradmin/>
      <Title title="ADD FOOD"/>
       <Hero>
    <div class="login">    
    <form id="login" > 
    <label><b>Name    
        </b>    
        </label>    
        <input  onChange={this.Name} className={fnameErr ? ' showError' : ''} type="text" name="Uname" id="Uname" placeholder="ENTER FOOD NAME"/>    
        {fnameErr &&    
        <div style={{ color: "red"}}>{fnameErr}</div> } 
        <br/><br/>    
        <label><b>Price    
        </b>    
        </label>    
        <input onChange={this.Price} type="text" name="Uname" id="Uname" placeholder="ENTER PRICE"  className={fpriceErr ? ' showError' : ''}/>    
        {fpriceErr &&    
            <div style={{ color: "red"}}>{fpriceErr}</div>    
            } 
        <br/><br/>    
        <label><b>Status     
        </b>    
        </label>    
        <input onChange={this.available}  name="Pass" id="Pass" placeholder="ENTER STATUS"   />    
        
        <br/><br/>  
        
        <br/><br/>   
        <Button onClick={this.addfood} color="success" block className="btn-primary">ADD ITEM</Button>      
        <br/><br/>    
         
        <Link to='/adminfood' className="btn-primary">Cancel</Link>
           
        <br/><br/>    
         
    </form>   
</div> 
                      
 </Hero>   
      </>

    );

  }

}

export default Addfood;