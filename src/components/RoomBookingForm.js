import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';
import Hero from './Hero';
import {RoomContext} from '../context';
import Navbarlogout from './LogoutNav';


class roomBooking extends Component {

  constructor(props) {

    super(props);
    
      this.state = {
      Room_id:'',
      Name: '',
      Email: '',
      StartDate:'',
      EndDate:'',
      
      formErrors: {},
     
      
    }
    this.Email = this.Email.bind(this);
    this.Room_id = this.Room_id.bind(this);
    this.Name = this.Name.bind(this);
    this.StartDate = this.StartDate.bind(this);
    this.EndDate = this.EndDate.bind(this);
    this.book = this.book.bind(this);

  }
  componentDidMount(){
    console.log(this.props.match.params.id);
    this.setState({
      Room_id:this.props.match.params.id
    })
  }
  
  handleFormValidation() {    
    const {Name,Email, Room_id,StartDate,EndDate } = this.state;    
    let formErrors = {};    
    let formIsValid = true;  
     //   
    if (!Name) {    
        formIsValid = false;    
        formErrors["fnameErr"] = "Name is required.";    
    } 
    else if (!( /^[a-zA-Z]+$/.test(Name))) {    
            formIsValid = false;    
            formErrors["fnameErr"] = "Invalid Name";    
          
    }   
    //

    if (!Room_id) {    
      formIsValid = false;    
      formErrors["roomidErr"] = "Rood id is required.";    
  } 
  else if (!( /^[0-9]+$/.test(Room_id))) {    
          formIsValid = false;    
          formErrors["roomidErr"] = "Invalid Room";    
        
  } 
    //Email    
    if (!Email) {    
        formIsValid = false;    
        formErrors["emailIdErr"] = "Email id is required.";    
    }    
    else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(Email))) {    

        formIsValid = false;    
        formErrors["emailIdErr"] = "Invalid email id.";    
    }  
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() +1;
    var day = today.getDate();
     var Datecompare = day+"/"+month +"/"+year;
    console.log(year);
    console.log(this.props.id);
    console.log(StartDate.getFullYear);
    //data
    if(!StartDate){
      formIsValid=false;
      formErrors["sdate"] = "Start Date is required";
    }  
    else if(StartDate.getDate < day || StartDate.getMonth <month || StartDate.getFullYear<year){
      formIsValid=false;
      formErrors["sdate"] = "Start Date is not proper";
    }

    
  

    this.setState({ formErrors: formErrors });    
    return formIsValid; 
}  
  
  Email(event) { 
    this.setState({ Email: event.target.value }) 
  }
  Room_id(event){
    this.setState({Room_id:event.target.value})
  }
 
  StartDate(event) {
    this.setState({ StartDate: event.target.value })
  }
  Name(event) {
    this.setState({ Name: event.target.value })
  }
  EndDate(event){
    this.setState({EndDate:event.target.value})
  }

  book(event) {
    event.preventDefault()
    if (this.handleFormValidation()) {    
           
      this.setState(this.initialState) 
      console.log(this.state);
    fetch('https://localhost:44353/Api/RoomBooking/Roombookings', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({

        Name: this.state.Name,
        Room_id:this.state.Room_id,
        EndDate:this.state.EndDate,
        StartDate:this.state.StartDate,       
        Email: this.state.Email,

        

      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status == 'Success'){

        alert('Booking Successfull, Pay once you check-in the hotel')      
        this.props.history.push("/food");
        }
        else if(Result.Status =="AlreadyExists"){

          alert('Sorry,Currently room is already occupied')
        }
        else{
          alert('Sorry, Unauthenticated user')
        }
      })

  }
}
static contextType = RoomContext;
  render() {
    
    const { fnameErr, emailIdErr,roomidErr,sdate} = this.state.formErrors;
    return (

      <>
      <Navbarlogout/>
       <Hero>
    <div class="login">    
    <form id="login" > 
    <label><b>Room Id    
        </b>    
        </label>    
        <input value={this.props.match.params.id} onChange={this.onChangeId} className={roomidErr ? ' showError' : ''} type="text" name="Uid" id="Uname" placeholder="ENTER Room_id"/>    
        {fnameErr &&    
        <div style={{ color: "red"}}>{roomidErr}</div> } 
        <br/><br/> 
    <label><b>Name    
        </b>    
        </label>    
        <input  onChange={this.Name} className={fnameErr ? ' showError' : ''} type="text" name="Uname" id="Uname" placeholder="ENTER NAME"/>    
        {fnameErr &&    
        <div style={{ color: "red"}}>{fnameErr}</div> } 
        <br/><br/>    
        <label><b>Email    
        </b>    
        </label>    
        <input onChange={this.Email} type="text" name="Uname" id="Uemail" placeholder="ENTER EMAIL"  className={emailIdErr ? ' showError' : ''}/>    
        {emailIdErr &&    
            <div style={{ color: "red"}}>{emailIdErr}</div>    
            } 
                 
        
        <br/><br/>  
        <label><b>Start Date    
        </b>    
        </label>    
        <input onChange={this.StartDate} type="date" name="Uname" id="Ustartdate" placeholder="ENTER START DATE" className={sdate ? ' showError' : ''}/>    
        {sdate &&    
            <div style={{ color: "red"}}>{sdate}</div>    
            } 
        <br/><br/>
        <label><b>End Date    
        </b>    
        </label>    
        <input onChange={this.EndDate} type="date" name="Uname" id="Uenddate" placeholder="ENTER END DATE" />    
        
        <br/><br/>   
        <Button onClick={this.book} color="success" block className="btn-primary">Book My room</Button>      
        <br/><br/>    
         
           
        <br/><br/>    
         
    </form>   
</div> 
                      
 </Hero>   
      </>

    );

  }

}

export default roomBooking;