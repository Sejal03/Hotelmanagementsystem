import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Title from './Title';
import Navbarlogout from './LogoutNav';
import Banner from './Banner';
import Navbaradmin from './Navbaradmin';

  
export default class Customerlist extends Component {  
  
    constructor(props) {
        super(props)
    
        this.state = {
            error:null,
            Customerlist:[],
            Id:'',
            Name:'',
            Email:'',
            City:'',
      
            response:{}
            
        };
       
    this.Name = this.Name.bind(this);
    this.Id = this.Id.bind(this);
    this.Email = this.Email.bind(this);
    this.City = this.City.bind(this);
    this.deletecustomer = this.deletecustomer.bind(this);
    }

    Id(event) { 
      this.setState({ Id: event.target.value }) 
    }
    Name(event){
      this.setState({Name:event.target.value})
    }
   
    Email(event) {
      this.setState({ Email: event.target.value })
    }
    City(event) {
      this.setState({ City: event.target.value })
    }
    deletecustomer =(Id) =>{
        debugger;
        axios.delete('https://localhost:44353/Api/login/DeleteCustomer?Id='+Id)  
        .then((result) =>{
            window.location.reload();
          
        })
    }
    componentDidMount(){  
        axios.get( 'https://localhost:44353/Api/login/FetchUsers').then(response => response.data).then(  
             (result)=>{  
                 this.setState({  
                     Customerlist:result  
                 });  
             },  
             (error)=>{  
                 this.setState({error});  
             }  
         )  
     }  
    
    

    render() {
        
       
        const{Customerlist,error,deletecustomer} = this.state;
        if(error){
        return (
            <div>
                Error:{error.message}
            </div>
        )
    }
    else{
        return(
          <>
          <Navbaradmin/>
        <Hero>

            <Banner title="Admin Page">
            <Link className="btn-primary" to="/viewcustomer">View Customer List</Link>
            <Link className="btn-primary" to='/adminfood'>View Food Order</Link>
            <Link className="btn-primary" to='/Viewroombooking'>View Room Bookings</Link>
            <Link className="btn-primary" to='/Viewemployee'>View Employee</Link>
            </Banner>
        </Hero>
          
            <Title title="Customer List"/>
            <Hero>
          
            
              
            <table id="food">
            
                     
            <tr>
          <th>Customer Id</th>  <th >Name</th>  <th>Email</th><th>City</th>
               
              </tr>   
             
           
           
           {Customerlist.map(Customerlist => (  
              <tr key={Customerlist.Id}>  
                <td>{Customerlist.Id}</td>
                <td>{Customerlist.Name}</td>  
                <td>{Customerlist.Email}</td>  
                <td>{Customerlist.City}</td>
              <button className="btn-primary" onClick={() =>{if(window.confirm('Are you sure you want to delete this?')){this.deletecustomer(Customerlist.Id)}}}>Delete</button>
              </tr>   
            ))}  
            
        </table> 
           
                  </Hero>
                 
                  </>
        )
    }
    }
  }