import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import rst from "../assets/11.jpg";
import Footer from "./Footer";

const ChangePassword = () => {
  const [userPassword, setUserPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changeSuccess, setChangeSuccess] = useState(false);
  const userId = sessionStorage.getItem("UserId");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1001",
      addInfo: {
        UserId: userId,
        UserPassword: userPassword,
        NewPassword: newPassword,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Password changed successfully!");
        setUserPassword("");
        setNewPassword("");
        setChangeSuccess(true);
      } else {
        alert(data.rData.rMessage || "Failed to change password!");
        setUserPassword("");
        setNewPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error changing password: ${error.message}`);
    }
  };

  if (changeSuccess) {
    return <Navigate to="/userdashboard" />;
  }

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${rst})` }}
      >
        <div className="flex justify-center items-center bg-opacity-0 bg-black min-h-screen w-full">
          <div className="w-[24%] bg-white p-8 rounded-lg shadow-lg m-24">
            <h1 className="text-green-600 my-2 text-center text-2xl">
              Change Password
            </h1>
            <form onSubmit={handlePasswordChange} className="space-y-1">
              <div className="mb-4">
                <label
                  htmlFor="userpassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Enter current password:
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="userpassword"
                  placeholder="Enter current password here"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="newpassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Enter new password:
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="newpassword"
                  placeholder="Enter new password here"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to="/userdashboard"
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
