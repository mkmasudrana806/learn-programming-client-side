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
    fetch(
      "https://b610-lerning-platform-server-side-mkmasudrana806.vercel.app/premium-packs"
    )
      .then((res) => res.json())
      .then((data) => setPacks(data));
  }, []);

  return (
    <div className="py-5">
      <div>
        <div className=" d-flex gap-1">
          <TbPackages size={34}></TbPackages>{" "}
          <div className="w-100">
            <div className="view-more d-flex justify-content-between">
              <h2 className="ms-2 fw-bold">
                Premium <span className="text-primary"> Packs</span>
              </h2>
              <Link
                to="/all-premium-packs"
                className="btn btn-primary py-2 px-3"
              >
                View More <FaArrowRightLong></FaArrowRightLong>
              </Link>
            </div>
            <p className="m-0">
              Curated courses packed otgether from expert tutors
            </p>
          </div>
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
