import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About Us/index";
import Services from "./pages/Services/index";
import CRM from "./pages//CRM/index";
import Add from "./pages/CRM pages/Add/index"
import NotFound from "pages/NotFound";
const Signup = React.lazy(() => import("pages/Signup"));
const SignupOne = React.lazy(() => import("pages/SignupOne"));
const Campaign = React.lazy(() => import("pages/Campaign"));
const Campaignmanager = React.lazy(() => import("pages/Campaignmanager"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/campaignmanager" element={<Campaignmanager />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/signupone" element={<SignupOne />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
