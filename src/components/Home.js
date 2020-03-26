import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const homeContainer = {
        position: 'relative',
        // maxWidth: '100%'
        // backgroundSize: 'cover'
    }

    const img = {
        minHeight: '100vh',
        objectFit: 'cover',
        maxWidth: '100%',
        // height: '100vh'
    }

    const heading = {
        position: 'absolute',
        top: '40%',
        left: '80%',
        color: 'white'
    }

    const btn = {
        position: 'absolute',
        top: '50%',
        left: '80%'
    }

    return (
        <div style={homeContainer}>
            <img src={require("../assets/David Pastrnak.jpg")} alt="NHL Logo" style={img}/>
            <h1 style={heading}>Welcome to NHL Stats!</h1> 
            <button type="button" style={btn}><Link to={'/teams'}>Teams</Link></button>
        </div>
    ) 
}

export default Home;