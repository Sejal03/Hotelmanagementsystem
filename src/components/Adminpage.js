import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Hero from './Hero'
import Navbaradmin from './Navbaradmin'

export default function Adminpage() {
    return (
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
        </>
    )
}
