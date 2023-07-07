import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  });
  const { id } = useParams();
  
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">
            <Link to={"/"}> Go back </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
