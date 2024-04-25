import React, { useState } from 'react';

function ModelPage() {
  // State variables to store the selected values
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission behavior
    // You can handle the form submission logic here
    console.log("Field 1:", field1);
    console.log("Field 2:", field2);
    console.log("Field 3:", field3);
  };

  return (
    <div>
      <h2>Model Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Field 1:
          <select value={field1} onChange={(e) => setField1(e.target.value)}>
            <option value="">Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br />
        <label>
          Field 2:
          <select value={field2} onChange={(e) => setField2(e.target.value)}>
            <option value="">Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br />
        <label>
          Field 3:
          <select value={field3} onChange={(e) => setField3(e.target.value)}>
            <option value="">Select</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ModelPage;
