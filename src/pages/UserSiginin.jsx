import React, { useState } from "react";

import { Navigate, NavLink, useNavigate } from "react-router-dom";
<<<<<<< HEAD

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
//riswan
const UserSignin = () => {
  const [formData, setFormData] = useState({
    userLoginId: "",
    password: "",
=======
 
import { LoginButton, LoginContainer, LoginError, LoginField, LoginFooter, LoginForm, LoginInput, LoginLabel, LoginTitle, LoginWrapper } from "../styles/LoginStyle";
import { ApiError } from "../styles/SignupStyle";
import { useDispatch } from "react-redux";

import { login } from "../reducer/authSlice";
//riswan
const UserSignin = () => {
  const[formData,setFormData]=useState({
    userLoginId:"",
    password:"",
  })
 
 const dispatch=useDispatch()
const navigate = useNavigate();
  const [errors, setErrors] = useState({});
 
 
 const [apiError,setApiError]=useState("")
 
 const [loading,setLoading]=useState(false)
 
 const handleForm=(e)=>{
  setFormData({
    ...formData,
    [e.target.id]:e.target.value,
  } )
 
  setErrors({
    ...errors,
    [e.target.id]:"",
>>>>>>> d0fbc617755012f567a40e378329b5e51d634246
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [apiError, setApiError] = useState("");

  const [loading, setLoading] = useState(false);

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

  //regex validate
  const validate = () => {
    let newErrors = {};
    if (!formData.userLoginId) {
      newErrors.userLoginId = "userName should not be blank";
    }
    if (!formData.password) {
      newErrors.password = "password should not be blank";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
<<<<<<< HEAD
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setApiError("");

    try {
      const response = await fetch(
        "https://localhost:8443/sphinx/api/user/signIn",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (!response.ok) {
        setApiError(data.message || "invalid credinatilas ");
        return;
      }

      //sucess =>redirect
      navigate(`/adminhome/${userLoginId}`);
    } catch (err) {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

=======
 }
 
 
const handleSubmit=async (e)=>{
  e.preventDefault();
  if(!validate()) return;
  setLoading(true);
  setApiError("")
 
  try{
    const response=await fetch("https://localhost:8443/sphinx/api/user/signIn",{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    });
    if(!response.ok){
      console.log("not login...")
    
      setApiError("invalid credinatilas ");
      return;
    }
 
    //sucess =>redirect
    dispatch(login({ userLoginId: formData.userLoginId }));
    await new Promise(resolve => setTimeout(resolve, 1000));

      navigate("/adminhome");
 
  }catch(err){
    setApiError("Network error. Please try again.")
  }finally{
    setLoading(false)
  }
}
 
>>>>>>> d0fbc617755012f567a40e378329b5e51d634246
  return (
    <>
      <LoginContainer>
<<<<<<< HEAD
        <LoginWrapper>
          <LoginTitle>SPHINX</LoginTitle>
=======
  <LoginWrapper>
    <LoginTitle>SPHINX</LoginTitle>
  
 
    <LoginForm onSubmit={handleSubmit}>
      <h2>Login</h2>
       {apiError && <ApiError>{apiError}</ApiError>}
      <LoginField>
        <LoginLabel htmlFor="userLoginId">Username</LoginLabel>
        <LoginInput
          type="text"
          id="userLoginId"
          value={formData.userLoginId}
          onChange={handleForm}
        />
        {errors.userLoginId && <LoginError>{errors.userLoginId}</LoginError>}
      </LoginField>
 
      <LoginField>
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput
          type="password"
          id="password"
          value={formData.password}
          onChange={handleForm}
        />
        <i class="fa-regular fa-eye"></i>
        {errors.password && <LoginError>{errors.password}</LoginError>}
      </LoginField>
 
      <LoginButton type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Login"}
      </LoginButton>
 
      <LoginFooter>
       
>>>>>>> d0fbc617755012f567a40e378329b5e51d634246

          <LoginForm onSubmit={handleSubmit}>
            <h2>Login</h2>

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

            <LoginField>
              <LoginLabel htmlFor="password">Password</LoginLabel>
              <LoginInput
                type="password"
                id="password"
                value={formData.password}
                onChange={handleForm}
              />
              <i className="fa-regular fa-eye"></i>
              {errors.password && <LoginError>{errors.password}</LoginError>}
            </LoginField>

            <LoginButton type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </LoginButton>

            <LoginFooter></LoginFooter>
          </LoginForm>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default UserSignin;
