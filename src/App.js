import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Notice from "./Pages/Notice";
import RouteTrip from "./Pages/RouteTrip";
import RouteTripDetail from "./Pages/RouteTripDetail";
import UserBoard from "./Pages/UserBoard";
import UserFreeBoard from "./Pages/UserFreeBoard";
import UserRegion from "./Pages/UserRegion";
import UserRegionBoard from "./Pages/UserRegionBoard";
import UserMypage from "./Pages/UserMypage";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/routetrip" element={<RouteTrip />} />
      <Route path="/recomend_best" element={<RouteTripDetail />} />
      <Route path="/userboard" element={<UserBoard />} />
      <Route path="/userfreeboard" element={<UserFreeBoard />} />
      <Route path="/userregion" element={<UserRegion />} />
      <Route path="/userregionboard" element={<UserRegionBoard />} />
      <Route path="/usermypage" element={<UserMypage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
