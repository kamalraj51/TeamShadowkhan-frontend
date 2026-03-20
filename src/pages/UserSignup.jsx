import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  RegisterCredintials,
} from "../styles/Registerstyle";
import { NavLink } from "react-router-dom";

const UserSignup = () => {
  const title = {
    textAlign: "center",
  };
  return (
    <>
      <Container>
        <Form>
          <h2 style={title}>Admin Register</h2>
          <RegisterCredintials>
            <Label for="username">UserName</Label>
            <Input type="text" id="username" />
          </RegisterCredintials>
          <RegisterCredintials>
            <Label for="email">Email</Label>
            <Input type="email" id="email" />
          </RegisterCredintials>

          <RegisterCredintials>
            <Label for="password">Password</Label>
            <Input type="password" id="password" />
          </RegisterCredintials>
          <RegisterCredintials>
            <Label for="confirmpassword">ConfirmPassword</Label>
            <Input type="confirmPassword" id="ConfirmPaasword" />
          </RegisterCredintials>
          <Button type="submit">signup</Button>
          <RegisterCredintials>
            <p>
              already having account<NavLink to="/">go to login</NavLink>
            </p>
          </RegisterCredintials>
        </Form>
      </Container>
    </>
  );
};

export default UserSignup;
