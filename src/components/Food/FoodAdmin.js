import './Food.css';
import CardItem from '../CardItem';
import {React ,Component } from 'react'
import axios from 'axios'
import Hero from '../Hero';
import {Table,Button} from 'react-bootstrap'
import Title from '../Title';
import Banner from '../Banner';
import Navbarlogout from '../LogoutNav';
import { Link } from "react-router-dom";
import Navbaradmin from '../Navbaradmin';


export default class Foodadmin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:null,
            foodlist:[],
            Food_Id:'',
            available:'',
            Name:'',
            Price:'',
           
            
            response:{}
            
        };
    this.available=this.available.bind(this);
    this.Food_Id = this.Food_Id.bind(this);
    this.Name = this.Name.bind(this);
    this.Price = this.Price.bind(this);
   
  
    
    
    }

    available(event){
        this.setState({available: event.target.value})
    }
    Food_Id(event) { 
      this.setState({ Food_Id: event.target.value }) 
      
    }
    Name(event){
      this.setState({Name:event.target.value})
    }
   
    Price(event) {
      this.setState({ Price: event.target.value })
    }
   
    componentDidMount(){  
        axios.get( 'https://localhost:44353/Api/Food/foodmenuadmin').then(response => response.data).then(  
             (result)=>{  
                 this.setState({  
                     foodlist:result 
                     
                 }); 
                 console.log(result)
             },  
             (error)=>{  
                 this.setState({error});  
             }  
         )  
     }  
    
     

    render() {
        const{foodlist,error} = this.state;
        
        console.log(foodlist);
        console.log(foodlist.Name);
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
          <Title title="Food Menu"/>
            <Hero >
              
            <table id="food">
            <Link to={"/addfood"} className="btn-primary">Add New Food Item</Link>
                     
            <tr>
           <th>Id</th> <th >Name</th> <th >Price</th>  
               
              </tr>   
             
           
           
            {foodlist.map(foodlist => (  
              <tr obj={foodlist} key={foodlist.Food_Id}>  
              
                <td>{foodlist.Food_Id}</td>
                <td>{foodlist.Name}</td>  
                <td>{foodlist.Price}</td>  
                <Link to={"/edit/"+foodlist.Food_Id} className="btn-primary">Edit</Link>
   
              </tr>  
            ))}  
            
           
        </table> 
           
                  </Hero>
                 
                  </>
        )
    }
    }
}