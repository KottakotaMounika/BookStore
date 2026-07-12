import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import API from "../../services/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid p-4">

        <h2>Users</h2>
        <hr />

        <table className="table table-bordered table-striped mt-4">

          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>

            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No Users Found
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Users;