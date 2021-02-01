import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Reg from "./components/Register/Register";
import CustomerRoom from "./components/CustomerRoom";
import roomBooking from "./components/RoomBookingForm";
import Adminlogin from "./components/Adminlogin";
import Food from "./components/Food/Food";
import Adminpage from "./components/Adminpage";
import Customerlist from "./components/Customerlist";

import Navbaradmin from "./components/Navbaradmin";
import Foodadmin from "./components/Food/FoodAdmin";
import Edit from "./components/Food/Updatefoodadmin";
import Addfood from "./components/Food/Addfood";
import Viewroombooking from "./components/Viewroombooking";
import Viewemployee from "./components/Viewemployee";
import updateemployee from "./components/Updateemployee";
import Addemployee from "./components/Addemployee";
import orderfood from "./components/Food/orderfood";

function App() {
  return (
    <>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path='/Login' component={Login} />  
        <Route exact path='/adminlogin' component ={Adminlogin}/>  
          <Route path='/Signup' component={Reg} /> 
          <Route path='/roombook/:id' component={roomBooking}/>
          <Route path='/customerrooms' component={CustomerRoom}/>
          <Route path= '/food' component={Food}/>
          <Route path='/admin' component={Adminpage}/>
          <Route path='/viewcustomer' component={Customerlist}/>
          <Route path='/adminfood' component={Foodadmin}/>
          <Route path='/edit/:Food_Id' component={Edit}/>
          <Route path='/navbaradmin' component={Navbaradmin}/>
          <Route path='/addfood' component={Addfood}/>
          <Route path ='/Viewroombooking' component={Viewroombooking}/>
          <Route path='/Viewemployee' component={Viewemployee}/>
          <Route path='/Updateemployee/:Id' component={updateemployee}/>
          <Route path='/addemp' component={Addemployee}/>
          <Route path='/orderfood/:Food_Id' component={orderfood}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
