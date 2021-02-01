import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Title from './Title';
import Navbarlogout from './LogoutNav';
import Banner from './Banner';
import Navbaradmin from './Navbaradmin';

  
export default class Viewroombooking extends Component {  
  
    constructor(props) {
        super(props)
    
        this.state = {
            error:null,
            Customerlist:[],
            Room_id:'',
            Name:'',
            Email:'',
            StartDate:'',
            EndDate:'',
      
            response:{}
            
        };
       
    this.Name = this.Name.bind(this);
    this.Room_id = this.Room_id.bind(this);
    this.Email = this.Email.bind(this);
    this.StartDate = this.StartDate.bind(this);
    this.EndDate = this.EndDate.bind(this);
    this.deletecustomer = this.deletecustomer.bind(this);
    }

    Room_id(event) { 
      this.setState({ Room_id: event.target.value }) 
    }
    Name(event){
      this.setState({Name:event.target.value})
    }
   
    Email(event) {
      this.setState({ Email: event.target.value })
    }
    StartDate(event) {
      this.setState({ StartDate: event.target.value })
    }
    EndDate(event){
        this.setState({EndDate:event.target.value})
    }
    deletecustomer =(Email) =>{
        debugger;
        axios.delete('https://localhost:44353/Api/RoomBooking/Delete?Email='+Email)  
        .then((result) =>{
            window.location.reload();
          
        })
    }
    componentDidMount(){  
        axios.get( 'https://localhost:44353/Api/RoomBooking/fetchcustomerbooking').then(response => response.data).then(  
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
          
            <Title title="Booking Details"/>
            <Hero>
          
            
              
            <table id="food">
            
                     
            <tr>
          <th>Customer Id</th>  <th >Name</th>  <th>Email</th><th>Start Date</th> <th>End Date</th>
               
              </tr>   
             
           
           
           {Customerlist.map(Customerlist => (  
              <tr key={Customerlist.Room_id}>  
                <td>{Customerlist.Room_id}</td>
                <td>{Customerlist.Name}</td>  
                <td>{Customerlist.Email}</td>  
                <td>{Customerlist.StartDate}</td>
                <td>{Customerlist.EndDate}</td>
              <button className="btn-primary" onClick={() =>{if(window.confirm('Are you sure you want to delete this?')){this.deletecustomer(Customerlist.Email)}}}>Delete</button>
              </tr>   
            ))}  
            
        </table> 
           
                  </Hero>
                 
                  </>
        )
    }
    }
  }