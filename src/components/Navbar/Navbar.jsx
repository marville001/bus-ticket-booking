import React from "react";
import { connect } from "react-redux";
import { fetchTickets } from "../../redux/actions/searchAction";
import "./Navbar.css";
const Navbar = props => {
  return (
    <div className="navhbar flexcenter">
      <h3 className="blueIcon">BlueBus.com</h3>
      <ul className="ul">
        <li className="li">Home </li>
        <li className="li">About Us </li>
        <li className="li">Contact Us </li>
      </ul>
      <div className="logInfo">
        <i className="far fa-user-circle"></i>
        <span className="caret"></span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state
  };
};

export default connect(mapStateToProps, { fetchTickets })(Navbar);
