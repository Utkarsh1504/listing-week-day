import { useEffect, useState } from "react";
import { fetchData } from "../../actions/fetchData";
import FilterForm from "../filters/FilterForm";

const Layout = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobData = async () => {
    try {
      const response = await fetchData();
      if (!response) return;
      setJobs(response.jdList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div className="app-container">
      <h2
        style={{
          margin: "20px",
          marginLeft: "50px",
          padding: "10px",
        }}
      >
        Weekday Job Listing
      </h2>

      <FilterForm />

      {jobs?.map((job, index) => (
        <div key={index}>{job.jobRole}</div>
      ))}
    </div>
  );
};

export default Layout;
