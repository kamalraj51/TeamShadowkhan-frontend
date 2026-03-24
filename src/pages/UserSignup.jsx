import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  RegisterCredintials,
} from "../styles/Registerstyle";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../component/Layout";

// REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// 👇 phNo validation (10 digits, India style)
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
    <Layout>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Admin Register</h2>

          {/* API ERROR */}
          {apiError && (
            <p style={{ color: "red", textAlign: "center", fontSize: "13px" }}>
              {apiError}
            </p>
          )}
          {/* firstName */}
          <RegisterCredintials>
            <Label htmlFor="firstName">firstName</Label>
            <Input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.firstName}
              </p>
            )}
          </RegisterCredintials>

          {/* lastName */}
          <RegisterCredintials>
            <Label htmlFor="lastName">lastName</Label>
            <Input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.lastName}
              </p>
            )}
          </RegisterCredintials>

          {/* USERNAME */}
          <RegisterCredintials>
            <Label htmlFor="username">UserName</Label>
            <Input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.username}
              </p>
            )}
          </RegisterCredintials>

          {/* EMAIL */}
          <RegisterCredintials>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
            )}
          </RegisterCredintials>

          {/* phNo */}
          <RegisterCredintials>
            <Label htmlFor="phNo">phNo Number</Label>
            <Input
              type="text"
              id="phNo"
              value={formData.phNo}
              onChange={handleChange}
              placeholder="Enter 10 digit number"
            />
            {errors.phNo && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.phNo}</p>
            )}
          </RegisterCredintials>

          {/* PASSWORD */}
          <RegisterCredintials>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.password}
              </p>
            )}
          </RegisterCredintials>

          {/* CONFIRM PASSWORD */}
          <RegisterCredintials>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.confirmPassword}
              </p>
            )}
          </RegisterCredintials>

          <Button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </Button>

          <RegisterCredintials>
            <p style={{ textAlign: "center", fontSize: "13px" }}>
              Already have an account? <NavLink to="/">Go to login</NavLink>
            </p>
          </RegisterCredintials>
        </Form>
      </Container>
    </Layout>
  );
};

export default UserSignup;
