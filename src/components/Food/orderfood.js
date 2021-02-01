import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  

import Title from '../Title';
import Navbaradmin from '../Navbaradmin';
import Hero from '../Hero';
 
class orderfood extends React.Component {  
    constructor(props) {  
        super(props)  
     
   
    this.onChangeName = this.onChangeName.bind(this);  
    this.onChangePrice= this.onChangePrice.bind(this);
    this.onChangeRoom_no=this.onChangeRoom_no.bind(this);
     
     
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Food_Id: '',
            Name:'',  
           Price:'',
           Room_no:'',
           
              
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('https://localhost:44335/Api/Food/foodbyid/?Food_Id='+this.props.match.params.Food_Id)  
          .then(response => {  
              this.setState({   
                Name: response.data.Name,   
                
                Price: response.data.Price,
                Password:response.data.Password,
                Name:response.data.Name,
               

                });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeName(e) {  
    this.setState({  
       Name : e.target.value  
    });  
  }  
  onChangePrice(e) {  
    this.setState({  
        Price: e.target.value  
    });    
  }  
  onChangeRoom_no(e) {  
    this.setState({  
        Room_no: e.target.value  
    });    
  }  
 
  
  onSubmit(e) {  
     
    e.preventDefault();  
    const obj = {  
        Food_id:this.props.match.params.Food_id,  
      Name: this.state.Name,  
      Price: this.state.Price,  
      Room_no: this.state.Room_no, 
     
       
  
    };  
    axios.post('https://localhost:44335/Api/Food/insertfood/', obj)  
        .then(res => console.log(res.data));  
        
        this.props.history.push('/food')  
  }  
    render() {  
        return (  
            <>
            <Navbaradmin/>
            <Title title="Place Order"></Title>
            <Hero>
            
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Item Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}  
                                placeholder="Enter Food Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Price</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="RollNo" value={this.state.Price} onChange={this.onChangePrice} placeholder="Enter Price" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Room No</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.Room_no} onChange={this.onChangeRoom_no} placeholder="Enter Room no" />  
                            </Col>  
                        </FormGroup> 
                       

                            
                    </Col>  
                    <br/>
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit"  className="btn-primary">Submit</Button>{' '}  
                            </Col>  
                            <br/>
                            <Col sm={1}>  
                                <Button  className="btn-primary">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
              
            </Hero>
            </>
        );  
    }  
  
}  
  
export default orderfood;  