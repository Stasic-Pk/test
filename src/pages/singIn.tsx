import React from "react"

import LoginButton from "../components/loginButton";

export function SingIn() {
  return (
    <>
      <div className="backGround">
        <div>
          <h1 className="SingIn"> Sing-In </h1> <br/>
          <input className="input" type="text" placeholder="Email" /> <br/>
          <input className="input" type="text" placeholder="Password" /> <br/>
          <small className="newAccount"> <a href="/singUp"> Create new account </a> </small> <br/>
          <LoginButton/> <br/>
          <small className="or"> or </small> <br/>
          <button className="button"> Continue with Google </button>
        </div>
      </div>
    </>
  )
}
