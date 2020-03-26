import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const homeContainer = {
        position: 'relative',
        width: '100%'
    }

    const img = {
        minHeight: '100vh',
        // width: '100%',
        // height: 'auto'
    }

    const heading = {
        position: 'absolute',
        top: '70%',
        left: '20%',
        color: 'white'
    }

    const btn = {
        position: 'absolute',
        top: '80%',
        left: '20%'
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