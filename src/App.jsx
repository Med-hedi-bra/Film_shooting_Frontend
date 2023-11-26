import "./App.css";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Multi from "./Components/Multi";
import { AuthProvider, useAuth } from "./Components/Auth";
import Dashbored from "./Components/Dashbored";
import Profile from "./Components/Profile";
import Admin from "./Components/Admin";
import DemandDetails from "./Components/DemandDetails";
import MultiUpdate from "./Components/MultiUpdate";
import { useEffect, useState } from "react";
import RequireAuth from "./Components/RequireAuth"
import ChatAdmin from "./Components/chat/admin/ChatAdmin";
import ChatUser from "./Components/chat/user/ChatUser";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />

          {/* <Route path="/add" element={<RequireAuth><Multi/></RequireAuth>}></Route>
          <Route path="/dashbored" element={<RequireAuth><Dashbored/></RequireAuth>}></Route>
          <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}></Route>
          <Route
            path="/demand/:idDemand"
            element={<RequireAuth><DemandDetails></DemandDetails></RequireAuth>}
          ></Route>
          <Route path="/add" element={<RequireAuth><Multi></Multi></RequireAuth>}></Route>
          <Route path="/update" element={<RequireAuth><MultiUpdate></MultiUpdate></RequireAuth>}></Route> */}

          <Route path="/add" element={<Multi></Multi>}></Route>
          <Route path="/dashbored" element={<Dashbored/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/demand/:idDemand" element={<DemandDetails></DemandDetails>}
          ></Route>
          <Route path="/update" element={<MultiUpdate></MultiUpdate>}></Route>
          <Route path="/support" element={<ChatUser></ChatUser>}></Route>
          <Route path="/admin" element={<ChatAdmin></ChatAdmin>}></Route>
 

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
