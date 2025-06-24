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
      <h1 className="text-2xl font-bold">User List</h1>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
