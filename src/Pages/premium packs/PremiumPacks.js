import React, { useState } from "react";
import "./PremiumPacks.css";
import { TbPackages } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

import SinglePack from "./SinglePack";
import { Link } from "react-router-dom";

const PremiumPacks = () => {
  // premium packs data load from backend
  const [packs, setPacks] = useState([]);
  useState(() => {
    fetch("http://localhost:5000/premium-packs")
      .then((res) => res.json())
      .then((data) => setPacks(data));
  }, []);

  return (
    <div className="py-5">
      <div className="d-flex  justify-content-between">
        <div className=" d-flex gap-1">
          <TbPackages size={34}></TbPackages>{" "}
          <div>
            <h2 className="ms-2 fw-bold">
              Premium <span className="text-primary"> Packs</span>
            </h2>
            <p className="m-0">
              Curated courses packed otgether from expert tutors
            </p>
          </div>
        </div>
        <div className="view-more">
          <Link to="/all-premium-packs" className="btn btn-primary">
            View More <FaArrowRightLong></FaArrowRightLong>
          </Link>
        </div>
      </div>
      {/* premium packs container */}
      <div className="premium-pack-container py-4">
        {packs.slice(0, 4).map((pack, index) => (
          <SinglePack key={index} pack={pack}></SinglePack>
        ))}
      </div>
    </div>
  );
};

export default PremiumPacks;
