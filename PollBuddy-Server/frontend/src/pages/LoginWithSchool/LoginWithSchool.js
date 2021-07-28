import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";
import LoadingWheel from "../../components/LoadingWheel/LoadingWheel";
import SchoolPicker, {schoolLinkDict} from "../../components/SchoolPicker/SchoolPicker";

export default class LoginWithSchool extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      doneLoading: false 
    };
    this.schools = [];
  }

  componentDidMount() {
    this.props.updateTitle("Login With School");
  }

  render() {
    return (
      <MDBContainer fluid className="page">
        <MDBContainer fluid className="box">
          <p className="bold fontSizeLarge">
            Login with School
          </p>
          <p className="fontSizeSmall">
            To login, enter your school name or login using RPI's CAS.
          </p>
          <p className="fontSizeSmall" id="schoolNameText">
            School Name:
          </p>

          <SchoolPicker
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
          <form>
            <button className="btn button" formAction={ "/api/users/login/" + schoolLinkDict[this.state.value] }>Submit</button>
          </form>

          if(!this.state.doneLoading){
            return (
            <MDBContainer className="page">
                <LoadingWheel/>
                <button className="button" onClick={this.stopLoading}>End Loading</button>
            </MDBContainer>
            );
           }
        </MDBContainer>
      </MDBContainer>
    );
  }
}
