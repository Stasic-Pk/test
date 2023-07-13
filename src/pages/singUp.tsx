export function SingUp() {
  return (
    <>
      <div className="backGround">
        <div>
          <h1 className="SingIn"> Sing-Up </h1> <br/>
          <input className="input" type="text" placeholder="Username" /> <br/>
          <input className="input" type="text" placeholder="Email" /> <br/>
          <input className="input" type="text" placeholder="Password" /> <br/>
          <input className="input" type="text" placeholder="Repeat password" /> <br/>
          <small className="newAccount"> <a href="/"> Sing-in </a> </small> <br/>
          <button className="button"> Sign-Up </button> <br/>
          <small className="or"> or </small> <br/>
          <button className="button"> Continue with Google </button>
        </div>
      </div>
    </>
  )
}
