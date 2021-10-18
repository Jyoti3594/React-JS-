import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJob = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    setJob(newJob);
    setLoading(false);
  };
  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading..</h2>
      </section>
    );
  }
  const { company, title, dates, duties } = job[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="job-center">
        {/*btn container */}
        <div className="btn-container">
          {job.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/*Job Info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duties}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        More Info
      </button>
    </section>
  );
}

export default App;
