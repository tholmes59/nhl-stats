import React from 'react'

const Footer = () => {

    const footerStyle = {
        position: 'float',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        // height: '-40px',
        marginTop: '5px'
    }
    return (
        <div style={footerStyle}>
            <p>Footer</p>
        </div>
    )
}

export default Footer