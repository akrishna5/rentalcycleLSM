import React from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import db from '../firebase'
import './Renter.css'
import { useParams } from 'react-router-dom'
const Renter = () => {
  var {reg}=useParams();
  var tomain="/main/"+reg.toString();
  var to="/rented/"+reg.toString();
  const history = useHistory();
  function rent()
  {
    var reg= document.getElementsByClassName('reg')[0].value;
    var ph =document.getElementsByClassName('room')[0].value;
    var model =document.getElementsByClassName('model')[0].value;
    var from =document.getElementsByClassName('from')[0].value;
    var to =document.getElementsByClassName('to')[0].value;
    var date =document.getElementsByClassName('date')[0].value;
    var price =document.getElementsByClassName('price')[0].value;
    var regex1=/^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    //var regex2=/^[1-9]{1}[0-9]{9}$/;
    if(reg===""||ph===""||model===""||from===""||to===""||date===""||price==="")
    {
      alert("All the fields must be filled");
    }
    else{
      var flag=0;
      if(!regex1.test(reg))
      {
         alert("invalid Registration Format");
         flag=1;
      }
      // if(!regex2.test(reg))
      // {
      //    alert("invalid Mobile number format");
      //    flag=1;
      // }
      if(flag===0)
      {
        db.collection('RenterDetails').add(
          {
            Reg:reg,
            Ph:ph,
            model:model,
            from:from,
            to:to,
            date:date,
            price:price,
          }
        );
        alert('updated the data');
        history.push(`/rented/${reg}`);
      }
    }
      
  }
  return (
    <div>
      <div className="wrapper" style={{zIndex:10}}>
    <div className="title-text">
      <div className="title login">CYCLE AND RENTER DETAILS</div>
      <div className="title signup">CYCLE DETAILS</div>
    </div>

    <div className="form-container">
      <div className="form-inner" >
        <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Registration Number" className='reg'/>
          </div>
          <div className="field">
            <input type="number" placeholder="Available Mobile Number" className='room'/>
          </div>
          <div className="field">
            <input type="text" placeholder="Cycle Model" className='model'/>
          </div>
          <div className="field">
          
          <label for="signup" className="signup">FROM</label>
            <input type="time" className='from'/>
          </div>
          <br />
          <div className="field">
          <label for="signup" className="signup">TO</label>
            <input type="time" className='to'/>
          </div>
          <br />
          <div className="field">
            <input type="date" placeholder="Available Mobile Number" className='date'/>
          </div>
          <div className="field">
            <input type="number" placeholder="Price" className='price'/>
          </div>
          <div className="field">
          {/* <NavLink
              exact
              to="/rented"
              activeClassName="active"
              className="nav-links"
            > */}
            <input type="button" value="Rent Now" onClick={rent}/>
              
            {/* </NavLink> */}
          </div>
          
        </form>

        <form action="#" className="signup">
          <div className="field">
            <input type="text" placeholder="Email Address"/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password"/>
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm Password"/>
          </div>

          <div className="field">
            <input type="button" value="RENT CYCLE"/>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div className="back1">
          <NavLink
              exact
              to={to}
              activeClassName="active"
    
              className="nav-links">
            {/* <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Renter Dashboard</button> */}
            <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Renter Dashboard</button>
            </NavLink>
  </div>
  <div className="back">
          <NavLink
              exact
              to={tomain}
              activeClassName="active"
    
              className="nav-links">
            {/* <input type="button" value="Go Back" className='button'/> */}
            <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Go Back</button>
            </NavLink>
  </div>
    </div>
  )
}

export default Renter
