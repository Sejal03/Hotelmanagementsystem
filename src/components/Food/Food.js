
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


export default class Food extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:null,
            foodmenu:[],
            Food_id:'',
            Name:'',
            Price:'',
           
      
            response:{}
            
        };
        this.Food_id = this.Food_id.bind(this);
    this.Name = this.Name.bind(this);
    this.Price = this.Price.bind(this);
   
    }

    Food_id(event) { 
      this.setState({ Food_id: event.target.value }) 
    }
    Name(event){
      this.setState({Name:event.target.value})
    }
   
    Price(event) {
      this.setState({ Price: event.target.value })
    }
   
    componentDidMount(){  
        axios.get( 'https://localhost:44353/Api/Food/foodmenu').then(response => response.data).then(  
             (result)=>{  
                 this.setState({  
                     foodmenu:result  
                 });  
             },  
             (error)=>{  
                 this.setState({error});  
             }  
         )  
     }  
    
    

    render() {
        const{foodmenu,error} = this.state;
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
          <Navbarlogout/>
          <Title title="Food Menu"/>
            <Hero >
              
            <table id="food">
            
                     
            <tr>
            <th >Name</th> <th >Price</th>  
               
              </tr>   
             
           
           
            {foodmenu.map(foodmenu => (  
              <tr key={foodmenu.Food_id}>  

                <td>{foodmenu.Name}</td>  
                <td>{foodmenu.Price}</td>  
                <td className="btn-primary" ><Link to={"/orderfood/" + foodmenu.Food_id}>Order</Link></td>
              </tr>  
            ))}  
           
        </table> 
           
                  </Hero>
                 
                  </>
        )
    }
    }
}


/* function Food() {
  return (
    <div className='cards'>
      <h1>Delicious Menu</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/room-4.jpeg'
              text='Relax at the personal mansion'
              label='Chill'
              path='/fillform'
            />
            <CardItem
              src='images/room-5.jpeg'
              text='Keep it bit separated'
              label='Luxury'
              path='/fillform'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/room-6.jpeg'
              text='A huge place where you can work as well'
              label='Work place'
              path='/fillform'
            />
            <CardItem
              src='images/room-7.jpeg'
              text='Family room '
              label='Family-time'
              path='/fillform'
            />
            <CardItem
              src='images/room-8.jpeg'
              text='A room with Bohemian touch'
              label='Boho-lover-paradise'
              path='/fillform'
            />
          </ul>
        </div>
      </div>
    </div>
  );
} */


