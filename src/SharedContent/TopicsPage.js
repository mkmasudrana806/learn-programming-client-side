import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./TopicsPages.css";

const TopicsPage = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <div>
      <h3 className="mb-5 bg-success p-2">
        {topics[0].language_name} has {topics.length} Topics
      </h3>
      {topics.map((topic) => (
        <div className="topicspages">
          <h5>{topic.title}</h5>
          <p>{topic.intro}</p>
          {topic.details?.length > 120 ? (
            <p>
              {topic.details?.slice(0, 120) + " ..."}
              <Link to={`/topic-details/${topic._id}`}>Read More</Link>
            </p>
          ) : (
            <p></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicsPage;
