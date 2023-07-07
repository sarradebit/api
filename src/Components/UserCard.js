import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const UserCard = ({user}) => {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
            {user.username}
        </Card.Text>
        <Card.Text>
            {user.email}
        </Card.Text>
        <Button variant="primary">
            <Link to={`/profile/${user.id}`}> Go to user profile </Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard