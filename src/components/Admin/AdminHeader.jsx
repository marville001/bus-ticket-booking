import React from "react";

const AdminHeader = ({ user, logOut }) => {
  return (
    <header className="admin-header">
      <div className="admin-log">
        <span>BlueBus.com </span>{" "}
      </div>

      <div className="ddd">
        <div>
          <span className="user">{user}</span>
        </div>
        <hr className="hr" />
        <div>
          <button onClick={logOut}>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
