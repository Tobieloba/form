import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import CountryFlag from "react-country-flag";
import "react-phone-input-2/lib/style.css";
import { AiOutlineCheck } from "react-icons/ai";
import { steps } from "@/utils";
import { FaArrowRight } from "react-icons/fa";

// Country options with flags
const countryOptions = [
  {
    value: "us",
    label: (
      <div className="flex items-center">
        <CountryFlag countryCode="US" svg className="mr-2" />
        United States
      </div>
    ),
  },
  {
    value: "ng",
    label: (
      <div className="flex items-center">
        <CountryFlag countryCode="NG" svg className="mr-2" />
        Nigeria
      </div>
    ),
  },
  {
    value: "ca",
    label: (
      <div className="flex items-center">
        <CountryFlag countryCode="CA" svg className="mr-2" />
        Canada
      </div>
    ),
  },
  {
    value: "gb",
    label: (
      <div className="flex items-center">
        <CountryFlag countryCode="GB" svg className="mr-2" />
        United Kingdom
      </div>
    ),
  },
  {
    value: "au",
    label: (
      <div className="flex items-center">
        <CountryFlag countryCode="AU" svg className="mr-2" />
        Australia
      </div>
    ),
  },
  {
    value: "fr",
    label: (
      <div className="flex items-center">
        <CountryFlag countryCode="FR" svg className="mr-2" />
        France
      </div>
    ),
  },
];

const StepIndicator = ({ currentStep }) => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center mb-8 pb-25">
      {/* Shorter horizontal line in the center */}
      <div className="absolute top-4 w-[500px] h-0.5 bg-gray-300"></div>

      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col mx-8 items-center relative z-10"
        >
          {/* Step Circle */}
          <button
            onClick={() => navigate(step.path)}
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
              index + 1 <= currentStep
                ? "bg-green-500 border-green-500"
                : "bg-white border-gray-300"
            }`}
          >
            {index + 1 <= currentStep ? (
              <AiOutlineCheck className="text-white" />
            ) : (
              <span className="text-gray-500">{index + 1}</span>
            )}
          </button>

          {/* Step Label */}
          <span
            className={`mt-2 text-sm ${
              index + 1 === currentStep
                ? "text-green-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function YourApplication() {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [step, setStep] = useState(1);

  const handleCountryChange = (option) => setSelectedCountry(option);

  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [state, setState] = useState("");
  const [dob, setDOB] = useState("");
  const [city, setCity] = useState("");
  const [aprtment, setApartment] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, fName, lName, state, dob, city, aprtment, address });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-900 mx-auto p-4 w-[1000px] items-center "
    >
      <StepIndicator currentStep={step} />
      <h1 className="text-center font-bold text-2xl">Personal Information</h1>
      <div className="grid grid-cols-1 gap-4 max-w-900 mt-10 sm:grid-cols-3">
        {/* Form fields */}

        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* More form fields */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date Of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <Select
            options={countryOptions}
            placeholder="Select Country"
            className="mt-1"
            value={selectedCountry}
            onChange={handleCountryChange}
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "rgb(209 213 219)",
                borderRadius: "0.375rem",
                padding: "0.25rem",
              }),
            }}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block py-2 text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <PhoneInput
            country={selectedCountry.value.toLowerCase()}
            inputClass=""
            containerClass=""
            onChange={(phone) => console.log(phone)}
          />
        </div>
      </div>
      <hr className="mt-11" />

      <h1 className="font-bold text-2xl mt-10">Residential Identity</h1>

      <div>
        <div className="grid grid-cols-1 gap-4 max-w-900 mt-10 sm:grid-cols-3 ">
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="apartment"
              className="block text-sm font-medium text-gray-700"
            >
              Apartment, suite etc.
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Apartment, Suite etc."
              value={aprtment}
              onChange={(e) => setApartment(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="col-span-3">
            <label
              htmlFor="residentialAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Residential Address
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Residential Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 border  border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-16">
        <button className="flex p-2 mt-4 px-6 justify-center gap-3 text-white items-center rounded-md  bg-orange-600">
          Continue <FaArrowRight size="15px" className=" text-white" />
        </button>
      </div>
    </form>
  );
}
