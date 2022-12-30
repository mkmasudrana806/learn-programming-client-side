import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const PremiumExercise = () => {
  const exercise = useLoaderData();
  const { exercise_id, exercise_name, covered_topics, joined, examples } =
    exercise;
  return (
    <div>
      <h4 className="mb-4 bg-success p-2 text-light">
        Welcome to Premium Membership!
      </h4>
      <Card>
        <Card.Header as="h4">{exercise_name}</Card.Header>
        <Card.Body>
          <Card.Title>Following Topics Will Coverd. </Card.Title>
          <p>
            In this exercise we will cover these topics like {covered_topics}
          </p>
          <Card.Title>
            Following {examples.length} Exercise Will Coverd.{" "}
          </Card.Title>
          <ol>
            {examples.map((example) => (
              <li>{example}</li>
            ))}
          </ol>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PremiumExercise;
