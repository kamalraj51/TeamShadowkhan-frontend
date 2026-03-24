import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  RegisterCredintials,
} from "../styles/Registerstyle";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
//riswan
const UserSignin = () => {
  const[formData,setFormData]=useState({
    username:"",
    password:"",
  })
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

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
   if (!usernameRegex.test(formData.username)) {
      newErrors.username = "3-15 chars, letters/numbers/_ only";
    }
    if(!formData.password){
      newErrors.password="password should be blank"
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
    const response=await fetch("http://localhost:5000/api/signup",{
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
    Navigate("/")

  }catch(err){
    setApiError("NNetwork error. Please try again.")
  }finally{
    setLoading(false)
  }
} 

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h2 style={{textAlign:"center"}}>Examini Login</h2>
           {apiError && (
            <p style={{ color: "red", textAlign: "center", fontSize: "13px" }}>
              {apiError}
            </p>
          )}
          <RegisterCredintials>
            <Label htmlFor="username">UserName</Label>
            <Input type="text" id="username" value={formData.username}  onChange={handleForm}/>
             {errors.username && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.username}
              </p>
            )}
          </RegisterCredintials>

          <RegisterCredintials>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" value={formData.password} onChange={handleForm} />
             {errors.password && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.password}
              </p>
            )}
          </RegisterCredintials>

          <Button type="submit" disabled={loading}>
                      {loading ? "Signing up..." : "Signup"}
                    </Button>
            <p style={{ textAlign: "center", fontSize: "13px" }}>
                      Register?{" "}
                      <NavLink to="/usersignup">Go to Register</NavLink>
                    </p>
        </Form>
      </Container>
    </>
  );
};

export default UserSignin;
