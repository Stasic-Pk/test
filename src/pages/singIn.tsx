export function SingIn() {
  return (
    <>
      <div className="backGround">
        <div>
          <h1 className="SingIn"> Sing-In </h1> <br/>
          <input className="input" type="text" placeholder="Email" /> <br/>
          <input className="input" type="text" placeholder="Password" /> <br/>
          <small className="newAccount"> <a href="/singUp"> Create new account </a> </small> <br/>
          <button className="button"> Sign-In </button> <br/>
          <small className="or"> or </small> <br/>
          <button className="button"> Continue with Google </button>
        </div>
      </div>
    </>
  )
}
