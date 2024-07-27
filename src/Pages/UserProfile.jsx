import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { MdAttachEmail } from "react-icons/md";
import { RiMailCheckFill } from "react-icons/ri";
import { TbPhoneCheck } from "react-icons/tb";
import { HiPhoneMissedCall } from "react-icons/hi";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/160"
  );

  const fetchUserCalled = useRef(false);

  useEffect(() => {
    if (!fetchUserCalled.current) {
      fetchUser();
      fetchUserCalled.current = true;
    }
  }, []);

  const userId = sessionStorage.getItem("UserId");

  const fetchUser = async () => {
    const requestData = {
      eventID: "1002",
      addInfo: {
        UserId: "",
        Email: userId,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.rData && data.rData.rCode === 0) {
        setUserData(data.rData);
        setProfilePic(
          data.rData.ProfilePic || "https://via.placeholder.com/160"
        );
      } else {
        setUserData({});
        alert("Failed to get user details!!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to fetch user details.");
      setUserData({});
    }
  };

  return (
    <section className="bg-gray-200 h-screen">
      <div className="container mx-auto py-4">
        <div className="mb-4">
          <nav className="bg-white rounded p-3 shadow">
            <ol className="flex space-x-2">
              <li>
                <Link
                  to="/UserDashBoard"
                  className="text-blue-600 hover:underline"
                >
                  DashBoard
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link
                  to="/UserProfile"
                  className="text-blue-600 hover:underline"
                >
                  Account
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-gray-500">My Profile</li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col justify-center items-center text-center">
              <img
                src={profilePic}
                alt="Profile pic"
                className="rounded-full"
                style={{ width: "160px", height: "160px" }}
              />
              {Object.keys(userData).length > 0 ? (
                <>
                  <div>
                    <p className="text-gray-600">{userData.UserName}</p>
                    <p className="text-gray-500 mt-2">{userData.Email}</p>
                  </div>
                </>
              ) : (
                <p>No user data available.</p>
              )}
            </div>
          </div>

          <div className="flex justify-center bg-white rounded-lg shadow p-6">
            <div className="space-y-4 w-full md:w-1/2">
              {Object.keys(userData).length > 0 ? (
                <div className="flex flex-col justify-center items-start space-y-2">
                  <p>
                    <strong>Role:</strong> {userData.Role}
                  </p>
                  <p>
                    <strong>User Id:</strong> {userData.UserId}
                  </p>
                  <p>
                    <strong>Username:</strong> {userData.UserName}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.Email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {userData.Phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {userData.Address}
                  </p>
                  <p>
                    <strong>Created On:</strong> {userData.RegistrationDate}
                  </p>
                  <p className="flex flex-row justify-center items-center">
                    <strong>Email Verified:</strong>&nbsp;
                    <span>
                      {userData.IsEmailVerified ? (
                        <RiMailCheckFill />
                      ) : (
                        <MdAttachEmail />
                      )}
                    </span>
                  </p>
                  <p className="flex flex-row justify-center items-center">
                    <strong>Phone Verified:</strong>&nbsp;
                    <span>
                      {userData.IsPhoneVerified ? (
                        <TbPhoneCheck />
                      ) : (
                        <HiPhoneMissedCall />
                      )}
                    </span>
                  </p>
                </div>
              ) : (
                <p>No user data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
