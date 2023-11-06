import React, { useState } from "react";
const Slot = () => {
  const [formData, setFormData] = useState({
    morning: "",
    afternoon: "",
    evening: ""
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from Flask:", data);
        // Handle response if needed
      } else {
        console.error("Failed to send data to Flask");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle fetch error
    }
  };

  return (
    <div className="container">
      <h1>Set Slot Timings</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="morning">Morning Slot</label>
          <input
            type="time"
            className="form-control"
            id="morning"
            value={formData.morning}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="afternoon">Afternoon Slot</label>
          <input
            type="time"
            className="form-control"
            id="afternoon"
            value={formData.afternoon}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="evening">Evening Slot</label>
          <input
            type="time"
            className="form-control"
            id="evening"
            value={formData.evening}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Slot;
