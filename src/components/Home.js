import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/teams')
    }

    const homeContainer = {
        position: 'relative',
        background: 'black'
    }

    const img = {
        display: 'block',
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
        color: 'white',
        fontSize: '2vw'
    }

    const des = {
        color: 'white',
        fontSize: '1vw'
    }

    const button = {
        backgroundColor: 'transparent',
        padding: '.5vw 1vh',
        borderRadius: '5px',
        border: 'solid #404040 .5px'
    }

    const btn = {
        textDecoration: 'none',
        fontSize: '1.2vw'
    }

    return (
        <div style={homeContainer}>
            <img src={require("../assets/David Pastrnak.jpg")} alt="NHL Logo" style={img}/>
            <div style={contentContainer}>
                <h2 style={heading}>Welcome to NHL Stats!</h2> 
                <p style={des}>View your favorite teams roster and see the stats of all your favorite players</p>
                <button type="button" variant="outline-dark" style={button} onClick={handleClick}><Link to={'/teams'} style={btn}> View Teams</Link></button>
            </div>
        </div>
    ) 
}

export default Home;