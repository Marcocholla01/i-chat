import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
// import { Toast } from "primereact/toast";

export default function PositionDemo() {
  const toastRef = useRef(null); // General toast reference
  const [loading, setLoading] = useState(false);

  const showMessage = (severity, summary, detail) => {
    toastRef.current.show({ severity, summary, detail, life: 3000 });
  };

  const handleApiRequest = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/data"); // Replace with your API URL
      if (!data) {
        throw new Error("Network response was not ok");
      }
      const data = await response.data;
      showMessage("success", "Success", "Data fetched successfully");
      console.log(data); // Handle data as needed
    } catch (error) {
      showMessage("error", "Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card flex justify-content-center">
      {/* <Toast ref={toastRef} position="top-center" /> */}
      <Button
        label="Fetch Data"
        className="p-button-primary"
        onClick={handleApiRequest}
        loading={loading}
      />
    </div>
  );
}
