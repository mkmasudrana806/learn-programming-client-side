import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";

const PDF = () => {
  const ref = useRef();
  return (
    <div className="print">
      <div className="sss">
        <div ref={ref} className="p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tempore repellat facere repellendus labore maiores aperiam
            consectetur maxime dolorum quos quibusdam, vel vero saepe possimus.
            Exercitationem consequatur cum perspiciatis sapiente?
          </p>
        </div>
      </div>
      <ReactToPrint
        trigger={() => <Button>Print</Button>}
        content={() => ref.current}
      ></ReactToPrint>
    </div>
  );
};

export default PDF;
