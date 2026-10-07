import React, { useState } from "react";

function EmployeeUpdate() {
  const [employeeId, setEmployeeId] = useState("101");
  const [name, setName] = useState("Ravi Kumar");
  const [email, setEmail] = useState("ravi@gmail.com");
  const [department, setDepartment] = useState("IT");
  const [salary, setSalary] = useState("30000");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!employeeId || !name || !email || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    alert("Employee updated successfully!");
  };

  return (
    <div className="page">
      <h2>Employee Update</h2>

      <form onSubmit={handleUpdate}>
        <label>Employee ID</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        <label>Employee Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Department</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <label>Salary</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EmployeeUpdate;
