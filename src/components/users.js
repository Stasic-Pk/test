import React, { useState, useEffect } from "react"

const Users = () => {
  const [users, setUsers] = useState()

  return (
    <article>
      <h2>user list</h2>
      {users?.lenght
        ? (
          <ul>
            {users.map((user, i) => <li key={i}>{user?.username}</li>)}
          </ul>
        ) : <p>no users on display</p>
      }
    </article>
  )
}

export default Users