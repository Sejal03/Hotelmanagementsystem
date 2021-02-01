import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import Hero from '../Hero';
import Title from '../Title';
import Navbaradmin from '../Navbaradmin';
 
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeName = this.onChangeName.bind(this);  
    this.onChangePrice = this.onChangePrice.bind(this);  
    this.onChangeavailable= this.onChangeavailable.bind(this);  
     
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Name: '',  
            Price: '',  
            available: '',  
              
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('https://localhost:44353/Api/Food/foodbyid/?Food_Id='+this.props.match.params.Food_Id)  
          .then(response => {  
              this.setState({   
                Name: response.data.Name,   
                Price: response.data.Price,  
                available: response.data.available,  
                });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeName(e) {  
    this.setState({  
        Name: e.target.value  
    });  
  }  
  onChangePrice(e) {  
    this.setState({  
        Price: e.target.value  
    });    
  }  
  onChangeavailable(e) {  
    this.setState({  
        available: e.target.value  
    });  
}  
    
  
  onSubmit(e) {  
     
    e.preventDefault();  
    const obj = {  
    Food_Id:this.props.match.params.Food_Id,  
      Name: this.state.Name,  
      Price: this.state.Price,  
      available: this.state.available,  
       
  
    };  
    axios.post('https://localhost:44353/Api/Food/Add/', obj)  
        .then(res => console.log(res.data));  
        
        this.props.history.push('/adminfood')  
  }  
    render() {  
        return (  
            <>
            <Navbaradmin/>
            <Title title="Update Food Menu"></Title>
            <Hero>
            
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}  
                                placeholder="Enter Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Price</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="price" value={this.state.Price} onChange={this.onChangePrice} placeholder="ENTER PRICE" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Status</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.available} onChange={this.onChangeavailable} placeholder="Enter Class" />  
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
  
export default Edit;  