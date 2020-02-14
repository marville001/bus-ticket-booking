import React, { Component } from "react";

class AddAccounts extends Component {
  state = {
    username: "",
    password: "",
    isAdmin: false
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitSignIn = () => {
    if (this.props.validateDetails(this.state.username, this.state.password)) {
      fetch("http://localhost:3001/registeradmin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(res => {
          this.props.fetchAdmins();
        })
        .catch(err => alert(err));
    } else {
      alert("Username and password cannot be empty");
    }
  };

  //
  render() {
    const { username, password } = this.state;
    const { validateDetails } = this.props;
    return (
      <div>
        <div className="add-admin-form">
          <h4>Add admin</h4>
          <input
            type="text"
            onChange={this.onInputChange}
            value={username}
            name="username"
            placeholder="username"
          />
          <input
            type="text"
            onChange={this.onInputChange}
            value={password}
            name="password"
            placeholder="password"
          />
          <button onClick={this.onSubmitSignIn} type="button">
            Add
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export default AddAccounts;
