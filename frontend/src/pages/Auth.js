import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import history from '../history';

function Auth() {
  const [pinCode, setPinCode] = useState()

  const validatePin = () => {
    if (pinCode === "623859") {
      localStorage.setItem("loggedIn", "623859")
    }
    history.push("/home")
    window.location.reload()
  }

  return (
    <div className='d-flex justify-content-center'>
      <Form className='shadow p-5 rounded-3 mt-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pin code</Form.Label>
          <Form.Control type="text" placeholder="Enter pin code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
          <Form.Text className="text-muted">
            Enter the correct pin code to authorize on the platform.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={validatePin}>
          Authenticate
        </Button>
      </Form>
    </div>
  )
}

export default Auth