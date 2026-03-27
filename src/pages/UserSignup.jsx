import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { ApiError, RegisterButton, RegisterContainer, RegisterError, RegisterField, RegisterFooter, RegisterForm, RegisterInput, RegisterLabel, RegisterSubtitle, RegisterTitle, RegisterWrapper } from "../styles/SignupStyle";


// REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// phNo validation (10 digits, India style)
const phNoRegex = /^[6-9]\d{9}$/;

const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

const UserSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phNo: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.id]: "",
    });

    setApiError("");
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.username) {
      newErrors.firstName = "must should be fill the firstName";
    }

    if (!formData.lastName) {
      newErrors.lastName = "must should be fill the last";
    }

    if (!usernameRegex.test(formData.username)) {
      newErrors.username = "3-15 chars, letters/numbers/_ only";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!phNoRegex.test(formData.phNo)) {
      newErrors.phNo = "Enter valid 10-digit Indian number";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Min 8 chars, upper, lower, number, special char required";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setApiError("");

    try {
      const response = await fetch(
        "https://localhost:8443/sphinx/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setApiError(data.message || "Signup failed!");
        return;
      }

      navigate("/");
    } catch (err) {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
       <RegisterContainer>
      <RegisterWrapper>
    
        <RegisterTitle>SPHINX</RegisterTitle>
        <RegisterSubtitle>Admin Registration</RegisterSubtitle>

        <RegisterForm onSubmit={handleSubmit}>
          <h2>Register</h2>

          {apiError && <ApiError>{apiError}</ApiError>}

          <RegisterField>
            <RegisterLabel>First Name</RegisterLabel>
            <RegisterInput
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <RegisterError>{errors.firstName}</RegisterError>
            )}
          </RegisterField>

          <RegisterField>
            <RegisterLabel>Last Name</RegisterLabel>
            <RegisterInput
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <RegisterError>{errors.lastName}</RegisterError>
            )}
          </RegisterField>

          <RegisterField>
            <RegisterLabel>Username</RegisterLabel>
            <RegisterInput
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <RegisterError>{errors.username}</RegisterError>
            )}
          </RegisterField>

          <RegisterField>
            <RegisterLabel>Email</RegisterLabel>
            <RegisterInput
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <RegisterError>{errors.email}</RegisterError>
            )}
          </RegisterField>

          <RegisterField>
            <RegisterLabel>Phone Number</RegisterLabel>
            <RegisterInput
              type="text"
              id="phNo"
              value={formData.phNo}
              onChange={handleChange}
              placeholder="9876543210"
            />
            {errors.phNo && (
              <RegisterError>{errors.phNo}</RegisterError>
            )}
          </RegisterField>

          <RegisterField>
            <RegisterLabel>Password</RegisterLabel>
            <RegisterInput
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <RegisterError>{errors.password}</RegisterError>
            )}
          </RegisterField>

          <RegisterField>
            <RegisterLabel>Confirm Password</RegisterLabel>
            <RegisterInput
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <RegisterError>{errors.confirmPassword}</RegisterError>
            )}
          </RegisterField>

          <RegisterButton type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </RegisterButton>

          <RegisterFooter>
            Already have an account?{" "}
            <NavLink to="/">Go to login</NavLink>
          </RegisterFooter>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterContainer>
    
  );
};

export default UserSignup;
