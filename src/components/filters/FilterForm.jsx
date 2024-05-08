import Select from "react-select";
import {
  experienceOptions,
  minSalaryOptions,
  modeOptions,
  numberOfEmployeesOptions,
  roles,
} from "../../utils/constants";
import makeAnimated from "react-select/animated";
import "./filter-form.css";

const FilterForm = () => {
  // for animation effect
  const animatedComponents = makeAnimated();

  return (
    <div className="filters">

      <div className="select-container">
        <label className="label">Roles</label>
        <Select
          className="select"
          options={roles}
          placeholder="Roles"
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          isClearable={true}
        />
      </div>

      <div className="select-container">
        <label className="label">Number of Employees</label>
        <Select
          options={numberOfEmployeesOptions}
          placeholder="Number of Employees"
          className="select"
          components={animatedComponents}
          isClearable={true}
        />
      </div>

      <div className="select-container">
        <label className="label">Experience</label>
        <Select
          placeholder="Experience"
          components={animatedComponents}
          isClearable={true}
          options={experienceOptions}
          className="select"
        />
      </div>

      <div className="select-container">
        <label className="label">Remote</label>
        <Select
          className="select"
          placeholder="Remote"
          closeMenuOnSelect={false}
          isMulti
          components={animatedComponents}
          isClearable={true}
          options={modeOptions}
        />
      </div>

      <div className="select-container">
        <label className="label">Minimum Base Pay</label>
        <Select
          className="select"
          placeholder="Min Base Pay"
          components={animatedComponents}
          isClearable={true}
          options={minSalaryOptions}
        />
      </div>

      <div className="text-field-container">
        <label className="label">Search Company Name</label>
        <input
          type="text"
          className="text-field"
          placeholder="Enter Company Name"
        />
      </div>
      
    </div>
  );
};

export default FilterForm;
