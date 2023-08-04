import { useAuth0 } from "@auth0/auth0-react"

const logoutButton = () => {
  const { logout, isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (
      <button className="button" onClick={() => logout()}>
        Sing Out
      </button>
    )
  )
} 

export default logoutButton