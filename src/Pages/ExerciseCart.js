import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const ExerciseCart = () => {
  const exercises = useLoaderData();
  const { exercise_id, exercise_name, covered_topics, joined, examples } =
    exercises;
  return (
    <Card>
      <Card.Header as="h4" className="bg-success text-light mb-3 p-2">
        {exercise_name}
      </Card.Header>
      <Card.Body>
        <Card.Title>Following Topics Will Coverd. </Card.Title>
        <p>In this exercise we will cover these topics like {covered_topics}</p>
        <Card.Title>
          Following {examples.length} Exercise Will Coverd.{" "}
        </Card.Title>
        <div>
            <ol>
              <li>{examples[0]}</li>
              <li>{examples[1]}</li>
              <li>{examples[2]}</li>
              <li>
                {examples[3].length > 30 && (
                  <>
                    <span>{examples[3].slice(0, 30) + "....."}</span>
                  </>
                )}
              </li>
            </ol>
        </div>
        <Link to={`/premiumExercise/${exercises.exercise_id}`}>
          <Button variant="primary">Get Premium Access</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ExerciseCart;


