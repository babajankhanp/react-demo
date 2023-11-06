import React, { useState } from "react";
import styled from "styled-components";

const PillEntry = () => {
  const [pillDetails, setPillDetails] = useState({
    pillName: "",
    timeSlots: [],
    startDate: "",
    endDate: "",
    pillNotes: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "timeSlot") {
      const checkedTimeSlots = e.target.checked
        ? [...pillDetails.timeSlots, value]
        : pillDetails.timeSlots.filter((slot) => slot !== value);
      setPillDetails({ ...pillDetails, timeSlots: checkedTimeSlots });
    } else {
      setPillDetails({ ...pillDetails, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://http://127.0.0.1:5000//submit-pill",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pillDetails)
        }
      );

      if (response.ok) {
        console.log("Pill data sent successfully!");
        // Perform actions after successful data submission
      } else {
        console.error("Failed to send pill data.");
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle fetch error
    }
  };

  return (
    <PillContainer>
      <div className="container">
        <h1 className="centered-text">Pill Details</h1>

        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="pillName">Pill Name</label>
            <input
              type="text"
              id="pillName"
              name="pillName"
              value={pillDetails.pillName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <label>Select Time Slot</label>
            <div>
              <input
                type="checkbox"
                id="morningSlot"
                name="timeSlot"
                value="morning"
                onChange={handleInputChange}
              />
              <label htmlFor="morningSlot">Morning</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="afternoonSlot"
                name="timeSlot"
                value="afternoon"
                onChange={handleInputChange}
              />
              <label htmlFor="afternoonSlot">Afternoon</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="eveningSlot"
                name="timeSlot"
                value="evening"
                onChange={handleInputChange}
              />
              <label htmlFor="eveningSlot">Evening</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Starting date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={pillDetails.startDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">Ending date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={pillDetails.endDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pillNotes">Notes</label>
            <textarea
              id="pillNotes"
              name="pillNotes"
              rows="3"
              value={pillDetails.pillNotes}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Pill
          </button>
        </Form>
      </div>
    </PillContainer>
  );
};

const PillContainer = styled.div`

  .container {

  }

  .centered-text {
    font-size: 24px;
    margin-top: 20px;
  }

  .form-group {
    margin-top: 20px;
  }
`;

const Form = styled.form`
  .form-group {
    label {
      display: flex;
      margin-bottom: 5px;
    }

    input[type="text"],
    input[type="date"],
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 5px;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
    }

    input[type="checkbox"] {
      margin-right: 10px;
    }
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export default PillEntry;
