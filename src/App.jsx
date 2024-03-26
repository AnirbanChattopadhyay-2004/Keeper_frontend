// import Delete from "../components/Delete.jsx"
// import Notes from "./components/Notes.jsx";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signlog from "./Signin_comp/Signlog.jsx"
import Keeper from "./Signin_comp/Keeper.jsx"
import Signin from "./Signin_comp/Signin.jsx"
import Signup from "./Signin_comp/Signup.jsx"
export default function App()
{ 
  //always use * in nested routing 
  const auth=localStorage.getItem("token");
  return (
  
  <>
  <Router>
  <Routes>
    <Route exact path="/" element={(auth)?<Keeper/>:<Signlog/>}></Route>
    <Route exact path="/Keeper/*" element={<Keeper/>}></Route> 
    <Route exact path="/Signlog" element={<Signlog/>}></Route> 
    <Route exact path="/Signin" element={<Signin/>}></Route> 
    <Route exact path="/Signup" element={<Signup/>}></Route> 
  </Routes>
  </Router>  
  </>
  )
}