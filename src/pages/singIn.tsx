import React from "react";

export function SingIn() {
  return (
    <>
      <div className="backGround">
        <div className="content">
          <h1>Sing In</h1> <br/>
          <input className="input" type="text" placeholder="Email" /> <br/>
          <input className="input" type="text" placeholder="Password" /> <br/>
          <small className="newAccount">Create new account</small> <br/>
          <button className="button">Sign-in</button> <br/>
          <small>or</small> <br/>
          <button className="button">Continue with Google</button>
        </div>
      </div>
    </>
  )
}
