import React, { Component } from "react";

class Buses extends Component {
  state = {
    name: "",
    seats: 0
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onAddBus = () => {
    fetch("http://localhost:3001/addbus", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        seats: this.state.seats
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.fetchBuses();
        alert(res);
      })
      .catch(err => alert(err));
  };

  render() {
    const { name, seats } = this.state;
    const { buses, deleteBus } = this.props;
    return (
      <div className="buses">
        <div className="add-bus">
          <div className="add-bus-form">
            <div className="input">
              <p>Name</p>
              <input
                onChange={this.onInputChange}
                value={name}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="input">
              <p>Seats</p>
              <input
                onChange={this.onInputChange}
                value={seats}
                type="number"
                name="seats"
                id="seats"
              />
            </div>
            <div className="add-btn">
              <input
                onClick={this.onAddBus}
                className="adbtn"
                type="button"
                value="Add"
              />
            </div>
          </div>
        </div>
        <div className="buses-table">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Seats</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {buses.map(bus => (
                <tr key={bus.id}>
                  <td>{bus.id}</td>
                  <td>{bus.name}</td>
                  <td>{bus.seats}</td>
                  <td>
                    <button onClick={() => deleteBus(bus.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default Buses;
