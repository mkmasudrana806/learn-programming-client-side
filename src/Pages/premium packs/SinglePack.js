// Import Swiper React components

import { FaRegUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ImPlay2 } from "react-icons/im";
import { BiBookReader } from "react-icons/bi";
import "./SinglePack.css";

const SinglePack = ({ pack }) => {
  const {
    img,
    title,
    discount_price,
    orginal_price,
    platform,
    courses_number,
    ebook_number,
  } = pack;
  return (
    <div className="premium-pack">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-info p-2">
        <h5 className="fw-bold">{title}</h5>
        <div className="d-flex align-items-center gap-2">
          <FaRegUser></FaRegUser> {platform}
        </div>
        <hr className="m-2" />
        <div className="d-flex justify-content-between">
          <p className="d-flex align-items-center gap-2 ">
            <ImPlay2></ImPlay2> {courses_number} courses
          </p>
          <p className="d-flex align-items-center gap-2">
            <BiBookReader></BiBookReader> {ebook_number} eBooks
          </p>
        </div>
        <h5>
          ${discount_price}{" "}
          <del className="fs-6 text-danger"> ${orginal_price}</del>{" "}
        </h5>
        <div className="premium-pack-btn ">
          <button className="btn btn-outline-primary fw-bold w-100">
            <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare> More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePack;
