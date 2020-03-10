import React from 'react'

const Footer = () => {

    const footerStyle = {
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        height: '2.5rem',
        marginTop: '5px',
        fontSize: '1vmin'
    }

    const getYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div style={footerStyle}>
            <span>
                {getYear()} NHL Stats by Tom Holmes<br/>
                "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2020. All Rights Reserved."
            </span>
        </div>
    )
}

export default Footer