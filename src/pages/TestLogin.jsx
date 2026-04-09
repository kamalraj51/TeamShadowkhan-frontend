import React, { useState } from "react";
import { toast } from "sonner";
import Layout from "../component/Layout";

const TestLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://localhost:8443/sphinx/api/students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      console.log("data", data);

      if (data.status === "200" && data.message === "error") {
        setError("Login failed: Invalid credentials");
      } else if (data.status === "200" || data.status === "success") {
        setSuccess("Login successful!");
        console.log("Login successful:", data);
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
  <button onClick={()=>toast.info("Event has been created.")}>click me</button>
    </Layout>
  );
};

export default TestLogin;
