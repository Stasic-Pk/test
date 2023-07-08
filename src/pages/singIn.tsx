import React from "react";

export function SingIn() {
  return (
    <>
      <div className="backGround">
        <div className="content">
          <h1>Sing In</h1>
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="text" placeholder="Password" />
          <small className="newAccount">Create new account</small>
          <button className="button">Sign-in</button>
          <small>or</small>
          <button className="button">Continue with Google</button>
        </div>
      </div>
    </>
  )
}
