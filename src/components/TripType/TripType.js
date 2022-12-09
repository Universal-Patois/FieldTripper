import React from 'react'
import './TripType.css'
import { Link } from 'react-router-dom'

const TripType = () => {
    return (
        <div className='trip-type'>
            <p className='choose'>Choose Your Trip Type</p>
            <Link to='/search-form'>
            <button className='trip-host'>Host A Trip</button> </Link>
            
            <button className='trip-join'>Join A Trip</button>
        </div >
    )
}
export default TripType

// if we click HOST, we will create a user trip
// if HOST === true, userTrip === TRUE
// if JOIN, HOST === false => SAVED TRIPS
// create saved trips component 