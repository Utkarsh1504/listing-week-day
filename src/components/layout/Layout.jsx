import { useEffect, useState } from "react";
import { fetchData } from "../../actions/fetchData";
import FilterForm from "../filters/FilterForm";
import JobCard from "../jobs/JobCard";
import CardSkeleton from "../skeletons/CardSkeleton";
import "./layout.css";

const Layout = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetching and dispatching api data into our redux store
  const fetchJobData = async () => {
    setLoading(true);
    try {
      const response = await fetchData();
      if (!response) return;

      setJobs(response.jdList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  // for infinite scroll checking scroll position
  const intersectionObserver = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      fetchJobData();
    }
  };

  // fetch more jobs
  useEffect(() => {
    window.addEventListener("scroll", intersectionObserver);
    // clean up function
    return () => window.removeEventListener("scroll", intersectionObserver);
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
        {jobs.length > 0
          ? jobs?.map((job, index) => <JobCard job={job} key={index} />)
          : !loading && <p>No jobs found</p>}
        {loading && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
