import React from 'react'
import { Link } from 'react-router-dom'

const Home=()=> {
    return (
        <div className="home">
            
            <p className="marker-icon">
                <span className="cell x marker-selection"></span>
                <span className="cell circle marker-selection"></span>
            </p>
            <p>Choose your play mode</p>
            <div className="select-btn">
                <Link to="/ai" className="custom-btn btn-ai">with AI</Link>
            </div>
            <div className="select-btn">
                <Link to="/friend" className="custom-btn btn-friend">with a friend</Link>
            </div>
        </div>
    )
}

export default Home;
