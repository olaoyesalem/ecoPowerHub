import axios from "axios";
import { useState } from "react";
import img from "../../../constants/images";
import Button from "../../Button/Button";
import Register from "../../Register/Register";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Company from "../../Company/Company";
import SignUpForm from "../../SignUpForm/SignUpForm";

const CreateAccount = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   first_name: "",
  //   last_name: "",
  //   phone_number: "",
  //   user_type: "",
  // });

  // const handleInputChange = (e) => {
  //   console.log(e.target);
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   try {
  //     const response = await axios.post(
  //       "https://ecopowerhub-backend-production.up.railway.app/users/signup/",
  //       formData
  //     );

  //     console.log("Form submitted successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  return (
    <Register
      src={img.space6}
      pageHead="Create Account"
      pageText1="Welcome! Enter your details and start creating,collecting and selling NFTs"
    >
      <Company />
      

      
    </Register>
  );
};

export default CreateAccount;
