import { Route, Routes } from 'react-router-dom';

import { SingIn } from "./pages/singIn";
import { SingUp } from "./pages/singUp";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <SingIn/> }/>
        <Route path="/singUp" element={ <SingUp/> }/>
      </Routes>
    </>
  )
}

export default App