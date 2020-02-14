import React, { Component } from "react";

class Routes extends Component {
  state = { from: "", to: "", price: 100 };

  onAddRoute = () => {
    fetch("http://localhost:3001/addroute", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: this.state.from,
        to: this.state.to,
        price: this.state.price
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.fetchRoutes();
        alert(res);
      })
      .catch(err => alert(err));
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { from, to, price } = this.state;
    const { routes, deleteRoute } = this.props;

    return (
      <div className="routes">
        <div className="add-route">
          <div className="add-route-form">
            <div className="input">
              <p>From</p>
              <input
                onChange={this.onInputChange}
                type="text"
                name="from"
                value={from}
                id="from"
              />
            </div>
            <div className="input">
              <p>To</p>
              <input
                onChange={this.onInputChange}
                type="text"
                value={to}
                name="to"
                id="to"
              />
            </div>
            <div className="input">
              <p>Price</p>
              <input
                onChange={this.onInputChange}
                type="number"
                value={price}
                min="100"
                name="price"
                id="price"
              />
            </div>
            <div className="add-btn">
              <input
                onClick={this.onAddRoute}
                className="adbtn"
                type="button"
                value="Add"
              />
            </div>
          </div>
        </div>
        <div className="routes-table">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>From</th>
                <th>To</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {routes.map(route => (
                <tr key={route.id}>
                  <td>{route.id}</td>
                  <td>{route.from}</td>
                  <td>{route.to}</td>
                  <td>
                    <span>Ksh </span>
                    {route.price}
                  </td>
                  <td>
                    <button onClick={() => deleteRoute(route.id)}>
                      delete
                    </button>
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

export default Routes;
