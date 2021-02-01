import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login/Login.css'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Hero from './Hero';
import Navbar from './Navbar';
import Title from './Title';

class Adminlogin extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }

        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        
        fetch('https://localhost:44335/api/employee/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid'){
                    alert('Invalid User.If you are not employee please go to user login and try again');
                    
                    
                }
                else
                    this.props.history.push("/admin");
            })
    }

    render() {

        return (
            <>
           
               <Navbar/>     
               <Title title="Admin Login"></Title>          
            <Hero>
    <div class="login">    
    <form id="login" >    
        <label><b>Email    
        </b>    
        </label>    
        <input onChange={this.Email} type="text" name="Uname" id="Uname" placeholder="ENTER REGISTERED EMAIL"/>    
        <br/><br/>    
        <label><b>Password     
        </b>    
        </label>    
        <input onChange={this.Password} type="Password" name="Pass" id="Pass" placeholder="ENTER YOUR PASSWORD"/>    
        <br/><br/>    
        <Button onClick={this.login} color="success" block className="btn-primary">Login</Button>      
        <br/><br/>    
         
           
        <br/><br/>    
         
    </form>   
</div> 
                      
 </Hero>              
 
            


    </>
        );

    }

}

export default Adminlogin;