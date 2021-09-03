import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, selectUsers } from './usersSlice'

const Users = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({})

  const editUser = (username) => {
    const currentUser = users.filter(user => user.username === username)[0];
    document.getElementsByName("fname")[0].value = currentUser.fname;
    document.getElementsByName("lname")[0].value = currentUser.lname;
    document.getElementsByName("username")[0].value = currentUser.username;
  }

  const deleteUsers = (username) => {
    dispatch(deleteUser(username));
  }

  const submitForm = (event) => {
    event.preventDefault();

    document.getElementsByName("fname")[0].value = "";
    document.getElementsByName("lname")[0].value = "";
    document.getElementsByName("username")[0].value = "";

    setNewUser({});
    dispatch(addUser(newUser));
  }

  return (
      <Container>
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
              <tr key={`user@${user.username}`}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>@{user.username}</td>
              <td>
                <span style={{cursor: "pointer"}} onClick={() => editUser(user.username)}>Edit</span>{" | "}
                <span style={{cursor: "pointer"}} onClick={() => deleteUsers(user.username)}>Delete</span>
              </td>
            </tr>
            )}
          </tbody>
        </Table>

        <h3>+ Add user</h3>
        <Form onSubmit={submitForm}>
          <Row>
            <Col>
              <Form.Control required placeholder="First name" name="fname" onChange={(event) => setNewUser({...newUser, fname: event.target.value})} />
            </Col>
            <Col>
              <Form.Control required placeholder="Last name" name="lname" onChange={(event) => setNewUser({...newUser, lname: event.target.value})} />
            </Col>
            <Col>
              <Form.Control required placeholder="Username" name="username" onChange={(event) => setNewUser({...newUser, username: event.target.value})} />
            </Col>
            <Col><Button variant="primary" type="submit">Add</Button></Col>
          </Row>
        </Form>
    </Container>
  )
}

export default Users
