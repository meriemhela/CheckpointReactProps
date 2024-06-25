import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../PlayerCard.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imagePath }) => {
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={imagePath}
        className="card-img-top"
        alt={`${name}'s image`}
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="list-group-item">
              <b>Team: </b> {team}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              <b>Nationality: </b> {nationality}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              <b>Jersey Number:</b> {jerseyNumber}
            </ListGroupItem>
            <ListGroupItem className="list-group-item">
              <b>Age: </b>
              {age}
            </ListGroupItem>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
Player..defaultProps = {
  nationality: "Invalid",
  
};
