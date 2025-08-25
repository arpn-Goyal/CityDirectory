import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext.jsx";
import HeaderSidebar from '../admin/navs/HeaderSidebar.jsx';
const Dashboard = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      {/* Welcome {user.email}, Ur role: {user.role} */}
      <HeaderSidebar/>
    </div>
  )
}

export default Dashboard;