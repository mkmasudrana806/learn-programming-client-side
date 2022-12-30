import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const ExerciseCart = () => {
  const count = 0;
  const exercises = useLoaderData();
  const { exercise_id, exercise_name, covered_topics, joined, examples } =
    exercises[0];
  return (
    <Card>
      <Card.Header as="h4">{exercise_name}</Card.Header>
      <Card.Body>
        <Card.Title>
          Following {examples.length} Exercise Will Coverd{" "}
        </Card.Title>
        <Card.Text>
          <ol>
            <li>{examples[0]}</li>
            <li>{examples[1]}</li>
            <li>{examples[2]}</li>
            <li>
            {
                examples[3].length>30 && <><p>{examples[3].slice(0, 30)+"....."}</p></>
            }
            </li>
          </ol>
        </Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      </Card.Body>
    </Card>
    // <div className="exercise-box">
    //   <h4 className="mt-3">{examples.length} {exercise_name}</h4>
    //   <p>In This Exercise we have covered these topics: {covered_topics}</p>
    //   <ol>
    //   <li>{examples[0]}</li>
    //   <li>{examples[1]}</li>
    //   <li>{examples[2]}</li>
    //   <li>... <Link>More Exercise</Link></li>
    //   </ol>
    // </div>
  );
};

export default ExerciseCart;
