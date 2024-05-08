export function filterData(filter, jobList) {
  let filteredList = jobList;

  // filtering based on mode (Remote, In-Office, Hybrid)
  if (filter?.mode?.length > 0) {
    let filteredJobs = [];

    for (let modeVal of filter.mode) {
      let filteredJobsForMode;

      if (modeVal.toLowerCase() === "remote") {
        filteredJobsForMode = filteredList.filter(
          (jd) => jd?.location?.toLowerCase() === "remote"
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

  // filtering based on roles
  if (filter?.roles?.length > 0) {
    filteredList = filteredList?.filter((jd) =>
      filter?.roles?.includes(jd?.jobRole)
    );
  }

  // filtering based on experience
  if (filter?.experience) {
    filteredList = filteredList?.filter(
      (jd) => jd?.minExp <= filter?.experience && jd?.maxExp >= filter?.experience
    );
  }

  // filtering based on salary
  if (filter?.minPay) {
    filteredList = filteredList?.filter(
      (jd) => jd?.minJdSalary >= filter?.minPay
    );
  }

  // filtering based on companyName
  if (filter?.companyName) {
    filteredList = filteredList?.filter((jd) =>
      jd?.companyName
        ?.toLowerCase()
        .includes(filter?.companyName?.toLowerCase())
    );
  }

  return filteredList;
}
