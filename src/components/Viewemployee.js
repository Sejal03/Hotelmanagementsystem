import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';
import Navbaradmin from './Navbaradmin';
import Hero from './Hero';
import Title from './Title';
import Banner from './Banner';


  
export default class Viewemployee extends Component {  
  
    constructor(props) {
        super(props)
    
        this.state = {
            error:null,
            Employee:[],
            Id:'',
            EmployeeName:'',
            Email:'',
            City:'',
            Department:'',
      
            response:{}
            
        };
       
    this.EmployeeName = this.EmployeeName.bind(this);
    this.Id = this.Id.bind(this);
    this.Email = this.Email.bind(this);
    this.City = this.City.bind(this);
    this.Department = this.Department.bind(this);
    this.deleteemployee = this.deleteemployee.bind(this);
    }

    Id(event) { 
      this.setState({ Id: event.target.value }) 
    }
    EmployeeName(event){
      this.setState({EmployeeName:event.target.value})
    }
   
    Email(event) {
      this.setState({ Email: event.target.value })
    }
    City(event) {
      this.setState({ City: event.target.value })
    }
    Department(event){
        this.setState({Department:event.target.value})
    }
    deleteemployee =(Id) =>{
        
        axios.delete('https://localhost:44335/api/employee/Delete?Id='+Id)  
        .then((result) =>{
            window.location.reload();
          
        })
    }
    componentDidMount(){  
        axios.get( 'https://localhost:44335/api/employee/list').then(response => response.data).then(  
             (result)=>{  
                 this.setState({  
                     Employee:result  
                 });  
             },  
             (error)=>{  
                 this.setState({error});  
             }  
         )  
     }  
    
    

    render() {
        
       
        const{Employee,error,deleteemployee} = this.state;
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
          
            <Title title="Employee"/>
            <Link to="/addemp" className="btn-primary">Add new employee</Link>
            <Hero>
          
            
              
            <table id="food">
            
                     
            <tr>
          <th>Id</th>  <th >Name</th>  <th>Email</th><th>City</th> <th>Department</th>
               
              </tr>   
             
           
           
           {Employee.map(Employee => (  
              <tr key={Employee.Id}>  
                <td>{Employee.Id}</td>
                <td>{Employee.EmployeeName}</td>  
                <td>{Employee.Email}</td>  
                <td>{Employee.City}</td>
                <td>{Employee.Department}</td>
              <button className="btn-primary" onClick={() =>{if(window.confirm('Are you sure you want to delete this?')){this.deleteemployee(Employee.Id)}}}>Delete</button>
             <button> <Link to={"/Updateemployee/"+Employee.Id} className="btn-primary">Edit</Link></button>
              </tr>   
            ))}  
            
        </table> 
           
                  </Hero>
                 
                  </>
        )
    }
    }
  }