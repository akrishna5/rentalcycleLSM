import React from 'react'
import './Signup.css'
import { Button } from '@material-ui/core'
import db, { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'


const Signup = () => {
  const history= useHistory();
  const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);
            dispatch({
              type:actionTypes.SET_USER,
              user: result.user,
            })
        }).catch((error)=>{
            alert(error.message);
        })
    }

    function login()
    {
      history.push('/login');
    }
    function validate()
    {
      console.log("in validation");
      var reg= document.getElementsByClassName('reg')[0].value;
      var name= document.getElementsByClassName('name')[0].value;
      var email= document.getElementsByClassName('email')[0].value;
      var block= document.getElementsByClassName('block')[0].value;
      var room= document.getElementsByClassName('room')[0].value;
      var pass= document.getElementsByClassName('pass')[0].value;
      var confpass= document.getElementsByClassName('confpass')[0].value;
      var regex1=/^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
      var regex2=/^[a-z]+[.][a-z]+[0-9]{4}@vitstudent.ac.in/;
      // console.log(regex1.test(reg))
      if(reg!==""&&name!==""&&email!==""&&block!==""&&room!==""&&pass!==""&&confpass!=="")
      {
        var flag=0;
        if(!regex1.test(reg))
      {
        alert("invalid Registration Format");
        flag=1;
      }
      if(!regex2.test(email))
      {
        alert("Invalid VIT-Email Format");
        flag=1;
      }
      if(pass!==confpass)
      {
        alert("Password and Confirm Password not matched");
      }
      if(flag===0)
      {
          db.collection('Accounts').add({
            Password:pass,
            Reg:reg,
            email:email,
            name:name,
            block:block,
            room:room,
            
          });
          alert('Successfully signed in > redirecting you to login page......');
          history.push('/login');
        }
      }
      else{
        alert("Fill all the fields");
      }
    }
  return (
  <div className="wrapper" style={{zIndex:10}}>
    <div className="title-text">
      <div className="title login">Signup Form</div>
      <div className="title signup">Signup Form</div>
    </div>

    <div className="form-container">
      <div className="slide-controls">
        <input type="radio" name="slider" id="signup" />
        <input type="radio" name="slider" id="login"/>
        <label for="login" className="slide login" >Signup</label>
        <label for="signup" className="slide signup" onClick={login}> Login</label>
        <div className="slide-tab"></div>
      </div>

      <div className="form-inner" >
        <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Registration Number" className='reg'/>
          </div>
          <div className="field">
            <input type="text" placeholder="Name" className='name'/>
          </div>
          <div className="field">
            <input type="email" placeholder="Email Address"  className='email'/>
          </div>
          <div className="field">
            <input type="text" placeholder="Block" className='block'/>
          </div>
          <div className="field">
            <input type="number" placeholder="Room Number" className='room'/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" className='pass'/>
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm password" className='confpass'/>
          </div>
          <div className="field">
            <input type="button" value="SignUp" onClick={validate} />
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
            <input type="password" placeholder="Confirm password"/>
          </div>

          <div className="field">
            <input type="button" value="Signup"/>
          </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup