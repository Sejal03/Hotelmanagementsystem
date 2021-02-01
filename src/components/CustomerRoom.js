import React from "react";
import { Link } from "react-router-dom";
import { withRoomConsumer } from "../context";
import Hero from "./Hero";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Navbarlogout from "./LogoutNav";

function CustomerRoom({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
   <Navbarlogout/>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
      
    </>
  );
}

export default withRoomConsumer(CustomerRoom);