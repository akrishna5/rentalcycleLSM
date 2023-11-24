import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import db, { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { useState } from 'react'
import { keys } from '@material-ui/core/styles/createBreakpoints'
const Login = () => {
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
    function signup()
    {
      history.push('/signup');
    }
    function check()
    {
      var reg= document.getElementsByClassName('reg')[0].value;
      var pass= document.getElementsByClassName('pass')[0].value;
      var count=1;
      db.collection('Accounts').onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
            if(reg===doc.data().Reg && pass===doc.data().Password)
           {
                  history.push(`/main/${reg}`);
                  alert('Logged In Re-directing you to main page');
                  // console.log(doc.data().Reg)   
                  count=0; 
            }

        }) 
        if(count===1)
        {
          alert('Wrong Credentials');

        }
        
      });
      
    }
    function showpass()
    {
      if(document.getElementsByClassName('show')[0].value==="Show Password")
      {
        document.getElementsByClassName('show')[0].value="Hide Password"
      document.getElementsByClassName('pass')[0].type="text";
      }
      else{
        document.getElementsByClassName('show')[0].value="Show Password"
      document.getElementsByClassName('pass')[0].type="password";
      }
      
    }
  return (
  <div className="wrapper" style={{zIndex:10}}>
    <div className="title-text">
      <div className="title login">Login Form</div>
      <div className="title signup">Signup Form</div>
    </div>

    <div className="form-container">
      <div className="slide-controls">
        <input type="radio" name="slider" id="login" />
        <input type="radio" name="slider" id="signup"/>
        <label for="login" className="slide login">Login</label>
        <label for="signup" className="slide signup" onClick={signup}> Signup</label>
        <div className="slide-tab"></div>
      </div>

      <div className="form-inner">
        <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Registration Number" className='reg'/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" className='pass'/>          
          </div>
          <div className="field">
            <input type="button" value="Show Password" className="show" onClick={showpass}/>
          </div>
          <div className="field">
            <input type="button" value="Login" onClick={check}/>
          </div>
          <div className="signup-link">
          </div>
          <div className="signup-link">
            Not a member? <a onClick={signup}>Signup now</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login