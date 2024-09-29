import React from "react";
import { projectImg, projectImg2 } from "./App";

function JobCard(props) {
  return (
    <div className="col p-4 justify-content-center boxDesign mb-5 mt-5 mx-auto">
      <div className=" p-3 pt-lg-3">
        <h2 className="fw-bold lh-1 mb-5">{props.data.role}</h2>
        <p
          style={{
            fontSize: "13px",
            color: "rgb(116, 116, 116)",
            fontWeight: "700",
          }}
        >
          {props.data.company}
          <br />
          {props.data.timeline}
        </p>
        <p style={{ fontSize: "15px", color: "gray" }}>
          {props.data.description}
        </p>
      </div>
      <div className="p-0 overflow-hidden">
        <img
          className="px-3"
          src={props.data.company == "Deloitte" ? projectImg2 : projectImg}
          alt={
            props.data.company == "Deloitte"
              ? "ServiceNow"
              : "Unreal Engine Plugin"
          }
          width="100%"
        />
      </div>
    </div>
  );
}

export default JobCard;
