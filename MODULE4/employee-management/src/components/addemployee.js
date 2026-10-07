import React, { useState } from "react";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    alert("Employee added successfully!");

    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="page">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Department</label>
        <input
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <label>Salary</label>
        <input
          type="number"
          placeholder="Enter salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;