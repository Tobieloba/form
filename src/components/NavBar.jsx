import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import { MdAccountCircle } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="max-w-1400 mx-auto py-4 px-8 pb-8">
      {/* Navbar Header */}
      <div className="flex justify-between">
        <img src={Logo} alt="Logo" className="h-auto rounded-md mt-4 px-10" />
        <div className="px-10">
          <button className="flex items-center p-2 mt-4 px-6 justify-between rounded-md border border-slate-500">
            <MdAccountCircle size="20px" className="mr-2" />
            Account
          </button>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="font-bold flex items-center justify-center space-x-5">
        <NavLink to="/dashboard">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "underline underline-offset-8 text-orange-600"
                  : "hover:text-blue-500"
              }
            >
              Dashboard
            </span>
          )}
        </NavLink>
        <div>
          <NavLink to="/yourapplication">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "underline underline-offset-8 text-orange-600"
                    : "hover:text-blue-500"
                }
              >
                Your Application
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 w-full  bg-gray-100 py-4 h-8 text-center">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Lalivah Interiors. All rights reserved.
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <NavLink to="/privacy-policy" className="hover:text-blue-500">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-of-service" className="hover:text-blue-500">
            Terms of Service
          </NavLink>
          <NavLink to="/contact-us" className="hover:text-blue-500">
            Contact Us
          </NavLink>
        </div>
      </footer>
    </div>
  );
}
