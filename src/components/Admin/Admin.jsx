import React, { Component } from "react";
import styled from "styled-components";

//
import "./Admin.css";
import "./style.css";
import AdminLogin from "./AdminLogin";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AddAccounts from "./AddAccounts";
import AdminLists from "./AdminLists";
import Buses from "./buses/Buses";
import Reservation from "./reservation/Reservation";
import Routes from "./routes/Routes";
import BusSchedule from "./buses/BusSchedule";

//
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoggedIn: false,
      contentIndex: "bus-schedule",
      admins: [],
      buses: [],
      routes: [],
      schedules: []
    };
  }

  loadAdmin = data => {
    this.setState({
      user: {
        id: data.id,
        username: data.username
      }
    });
  };

  changeMainContent = content => {
    this.setState({ contentIndex: content });
  };
  validateDetails = (username, password) => {
    let isValid = false;
    if (username.length === 0 || password.length === 0) {
      isValid = false;
    } else {
      isValid = true;
    }
    return isValid;
  };
  onSubmitSignIn = (username, password) => {
    if (this.validateDetails(username, password)) {
      fetch("http://localhost:3001/Adminsignin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then(res => res.json())
        .then(user => {
          if (user.id) {
            this.setState({ isLoggedIn: true }, () => {
              this.setState({ user: user.username });
            });
          } else {
            alert(user);
          }
        })
        .catch(console.log);
    } else {
      alert("Username and password cannot be empty");
    }
  };

  fetchAdmins = () => {
    fetch("http://localhost:3001/getadmins")
      .then(response => response.json())
      .then(admins => {
        this.setState({ admins });
      });
  };

  fetchBuses = () => {
    fetch("http://localhost:3001/getbuses")
      .then(response => response.json())
      .then(buses => {
        this.setState({ buses });
      });
  };

  fetchRoutes = () => {
    fetch("http://localhost:3001/getroutes")
      .then(response => response.json())
      .then(routes => {
        this.setState({ routes });
      });
  };
  fetchSchedules = () => {
    fetch("http://localhost:3001/getschedules")
      .then(response => response.json())
      .then(schedules => {
        this.setState({ schedules });
      });
  };

  fetchReservations = () => {
    fetch("http://localhost:3001/getreservations")
      .then(response => response.json())
      .then(reservations => {
        this.setState({ reservations });
      });
  };

  logOut = () => {
    this.setState({ isLoggedIn: false });
  };

  deleteAdmin = id => {
    fetch("http://localhost:3001/deleteadmin", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .then(res => {
        this.fetchAdmins();
        alert(res);
      });
  };

  deleteBus = id => {
    fetch("http://localhost:3001/deletebus", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .then(res => {
        this.fetchBuses();
        alert(res);
      });
  };

  deleteRoute = id => {
    fetch("http://localhost:3001/deleteroute", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .then(res => {
        this.fetchRoutes();
        alert(res);
      });
  };

  deleteSchedule = id => {
    fetch("http://localhost:3001/deleteschedule", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .then(res => {
        this.fetchSchedules();
        alert(res);
      });
  };

  componentDidMount() {
    this.fetchAdmins();
    this.fetchBuses();
    this.fetchRoutes();
    this.fetchReservations();
    this.fetchSchedules();
  }
  render() {
    return (
      <React.Fragment>
        <div className="wrapperr">
          <AdminHeader logOut={this.logOut} user={this.state.user} />
          <div className="main">
            <div className="main-body">
              {this.state.contentIndex === "accounts" ? (
                <div>
                  <AddAccounts
                    fetchAdmins={this.fetchAdmins}
                    validateDetails={this.validateDetails}
                  />
                  <AdminLists
                    deleteAdmin={this.deleteAdmin}
                    admins={this.state.admins}
                  />
                </div>
              ) : this.state.contentIndex === "buses" ? (
                <Buses
                  buses={this.state.buses}
                  fetchBuses={this.fetchBuses}
                  deleteBus={this.deleteBus}
                />
              ) : this.state.contentIndex === "reservations" ? (
                <Reservation />
              ) : this.state.contentIndex === "routes" ? (
                <Routes
                  routes={this.state.routes}
                  fetchRoutes={this.fetchRoutes}
                  deleteRoute={this.deleteRoute}
                />
              ) : this.state.contentIndex === "bus-schedule" ? (
                <BusSchedule
                  buses={this.state.buses}
                  schedules={this.state.schedules}
                  routes={this.state.routes}
                  deleteSchedule={this.deleteSchedule}
                  fetchSchedules={this.fetchSchedules}
                />
              ) : (
                <h3>Hello</h3>
              )}
            </div>
            <footer>Hello from footer</footer>
          </div>
          <AdminSidebar changeMainContent={this.changeMainContent} />
        </div>
        <ModalContainer
          style={{ display: this.state.isLoggedIn ? "none" : "block" }}
        >
          <AdminLogin onSubmitSignIn={this.onSubmitSignIn} />
        </ModalContainer>
      </React.Fragment>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  addscheduleright: 0;
  left: 0;
  background: #fff;
`;

export default Admin;
