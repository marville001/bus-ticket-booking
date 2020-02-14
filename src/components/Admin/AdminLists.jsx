import React from "react";

const AdminLists = ({ admins, deleteAdmin }) => {
  return (
    <div className="admins">
      <h3 style={{ textAlign: "center" }}>Availabe Admins</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => {
            return (
              <tr>
                <td>{admin.id}</td>
                <td>{admin.username}</td>
                <td>
                  <button onClick={() => deleteAdmin(admin.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default AdminLists;
