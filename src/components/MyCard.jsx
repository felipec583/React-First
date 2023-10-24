import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ imgUrl, description, name, tagColor, tagText }) => {
  return (
    <Card style={{ width: "18rem" }} className="card my-3">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags tagColor={tagColor} tagText={tagText} />
      </Card.Body>
    </Card>
  );
};

export default MyCard;
