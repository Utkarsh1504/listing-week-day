export function filterData(filter, jobList) {
  let filteredList = jobList;

  // filtering based on mode (Remote, In-Office, Hybrid)
  if (filter?.mode?.length > 0) {
    let filteredJobs = [];

    for (let modeVal of filter.mode) {
      let filteredJobsForMode;

      if (modeVal.toLowerCase() === "remote") {
        filteredJobsForMode = filteredList.filter(
          (job) => job?.location?.toLowerCase() === "remote"
        );
      } else if (modeVal.toLowerCase() === "hybrid") {
        filteredJobsForMode = filteredList.filter(
          (jd) => jd?.location.toLowerCase() === "hybrid"
        );
      } else if (modeVal.toLowerCase() === "in-office") {
        filteredJobsForMode = filteredList.filter(
          (jd) =>
            jd?.location.toLowerCase() !== "remote" &&
            jd?.location.toLowerCase() !== "hybrid"
        );
      }

      filteredJobs = filteredJobs.concat(filteredJobsForMode);
    }
    filteredList = Array.from(new Set(filteredJobs));
  }

  return filteredList;
}
