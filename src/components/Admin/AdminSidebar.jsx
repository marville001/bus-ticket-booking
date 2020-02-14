import React from "react";

const AdminSidebar = ({ changeMainContent }) => {
  return (
    <aside>
      <div className="aside-cont">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a href="#" onClick={() => changeMainContent("accounts")}>
              Accounts
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changeMainContent("reservations")}>
              Reservations
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changeMainContent("routes")}>
              Routes
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changeMainContent("buses")}>
              Buses
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changeMainContent("bus-schedule")}>
              Bus Schedule
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
