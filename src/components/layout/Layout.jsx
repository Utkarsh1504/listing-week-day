import { useEffect, useState } from "react";
import { fetchData } from "../../actions/fetchData";
import FilterForm from "../filters/FilterForm";
import JobCard from "../jobs/JobCard";
import "./layout.css";

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

  // for infinite scroll checking scroll position
  const intersectionObserver = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      fetchJobData();
    }
  };

  // fetch more jobs
  useEffect(() => {
    window.addEventListener("scroll", intersectionObserver);
    // clean up function
    return () => window.removeEventListener("scroll", intersectionObserver);
  }, []);

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
      <div className="filter-container">
        <FilterForm />
      </div>

      <div className="jobs-container">
        {jobs?.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
