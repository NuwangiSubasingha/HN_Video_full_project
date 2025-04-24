import "./app.styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./component/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreatePackage from "./Pages/CreatePackage";
import Package from "./Pages/Package/Package";
import Packages from "./Pages/Packages/Packages";
import EditPackage from "./Pages/EditPackage/EditPackage";
const App = () => {
return (
<div>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/packages/create" element={<CreatePackage />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/all/:id" element={<Package/>} />
      <Route path="/edit/packages/:id" element={<EditPackage />} />
    </Routes>
  </Router>
 </div>
);
};

export default App;
