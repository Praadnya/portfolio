import React, { useState } from "react";
import axios from "axios";

const InternDetails = () => {
  const [name, setName] = useState("");
  const [intern, setIntern] = useState(null);
  const [error, setError] = useState("");

  const fetchInternDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/intern/${name}`);
      setIntern(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Intern not found!");
      setIntern(null);
    }
  };

  return (
    <div>
      <h1>Fetch Intern Details</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchInternDetails}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {intern && (
        <div>
          <h2>Intern Details</h2>
          <p>
            <strong>Name:</strong> {intern.name}
          </p>
          <p>
            <strong>Email:</strong> {intern.email}
          </p>
          <p>
            <strong>Education:</strong> {intern.education}
          </p>
          <p>
            <strong>Projects:</strong> {intern.projects}
          </p>
          <p>
            <strong>Experience:</strong> {intern.experiences}
          </p>
          <p>
            <strong>Phone:</strong> {intern.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default InternDetails;
