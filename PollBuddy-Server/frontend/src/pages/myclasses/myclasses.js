import React, {Component} from 'react';
import { Link, navigate } from '@reach/router';
import { MDBBtn, MDBIcon, MDBContainer } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import new_logo from '../../Poll_Buddy_Logo_v4.png';
import './myclasses.scss'

export default class Myclasses extends Component {
  constructor(){
    super();
            console.log(localStorage.getItem('loggedIn'));//todo remove
    if(!localStorage.getItem('loggedIn')){
      navigate('/login');//HEY FRONTEND WHY DON'T YOU PPL IMPLEMENT A LOGOUT/SIGNOUT BUTTON PLEASE. FOR NOW AM PUTTING THAT FUNCTIONALITY IN SETTINGS BUTTON
      window.location.reload(false);//this forces a reload so this will make the user go to the login page. A little barbaric but it works. If frontend wants to make it better by all means
    }
  }
  signout(){
    //todo make sure this shit works
    console.log("reached");
    localStorage.removeItem('loggedIn');//todo if admin and shit
    navigate('/login');
  }
  render() { 
    return (
      <MDBContainer className="page-my-classes">
          <img src={new_logo} className="top_left_logo" alt="logo"/>

          <MDBBtn
            size="lg"
            className="home_button"
            href="/"
            color="secondary"
          >
            <MDBIcon icon="home" />
          </MDBBtn>

          <MDBBtn
              size="lg"
              className="about_button"
              href="/"
              color="secondary"
          >
              <MDBIcon icon="question" />
          </MDBBtn>

          <MDBBtn
              size="lg"
              className="settings_button"//ACTUALLY SIGNOUT BUTTON FOR NOW
              onClick ={this.signout}
              color="secondary"
          >
            <MDBIcon icon="tools" />
          </MDBBtn>

        <hr class="line_style"></hr>
        <header className="header">
            <br></br> SELECT A CLASS:
        </header>

          <MDBContainer className="buttons">
              <Link to="/lessons">
                  <MDBBtn
                      size="lg"
                      className="class1"
                      href="/"
                      color="secondary"
                  >
                      CSCI 1200
                  </MDBBtn>

                  <MDBBtn
                      size="lg"
                      className="class2"
                      href="/"
                      color="secondary"
                  >
                      MATH 2010
                  </MDBBtn>

                  <MDBBtn
                      size="lg"
                      className="class3"
                      href="/"
                      color="secondary"
                  >
                      MGMT 1010
                  </MDBBtn>

                  <MDBBtn
                      size="lg"
                      className="class4"
                      href="/"
                      color="secondary"
                  >
                      ARTS 2020
                  </MDBBtn>
              </Link>

          </MDBContainer>
          <MDBBtn
              href="https://rcos.io/"
              className="rcos_button"
              target="_blank"
              size="m"
              color="secondary"
          >
              An RCOS Project
          </MDBBtn>

          <MDBBtn
              href="https://info.rpi.edu/statement-of-accessibility"
              className="accessibility_button"
              target="_blank"
              size="m"
              color="secondary"
          >
              Statement of Accessibility
          </MDBBtn>

          <MDBBtn
              href="https://github.com/neha-deshpande001/PollBuddy"
              className="github_button"
              target="_blank"
              size="m"
              color="secondary"
          >
              Github
          </MDBBtn>

      </MDBContainer>
    )
  }
}