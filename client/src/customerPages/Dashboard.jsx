import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext.jsx";
const Dashboard = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      Welcome {user.email}, Ur role: {user.role}
    </div>
  )
}

export default Dashboard;