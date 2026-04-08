import React from "react";
import styled from "styled-components";
import { Button, Container, FormGroup, Input, Label, Title } from "../styles/CreateUser.style";



const CreateUser=()=> {
  return (
    <Container>
      <Title>Add User</Title>

      <FormGroup>
        <Label>PeopleWise ID *</Label>
        <Input placeholder="Enter employee people wise ID" />
      </FormGroup>

      <FormGroup>
        <Label>First Name *</Label>
        <Input placeholder="Enter employee first name" />
      </FormGroup>

      <FormGroup>
        <Label>Last Name *</Label>
        <Input placeholder="Enter employee last name" />
      </FormGroup>

      <FormGroup>
        <Label>Email Address *</Label>
        <Input placeholder="Enter employee email address" />
      </FormGroup>

      <FormGroup>
        <Label>Department *</Label>
        <Input placeholder="Enter employee department" />
      </FormGroup>

      <Button>Add User +</Button>
    </Container>
  );
}
export default CreateUser