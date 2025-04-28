import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ManageBeneficiary from "./components/ManageBeneficiary";
import NavBar from "./components/NavBar";
import Update from "./components/Update";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <div className="h-full" >
    <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home></Home>}>
        <Route path="ManageBeneficiary" element={<ManageBeneficiary/>}/>
        </Route>
        <Route path="Home/ManageBeneficiary/Update/:id" element={<Update/>}/>
        <Route path="Home/ManageBeneficiary/ViewDetails/:id" element={<ViewDetails/>}/>
      </Routes>
      </div>
  );
}

export default App;
