import React from 'react'
import { Link } from 'react-router-dom';
import { fetchRoster } from '../actions/roster'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class TeamsCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchRoster(this.props.team.id)
    }

    render () {
        const cardStyle = {
            width: '18rem',
            padding: '1rem',
            margin: '1rem'
        }
        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        }
        return (
            <div>
               
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title>{this.props.team.name}</Card.Title>
                            </Card.Body>
                            <Button varient="primary" onClick={this.handleClick}><Link style={linkStyle} to={`/roster`}>View Roster</Link></Button>
                        </Card>
                   
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.team.name}</Card.Title>
                    </Card.Body>
                    <Button varient="primary" onClick={this.handleClick}><Link className="linkbutton" to={`/roster`}>View Roster</Link></Button>
                </Card> */}
                {/* <p>
                    {this.props.team.name}   <button type="button" onClick={this.handleClick}><Link className="linkbutton" to={`/roster`}>View Roster</Link></button>
                </p> */}
            </div>
        )
    }
}

export default connect(null, {fetchRoster})(TeamsCard);