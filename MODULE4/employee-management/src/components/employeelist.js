import React from "react";
import AddEmployee from "./addemployee";
import EmployeeUpdate from "./employeeupdate";
import Profile from "./profile";

function EmployeeList() {
  return (
    <div>
      <h1>Employee Management System</h1>

      <AddEmployee />
      <EmployeeUpdate />
      <Profile />
    </div>
  );
}

export default EmployeeList;