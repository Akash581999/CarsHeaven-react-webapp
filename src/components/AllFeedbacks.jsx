import React, { useState, useEffect } from "react";

const AllFeedbacks = (props) => {
  const [feedbacksList, setFeedbacksList] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const requestData = {
      eventID: "1001",
      addInfo: {
        Feedback_Id: "",
        UserName: "",
        Email: "",
        Country: "",
        Comments: "",
        CreatedAt: "",
      },
    };

    try {
      const response = await fetch("http://localhost:5164/allfeedbacks", {
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
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        setFeedbacksList(data.rData.feedback || []);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch feedbacks: ${error}`);
      setFeedbacksList([]);
    }
  };

  const handleDeleteFeedback = async (feedback_Id) => {
    const requestData = {
      eventID: "1026",
      addInfo: {
        Feedback_Id: `${feedback_Id}`,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/feedback/id", {
        method: "DELETE",
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
        console.log(data.rData.feedback_Id);
        alert(`You sure want you delete feedback: ${feedback_Id}`);
        alert("User Feedback deleted successfully" || data.rData.rMessage);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to delete feedback: ${error}`);
      setFeedbacksList([]);
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="text-3xl text-info text-start mx-3 my-3">
          ALL FEEDBACKS
        </span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-dark table-auto my-3 mx-auto text-center">
            <thead>
              <tr>
                <th className="text-info px-4 py-2">Feedback Id</th>
                <th className="text-info px-4 py-2">User Name</th>
                <th className="text-info px-4 py-2">Email</th>
                <th className="text-info px-4 py-2">Country</th>
                <th className="text-info px-4 py-2">Comments</th>
                <th className="text-info px-4 py-2">Sent On</th>
                <th className="text-info px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {feedbacksList.map((feedback, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{feedback.feedback_Id || index + 1}</td>
                  <td className="border px-4 py-2">{feedback.userName}</td>
                  <td className="border px-4 py-2">{feedback.email}</td>
                  <td className="border px-4 py-2">{feedback.country}</td>
                  <td className="border px-4 py-2">{feedback.comments}</td>
                  <td className="border px-4 py-2">{feedback.createdAt}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-1" type="button">
                      <i className="fas fa-envelope-open">&nbsp;</i>Mark Read
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1"
                      type="button"
                      onClick={() => handleDeleteFeedback(feedback.feedback_Id)}
                    >
                      <i className="fas fa-trash">&nbsp;</i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllFeedbacks;
