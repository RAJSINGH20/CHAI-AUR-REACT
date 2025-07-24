import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Project_2/Footer/Footer';
import Background_changer from '../Background_Changer/Background_changer';
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow px-4 py-6">
        <div className="border border-gray-400 p-6 rounded-2xl shadow-md bg-white">
        <Outlet />
        </div>
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
