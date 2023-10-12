import React, { useState } from "react";

function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setJob(e.target.value);
  };

  const handleClick = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };
  return (
    <div>
      <label htmlFor="job">Name's Job: </label>
      <input value={job} onChange={handleChange} type="text" id="job" />
      <button onClick={handleClick}>Submit</button>
      <ul>
        {jobs.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
