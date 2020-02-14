import React, { Component } from "react";

class BusSchedule extends Component {
  state = {
    bus: "",
    route: "",
    departdate: "",
    departtime: ""
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getBusDetails = (buses, id) => {
    const bus = buses.filter(bus => bus.id === parseInt(id));
    if (bus.length === 0) {
      alert("Ensure you choose the bus");
      return { bid: null, name: null, seats: null };
    } else {
      return { bid: bus[0].id, bname: bus[0].name, seats: bus[0].seats };
    }
  };
  getRouteDetails = (routes, id) => {
    const route = routes.filter(route => route.id === parseInt(id));
    if (route.length === 0) {
      alert("Ensure you choose the bus");
      return { from: null, to: null, price: null };
    } else {
      return {
        from: route[0].from,
        to: route[0].to,
        price: route[0].price
      };
    }
  };

  onAddSchedule = () => {
    const busid = this.state.bus;
    const routeid = this.state.route;
    const { departdate, departtime } = this.state;
    const { bid, bname, seats } = this.getBusDetails(this.props.buses, busid);
    const { from, to, price } = this.getRouteDetails(
      this.props.routes,
      routeid
    );

    fetch("http://localhost:3001/addschedule", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        busid: bid,
        noofseats: seats,
        departdate: departdate,
        departtime: departtime,
        availseats: seats,
        from: from,
        bname: bname,
        to: to,
        price: price
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.fetchSchedules();
        alert(res);
      })
      .catch(err => alert(err));
  };

  render() {
    const { buses, routes, schedules, deleteSchedule } = this.props;
    return (
      <div className="schedules">
        <div className="add-schedule">
          <div className="add-schedule-form">
            <div>
              <div className="input">
                <p>Bus</p>
                <select onChange={this.onInputChange} name="bus" id="bus">
                  {buses.map(bus => (
                    <option value={bus.id} key={bus.id}>
                      {bus.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input">
                <p>Route</p>
                <select onChange={this.onInputChange} name="route" id="route">
                  {routes.map(route => (
                    <option value={route.id} key={route.id}>
                      {route.from} - {route.to}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <div className="input">
                <p>Departure Date</p>
                <input
                  onChange={this.onInputChange}
                  type="date"
                  name="departdate"
                  id="departdate"
                />
              </div>
              <div className="input">
                <p>Departure Time</p>
                <input
                  onChange={this.onInputChange}
                  type="time"
                  name="departtime"
                  id=""
                />
              </div>
            </div>
            <input type="button" onClick={this.onAddSchedule} value="Add" />
          </div>
        </div>
        <div className="schedules-table">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Bus name</th>
                <th>From</th>
                <th>To</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Total Seats</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {schedules.map(schedule => (
                <tr>
                  <td>{schedule.id}</td>
                  <td>{schedule.bname}</td>
                  <td>{schedule.from}</td>
                  <td>{schedule.to}</td>
                  <td>{schedule.departdate}</td>
                  <td>{schedule.departtime}</td>
                  <td>{schedule.noofseats}</td>
                  <td>{schedule.availseats}</td>
                  <td>{schedule.price}</td>
                  <td>
                    <button onClick={() => deleteSchedule(schedule.id)}>
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

export default BusSchedule;
