import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const EditProfile = () => {
  const [userData, setUserData] = useState({});
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/100"
  );
  const [isEditingPic, setIsEditingPic] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchUserCalled = useRef(false);

  useEffect(() => {
    if (!fetchUserCalled.current) {
      fetchUser();
      fetchUserCalled.current = true;
    }
  }, []);

  let userId = sessionStorage.getItem("UserId");
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
          data.rData.ProfilePic || "https://via.placeholder.com/100"
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

  const handleUpdatePic = async () => {
    const requestData = {
      eventID: "1002",
      addInfo: {
        Email: userId,
        ProfilePic: profilePic,
      },
    };
    try {
      const response = await fetch("http://localhost:2005/editProfile", {
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
          data.rData.ProfilePic || "https://via.placeholder.com/100"
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
    setIsEditingPic(false);
  };

  const handleDeletePic = async () => {
    const requestData = {
      eventID: "1003",
      addInfo: {
        Email: userId,
        ProfilePic: profilePic,
      },
    };
    try {
      const response = await fetch("http://localhost:2005/editProfile", {
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
        setProfilePic("https://via.placeholder.com/100");
      } else {
        setUserData({});
        alert("Failed to get user details!!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to fetch user details.");
      setUserData({});
    }
    setIsEditingPic(false);
  };

  const handleEditInfo = async (event) => {
    event.preventDefault();
    const requestData = {
      eventID: "1001",
      addInfo: {
        UserId: userData.UserId,
        FirstName: userData.FirstName,
        LastName: userData.LastName,
        UserName: userData.UserName,
        Email: userData.Email,
        Phone: userData.Phone,
        Address: userData.Address,
      },
    };
    try {
      const response = await fetch("http://localhost:2005/editProfile", {
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
        alert("User details updated successfully");
      } else {
        setUserData({});
        alert("Failed to update user details!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to update user details!!");
      setUserData({});
    }
  };

  return (
    <section className="bg-gray-200 h-[100%]">
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
                  to="/EditProfile"
                  className="text-blue-600 hover:underline"
                >
                  Account
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-gray-500">Edit Profile</li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <img
                src={profilePic}
                alt="Profile pic"
                className="rounded-full mx-auto"
                style={{ width: "160px", height: "160px" }}
              />
              {Object.keys(userData).length > 0 ? (
                <>
                  <div>
                    <p className="text-gray-600">
                      <strong>Username:</strong> {userData.UserName}
                    </p>
                    <p className="text-gray-500 mt-2">
                      <strong>Email:</strong> {userData.Email}
                    </p>
                  </div>
                </>
              ) : (
                <p>No user data available.</p>
              )}
              <div className="flex justify-center items-center text-center">
                {isEditingPic ? (
                  <input
                    type="file"
                    accept="image/*"
                    className="m-1"
                    onChange={handleFileChange}
                  />
                ) : null}
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                {isEditingPic ? (
                  <>
                    <button
                      onClick={handleUpdatePic}
                      className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditingPic(false)}
                      className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditingPic(true)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Change
                  </button>
                )}
                <button
                  onClick={handleDeletePic}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center bg-white rounded-lg shadow p-6">
            <div className="space-y-4 w-[50%]">
              {Object.keys(userData).length > 0 ? (
                <div className="overflow-x-auto">
                  <h1 className="font-bold text-center text-blue-500">
                    Personal Information:
                  </h1>
                  <form onSubmit={handleEditInfo}>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="UserId" className="font-bold">
                          User Id:
                        </label>
                        <input
                          type="text"
                          name="UserId"
                          value={userData.UserId || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                          readOnly
                        />
                      </div>
                      <div>
                        <label htmlFor="UserName" className="font-bold">
                          Username:
                        </label>
                        <input
                          type="text"
                          name="UserName"
                          value={userData.UserName || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="FirstName" className="font-bold">
                          First Name:
                        </label>
                        <input
                          type="text"
                          name="FirstName"
                          value={userData.FirstName || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="LastName" className="font-bold">
                          Last Name:
                        </label>
                        <input
                          type="text"
                          name="LastName"
                          value={userData.LastName || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="Email" className="font-bold">
                          Email:
                        </label>
                        <input
                          type="email"
                          name="Email"
                          value={userData.Email || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="Phone" className="font-bold">
                          Phone:
                        </label>
                        <input
                          type="tel"
                          name="Phone"
                          value={userData.Phone || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="Address" className="font-bold">
                          Address:
                        </label>
                        <input
                          type="text"
                          name="Address"
                          value={userData.Address || ""}
                          onChange={handleInputChange}
                          className="border rounded py-2 px-3 w-full"
                        />
                      </div>
                      <div className="flex justify-center gap-2">
                        <button
                          type="reset"
                          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center text-center">
                  User data not found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
