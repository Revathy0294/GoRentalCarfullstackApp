import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/reset.css';
import Home from './pages/Home';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import UserBookings from './pages/UserBookings';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/:carid" element={<BookingCar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/userbookings" element={<UserBookings />} />
          <Route path="/admin" element={<AdminHome />} />
          {/* <Route path="/admin" element={<ProtectedAdminRoute />} /> */}
          <Route path="/editcar/:carid" element={<EditCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtectedRoute(props) {
  if (localStorage.getItem('user')) {
    return <Route {...props} />;
  } else {
    return <Navigate to='/login' />;
  }
}


// export function ProtectedAdminRoute() {
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (user && user.username === 'admin') {
//     return <Route element={<AdminHome />} />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }