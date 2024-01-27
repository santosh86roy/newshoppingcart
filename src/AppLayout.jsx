import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
