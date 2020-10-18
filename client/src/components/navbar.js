import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">My Trip Around the World</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarText" >
                    <ul className="navbar-nav float-lg-right">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-center">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/all" className="text-center nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link text-center">Gallery</Link>
                        </li>
                        {this.props.loggedIn ? <li className="nav-item">
                            <Link to="/create" className="nav-link text-center">Create Blog</Link>
                        </li> : ''}
                        {this.props.loggedIn ? <li className="nav-item">
                            <Link to="/update" className="nav-link text-center">Update Blog</Link>
                        </li> : ''}
                    </ul>
                </div>
            </nav>
        )        
    }
}
export default NavBar;