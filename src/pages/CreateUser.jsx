import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import { Button, Container, Form, FormGroup, Input, Label, Title } from "../styles/CreateUser.style";

const CreateUser = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    peopleWiseId: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    role: "SPX_USER",
     userName: ""
  });

  const setValue = (e) => {
    console.log(e.target.name + e.target.value)
    setData({
      
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(data)
      const response = await fetch("https://localhost:8443/sphinx/api/user/addUser", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <Container>
        <Title>Add User</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>PeopleWise ID *</Label>
            <Input name="peopleWiseId" onChange={setValue} />
          </FormGroup>

          <FormGroup>
            <Label>First Name *</Label>
            <Input name="firstName" onChange={setValue} />
          </FormGroup>

          <FormGroup>
            <Label>Last Name *</Label>
            <Input name="lastName" onChange={setValue} />
          </FormGroup>
          <FormGroup>
            <Label>UserName *</Label>
            <Input name="userName" onChange={setValue} type="text" />
          </FormGroup>

          <FormGroup>
            <Label>Email Address *</Label>
            <Input name="email" onChange={setValue} />
          </FormGroup>

          <FormGroup>
            <Label>Department *</Label>
            <Input name="department" onChange={setValue} />
          </FormGroup>

          <Button type="submit">Add User +</Button>
        </Form>
      </Container>
    </Layout>
  );
};
export default CreateUser