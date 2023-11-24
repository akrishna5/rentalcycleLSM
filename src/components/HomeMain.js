import React from 'react'
import {NavLink} from "react-router-dom";
import "./HomeMain.css";

function HomeMain({reg}) {
  var to= "/renter/"+reg.toString();
  return (
    <div className="homemain">
      <div className="wrap1">
        <NavLink
              exact
              to='/rider'
              activeClassName="active"
              className="rent"
            >
        <button className="btn">RIDER</button>
            </NavLink>
            <div className="desc">
            <center><b>Click the above Button to go to Rider Page</b></center>
          </div>
      </div>
      <div className="wrap2">
          <NavLink
              exact
              to={to}
              activeClassName="active"
              className="ride"
            >
          <button className="btn">RENTER</button>
            </NavLink>
            <div className="desc">
            <center><b>Click the above Button to go to Renter Page</b></center>
          </div>
      </div>
    </div>
  )
}

export default HomeMain