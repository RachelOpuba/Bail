import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message for the field being updated
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "Please complete this required field";
      valid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Please complete this required field";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Please complete this required field";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Please complete this required field";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic
      console.log(formData);
    }
  };

  return (
    <div>
      <div className="relative bg-[#030b1d] w-full min-h-[400px] md:min-h-[450px] lg:min-h-[600px] pt-10 lg:pt-0">
        <div className="flex flex-col lg:flex-row mb-10 pt-40 w-full">
          <div className="w-1/2 ps-20 border-white">
            <div className=" text-white">
              <h2 className="text-lg  pb-4 uppercase ">Contact us</h2>
              <p className=" text-3xl md:text-5xl font-bold">
                We are <br /> here to help
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative lg:absolute right-0 mx-5">
            <form
              onSubmit={handleSubmit}
              className="bg-white w-full max-w-[650px] shadow-xl rounded-xl py-10 px-8"
            >
              <h2 className="text-[#222222] pb-2 font-medium text-4xl tracking-tighter">
                Send us a message
              </h2>

              <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6">
                <div className="flex flex-col w-full lg:w-1/2 mb-4 lg:mb-0">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex flex-col w-full lg:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                  
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md h-32"
                  
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
