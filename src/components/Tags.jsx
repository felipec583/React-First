import React from "react";
import Badge from "react-bootstrap/Badge";
const Tags = ({ tagColor, tagText }) => {
  return (
    <h3>
      <Badge bg={tagColor}>{tagText}</Badge>
    </h3>
  );
};

export default Tags;
