import React from "react";

function Profile() {
  return (
    <div className="page">
      <h2>Employee Profile</h2>

      <div className="profile-card">
        <h3>Ravi Kumar</h3>

        <p>
          <b>Employee ID:</b> 101
        </p>

        <p>
          <b>Email:</b> ravi@gmail.com
        </p>

        <p>
          <b>Department:</b> IT
        </p>

        <p>
          <b>Position:</b> Software Developer
        </p>

        <p>
          <b>Salary:</b> ₹30,000
        </p>
      </div>
    </div>
  );
}

export default Profile;