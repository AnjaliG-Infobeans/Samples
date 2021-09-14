import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, editCurrUser, selectUsers } from './usersSlice'
import './Users.css';
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Users = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const [add, setAdd] = useState(true)

  useEffect(() => {}, [newUser])

  const editUser = (username) => {
    const currentUser = users.filter(user => user.username === username)[0];
    setNewUser(currentUser);
    setAdd(false);
  }

  const deleteUsers = (username) => {
    dispatch(deleteUser(username));
  }

  const addNewUser = (event) => {
    event.preventDefault();

    if(users.find(user => user.username === newUser.username)) {
      dispatch(editCurrUser(newUser));
    } else {
      dispatch(addUser(newUser));
    }   
    setNewUser({});
    setAdd(true);
  }

  return (
      <Container className="users">
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
              <td className="users__actions">
                <span style={{cursor: "pointer"}} onClick={() => editUser(user.username)}>
                  <FontAwesomeIcon icon={faUserEdit} />
                </span>
                <span style={{cursor: "pointer"}} onClick={() => deleteUsers(user.username)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                
              </td>
            </tr>
            )}
          </tbody>
        </Table>

        <h3>+ Add user</h3>
        <Form>
          <Row className="users__row">
            <Col>
              <Form.Control 
                required 
                placeholder="First name" 
                name="fname"
                value={newUser.fname || ""}
                onChange={(event) => setNewUser({...newUser, fname: event.target.value})} 
              />
            </Col>
            <Col>
              <Form.Control 
                required 
                placeholder="Last name" 
                name="lname" 
                value={newUser.lname || ""}
                onChange={(event) => setNewUser({...newUser, lname: event.target.value})} 
              />
            </Col>
            <Col>
              <Form.Control 
                required 
                placeholder="Username" 
                name="username" 
                value={newUser.username || ""}
                onChange={(event) => setNewUser({...newUser, username: event.target.value})} 
              />
            </Col>
            <Col>
              <Button onClick={addNewUser} variant="primary" type="submit">
                {add ? "Add": "Update"}
              </Button> 
            </Col>
          </Row>
        </Form>
    </Container>
  )
}

export default Users
