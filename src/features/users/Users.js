import React from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUsers } from './usersSlice'

const Users = () => {
  const users = useSelector(selectUsers);

  const submitForm = (event) => {
    const newUser = {};
    event.preventDefault();
    const formData = event.target.elements;
    newUser.fname = formData[0].value;
    newUser.lname = formData[1].value;
    newUser.username = formData[2].value;

    console.log(newUser);
  }
  return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              <tr>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>@{user.username}</td>
            </tr>
            )}
          </tbody>
        </Table>

        <h3>+ Add user</h3>
        <Form onSubmit={submitForm}>
          <Row>
            <Col>
              <Form.Control required placeholder="First name" name="fname" />
            </Col>
            <Col>
              <Form.Control required placeholder="Last name" name="lname" />
            </Col>
            <Col>
              <Form.Control required placeholder="Username" name="username" />
            </Col>
            <Col><Button variant="primary" type="submit">Add</Button></Col>
          </Row>
        </Form>
    </div>
  )
}

export default Users
