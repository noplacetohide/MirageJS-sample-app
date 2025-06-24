import React, { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold flex justify-start items-center p-4 bg-gray-100 rounded-sm text-gray-500 shadow shadow-gray-400">User List</h1>
      {!!(users?.length < 1) && <h3 className="p-4 my-2 rounded-sm bg-red-100 shadow shadow-red-300 text-md font-semibold text-gray-600">No Data Found</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-4 my-2 rounded-sm bg-green-100 shadow shadow-green-600 text-lg font-semibold text-gray-600">
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
