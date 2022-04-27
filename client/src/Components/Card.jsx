import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, temperament, weight, image }) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <h5>Temperament: {temperament}</h5>
      <h5>Weight: {weight} lb Aprox.</h5>
      <img src={image} alt="Img not fount" width="200px" height="250px" />
      <br />
      <Link to={`/${id}`}>Details</Link>
    </div>
  );
}
