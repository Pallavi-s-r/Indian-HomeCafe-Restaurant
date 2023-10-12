import React from "react";

import "./Aboutus.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <hr></hr>
        <p className="p__opensans" style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      {/* <div className="app__aboutus-content_knife flex__center">
      </div> */}

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <hr></hr>
        <p className="p__opensans" style={{ color: "white" }}>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button
          type="button"
          className="custom__button"
          style={{ color: "white" }}
        >
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
