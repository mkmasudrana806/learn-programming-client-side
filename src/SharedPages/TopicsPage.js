import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./TopicsPages.css";

const TopicsPage = () => {
  const topics = useLoaderData();
  // console.log(topics);
  return (
    <div>
      <h3 className="mb-5 bg-success p-2">
        {topics[0].language_name} has {topics.length} Topics
      </h3>
      {/* map on topics  */}
      {topics.map((topic) => (
        <div key={topic._id} className="topicspages">
          <h5>{topic.title}</h5>
          <p>{topic.intro}</p>
          {topic.Features && (
            <h5 className="mb-2 mt-3">Features of this Language</h5>
          )}
          {/* printing features */}
          {topic.Features ? (
            <>
              {topic.Features.map((feature) => (
                <li>{feature}</li>
              ))}
            </>
          ) : (
            <></>
          )}
          {/* slice string  */}
          {topic.details?.length > 120 ? (
            <p>
              {topic.details?.slice(0, 120) + " ..."}
              <Link to={`/learning/topic-details/${topic._id}`}>Read More</Link>
            </p>
          ) : (
            <p>{topic.details}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicsPage;
