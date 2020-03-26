import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const img = {
        
    }

    return (
        <div>
            <img src={require("../assets/David Pastrnak.jpg")} alt="NHL Logo" style={img}/>
            <h1>Welcome to NHL Stats!</h1> 
            <button type="button"><Link to={'/teams'}>Teams</Link></button>
        </div>
    ) 
}

export default Home;