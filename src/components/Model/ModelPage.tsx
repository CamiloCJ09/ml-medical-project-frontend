import React, { useState } from "react";
import { Button } from "reactstrap";
import "./ModelPage.css";

function ModelPage() {
  // State variables to store the selected values
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission behavior
    // You can handle the form submission logic here
    console.log("Field 1:", field1);
    console.log("Field 2:", field2);
    console.log("Field 3:", field3);
  };

  return (
    <div className="model-page">
      <h2>Model Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hinselmann_0:
          <select value={field1} onChange={(e) => setField1(e.target.value)}>
            <option value="">Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br />
        <label>
          Citology_0:
          <select value={field2} onChange={(e) => setField2(e.target.value)}>
            <option value="">Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br />
        <label>
          Schiller_0:
          <select value={field3} onChange={(e) => setField3(e.target.value)}>
            <option value="">Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br />
        <div>
          <Button type="submit" color="primary">
            Get results
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ModelPage;
