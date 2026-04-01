import React, { useState } from "react";

import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { LoginButton, LoginContainer, LoginError, LoginField, LoginFooter, LoginForm, LoginInput, LoginLabel, LoginTitle, LoginWrapper } from "../styles/LoginStyle";
//riswan
const UserSignin = () => {
  const[formData,setFormData]=useState({
    username:"",
    password:"",
  })
 

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
  });

  setApiError("")
 }

 //regex validate
 const validate=()=>{
  let newErrors={}
   if (!formData.username) {
      newErrors.username = "userName should not be blank";
    }
    if(!formData.password){
      newErrors.password="password should not be blank"
    }

   
     setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
 }


const handleSubmit=async (e)=>{
  e.preventDefault();
  if(!validate()) return;
  setLoading(true);
  setApiError("")

  try{
    const response=await fetch("https://localhost:8443/sphinx/api/user/signin",{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    });
    if(!response.ok){
      setApiError(data.message || "invalid credinatilas ");
      return;
    }

    //sucess =>redirect
    navigate("/adminhome")

  }catch(err){
    setApiError("Network error. Please try again.")
  }finally{
    setLoading(false)
  }
} 

  return (
    <>
     
      <LoginContainer>
  <LoginWrapper>
    <LoginTitle>SPHINX</LoginTitle>
    

    <LoginForm onSubmit={handleSubmit}>
      <h2>Login</h2>

      <LoginField>
        <LoginLabel htmlFor="username">Username</LoginLabel>
        <LoginInput
          type="text"
          id="username"
          value={formData.username}
          onChange={handleForm}
        />
        {errors.username && <LoginError>{errors.username}</LoginError>}
      </LoginField>

      <LoginField>
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput
          type="password"
          id="password"
          value={formData.password}
          onChange={handleForm}
        />
        {errors.password && <LoginError>{errors.password}</LoginError>}
      </LoginField>

      <LoginButton type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Login"}
      </LoginButton>

      <LoginFooter>
        Don’t have an account?{" "}
        <NavLink to="/usersignup">Register</NavLink>
      </LoginFooter>
    </LoginForm>
  </LoginWrapper>
</LoginContainer>
    </>
  );
};

export default UserSignin;
