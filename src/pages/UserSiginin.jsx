import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginButton,
  LoginContainer,
  LoginError,
  LoginField,
  LoginFooter,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginTitle,
  LoginWrapper,
} from "../styles/LoginStyle";

const UserSignin = () => {
  const [formData, setFormData] = useState({
    userLoginId: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle Input
  const handleForm = (e) => {
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

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.userLoginId) {
      newErrors.userLoginId = "Username should not be blank";
    }

    if (!formData.password) {
      newErrors.password = "Password should not be blank";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setApiError("");

    
      const response = await fetch(
        "https://localhost:8443/sphinx/api/user/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // ✅ correct
          },
          body: JSON.stringify(formData), // ✅ send body
          
        }
      );

      const data = await response.json(); // ✅ IMPORTANT

      if (!response.ok) {
        setApiError(data.message || "Invalid credentials");
        return;
      }

      // ✅ Success
     

      navigate(`/adminhome/${formData.userLoginId}`);

    
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>SPHINX</LoginTitle>

        <LoginForm onSubmit={handleSubmit}>
          <h2>Login</h2>

          {/* Username */}
          <LoginField>
            <LoginLabel htmlFor="userLoginId">Username</LoginLabel>
            <LoginInput
              type="text"
              id="userLoginId"
              value={formData.userLoginId}
              onChange={handleForm}
            />
            {errors.userLoginId && (
              <LoginError>{errors.userLoginId}</LoginError>
            )}
          </LoginField>

          {/* Password */}
          <LoginField>
            <LoginLabel htmlFor="password">Password</LoginLabel>
            <LoginInput
              type={show ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleForm}
            />

            {/* Show / Hide Password */}
            {show ? (
              <i
                className="fa-regular fa-eye"
                onClick={() => setShow(false)}
                style={{ cursor: "pointer" }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash"
                onClick={() => setShow(true)}
                style={{ cursor: "pointer" }}
              ></i>
            )}

            {errors.password && (
              <LoginError>{errors.password}</LoginError>
            )}
          </LoginField>

          {/* API Error */}
          {apiError && <LoginError>{apiError}</LoginError>}

          {/* Button */}
          <LoginButton type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </LoginButton>

          <LoginFooter></LoginFooter>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default UserSignin;