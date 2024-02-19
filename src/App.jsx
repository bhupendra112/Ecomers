import './App.css'
import Login from './screens/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/loginData" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
{/* <Login/> */}
    </>
  )
}

export default App
