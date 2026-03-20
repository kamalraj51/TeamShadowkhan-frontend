import React, { useState } from 'react'
import { Form } from '../styles/Registerstyle'

const UserSignin = () => {
 fetch('https://localhost:8443/sphinx/api/v1/admin/auth/signin', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email, password })
});
   
    

  return (
    <>
        <Container>
            <Form>

            </Form>
        </Container>
    </>
  )
}

export default UserSignin