export const roles = [
  {
    label: "ENGINEERING",
    options: [
      { label: "Backend", id: "1", value: "backend" },
      { label: "Frontend", id: "2", value: "frontend" },
      { label: "Fullstack", id: "3", value: "fullstack" },
      { label: "Android", id: "5", value: "android" },
      { label: "IOS", id: "6", value: "ios" },
      { label: "Flutter", id: "7", value: "flutter" },
      { label: "Dev-Ops", id: "9", value: "dev-ops" },
      { label: "Data Science", id: "10", value: "data science" },
    ],
  },
  {
    label: "PRODUCT",
    options: [{ id: "1", label: "Product Manager", value: "Product Manager" }],
  },
  {
    label: "SALES",
    options: [{ id: "1", label: "Account Manager", value: "Account Manager" }],
  },
  {
    label: "HR",
    options: [{ id: "1", label: "hr", value: "hr" }],
  },
];

export const numberOfEmployeesOptions = [
  { label: "1-10", id: "1", value: "1-10" },
  { label: "11-20", id: "2", value: "11-20" },
  { label: "21-50", id: "3", value: "21-50" },
  { label: "51-100", id: "4", value: "51-100" },
  { label: "101-200", id: "5", value: "101-200" },
  { label: "201-500", id: "6", value: "201-500" },
  { label: "500+", id: "7", value: "500+" },
];

export const experienceOptions = [
  { label: "1 Year", value: 1, id: "1" },
  { label: "2 Years", value: 2, id: "2" },
  { label: "3 Years", value: 3, id: "3" },
  { label: "4 Years", value: 4, id: "4" },
  { label: "5 Years", value: 5, id: "5" },
  { label: "6 Years", value: 6, id: "6" },
  { label: "7 Years", value: 7, id: "7" },
  { label: "8 Years", value: 8, id: "8" },
  { label: "9 Years", value: 9, id: "9" },
  { label: "10 Years", value: 10, id: "10" },
];

export const modeOptions = [
  { label: "Remote", id: "1", value: "remote" },
  { label: "Hybrid", id: "2", value: "hybrid" },
  { label: "In-Office", id: "3", value: "in-office" },
];

export const minSalaryOptions = [
  { label: "0L", id: "1", value: 0 },
  { label: "10L", id: "2", value: 10 },
  { label: "20L", id: "3", value: 20 },
  { label: "30L", id: "4", value: 30 },
  { label: "40L", id: "5", value: 40 },
  { label: "50L", id: "6", value: 50 },
  { label: "60L", id: "7", value: 60 },
  { label: "70L", id: "8", value: 70 },
];

export const defaultFilters = {
  roles: [],
  experience: null,
  minPay: null,
  mode: [],
  employees: null,
  companyName: null,
};
