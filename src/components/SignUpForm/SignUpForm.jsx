import { useState } from "react";
import Company from "../Company/Company";
import Individual from "../Individual/Individual";

const SignUpForm = () => {
  const [isCompany, setIsCompany] = useState(false);

  const handleUserTypeChange = (event) => {
    setIsCompany(event.target.value === "company");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          User Type:
          <select onChange={handleUserTypeChange}>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
        </label>
      </div>

      <div>{isCompany ? <Company /> : <Individual />}</div>
    </form>
  );
};

export default SignUpForm;
{/* <form onSubmit={handleSubmit}>
  <div>
    <label>
      User Type:
      <select onChange={handleUserTypeChange}>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
      </select>
    </label>
  </div>

  <div>{isCompany ? <Company /> : <Individual />}</div>
</form>; */}