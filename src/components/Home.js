import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const Home = () => {

    const homeContainer = {
        position: 'relative',
    }

    const img = {
        minHeight: '100vh',
        objectFit: 'cover',
        maxWidth: '100%',
    }

    const contentContainer = {
        position: 'absolute',
        top: '10%',
        left: '70%',
        margin: '0.5rem',
        padding: '0.5rem'
    }

    const heading = {
        color: 'white'
    }

    const des = {
        color: 'white'
    }

    const btn = {
        // position: 'absolute',
        // top: '50%',
        // left: '80%'
        textDecoration: 'none'
    }

    return (
        <div style={homeContainer}>
            <img src={require("../assets/David Pastrnak.jpg")} alt="NHL Logo" style={img}/>
            <div style={contentContainer}>
                <h2 style={heading}>Welcome to NHL Stats!</h2> 
                <p style={des}>View your favorite teams roster and see the stats of all your favorite players</p>
                <Button type="button" variant="outline-dark" ><Link to={'/teams'} style={btn}> View Teams</Link></Button>
            </div>
        </div>
    ) 
}

export default Home;