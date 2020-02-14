import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminLogin extends Component {
  state = {
    username: "",
    password: "",
    isAdmin: false
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="formdiv">
          <div className="ALform">
            <div className="form-cont">
              <h5>Login</h5>
              <div className="form-group">
                <label htmlFor="username">Enter Username</label>
                <input
                  onChange={this.onInputChange}
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Enter Password</label>
                <input
                  onChange={this.onInputChange}
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
              <div className="btn-cont">
                <button
                  onClick={() => this.props.onSubmitSignIn(username, password)}
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
