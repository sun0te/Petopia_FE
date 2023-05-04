import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserUpdate from "./Pages/UserUpdate";
import FindAccountEmail from "./Pages/FindAccountEmail";
import FindAccountPassword from "./Pages/FindAccountPassword";
import Notice from "./Pages/Notice";
import RouteTrip from "./Pages/RouteTrip";
import RouteTripDetail from "./Pages/RouteTripDetail";
import RouteTripWrite from "./Pages/RouteTripWrite";
import Write from "./Pages/Write";
import Update from "./Pages/Update";
import Detail from "./Pages/Detail";
import UserBoard from "./Pages/UserBoard";
import UserFreeBoard from "./Pages/UserFreeBoard";
import UserRegion from "./Pages/UserRegion";
import UserRegionBoard from "./Pages/UserRegionBoard";
import UserMypage from "./Pages/UserMypage";
import NotFound from "./Pages/NotFound";
import FreeBoardDetail from "./Components/UserBoards/FreeBoardDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userupdate" element={<UserUpdate />} />
      <Route path="/findaccountemail" element={<FindAccountEmail />} />
      <Route path="/findaccountpassword" element={<FindAccountPassword />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/routetrip" element={<RouteTrip />} />
      <Route path="/routetripwrite" element={<RouteTripWrite />} />
      <Route path="/recomend_best" element={<RouteTripDetail />} />
      <Route path="/write" element={<Write />} />
      <Route path="/update" element={<Update />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/userboard" element={<UserBoard />} />
      <Route path="/userfreeboard" element={<UserFreeBoard />} />
      <Route path="/userregion" element={<UserRegion />} />
      <Route path="/userregionboard" element={<UserRegionBoard />} />
      <Route path="boarddetail" element={<FreeBoardDetail />} />
      <Route path="/usermypage" element={<UserMypage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
