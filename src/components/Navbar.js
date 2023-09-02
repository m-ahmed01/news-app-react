//rcep  -> react class export compnentys with export proptypes
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
//   static propTypes = {  }

  render() {
    return (
        <nav className=" container fixed-top navbar navbar-expand-lg bg-secondary-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News-App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link  className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/entertainment">Enteretainment</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/technology">Technology</Link>
                </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
