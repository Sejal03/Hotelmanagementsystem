import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  

import Title from './Title';
import Navbaradmin from './Navbaradmin';
import Hero from './Hero';
 
class updateemployee extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeId = this.onChangeId.bind(this);  
    this.onChangeEmail = this.onChangeEmail.bind(this);  
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeEmployeeName=this.onChangeEmployeeName.bind(this);
    this.onChangeCity=this.onChangeCity.bind(this);
    this.onChangeDepartment=this.onChangeDepartment.bind(this);  
     
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Id: '',
            Email:'',  
           Password:'',
           EmployeeName:'',
           City:'',
           Department:'' 
              
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('https://localhost:44335/api/employee/empbyid/?Id='+this.props.match.params.Id)  
          .then(response => {  
              this.setState({   
                EmployeeName: response.data.EmployeeName,   
                Id: response.data.Id,  
                Email: response.data.Email,
                Password:response.data.Password,
                City:response.data.City,
                Department:response.data.Department

                });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeEmployeeName(e) {  
    this.setState({  
       EmployeeName : e.target.value  
    });  
  }  
  onChangeDepartment(e) {  
    this.setState({  
        Department: e.target.value  
    });    
  }  
  onChangeId(e) {  
    this.setState({  
        Id: e.target.value  
    });    
  }  
  onChangePassword(e) {  
    this.setState({  
        Password: e.target.value  
    });    
  }  
  onChangeEmail(e) {  
    this.setState({  
        Email: e.target.value  
    });    
  }  
  onChangeCity(e) {  
    this.setState({  
        City: e.target.value  
    });  
}  
    
  
  onSubmit(e) {  
     
    e.preventDefault();  
    const obj = {  
        Id:this.props.match.params.Id,  
      EmployeeName: this.state.EmployeeName,  
      Email: this.state.Email,  
      City: this.state.City, 
      Password: this.state.Password,
      Department: this.state.Department 
       
  
    };  
    axios.post('https://localhost:44335/api/employee/Add/', obj)  
        .then(res => console.log(res.data));  
        
        this.props.history.push('/viewemployee')  
  }  
    render() {  
        return (  
            <>
            <Navbaradmin/>
            <Title title="Update Employee"></Title>
            <Hero>
            
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Name" value={this.state.EmployeeName} onChange={this.onChangeEmployeeName}  
                                placeholder="Enter Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Email</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="RollNo" value={this.state.Email} onChange={this.onChangeEmail} placeholder="Enter Email" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Password</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.Password} onChange={this.onChangePassword} placeholder="Enter Password" />  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>  
                            <Label for="Password" sm={2}>City</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.City} onChange={this.onChangeCity} placeholder="Enter Password" />  
                            </Col>  
                        </FormGroup> 
                         
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Department</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.Department} onChange={this.onChangeDepartment} placeholder="Enter Password" />  
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
  
export default updateemployee;  