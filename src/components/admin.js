import { Link } from "react-router-dom";
import { Users } from "./users";

const Admin = () => {
  return (
    <>
      <Users/>
      <Link to="/">Home</Link>
    </>
  )
}

export default Admin