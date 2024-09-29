import React from "react";
import avatar from "../img/avatar.png";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Squash } from "hamburger-react";

function Header() {
  const [tool, setTooltip] = React.useState(false);
  const [showNow, setShowNow] = React.useState("hidden");

  function showTooltip() {
    setTooltip(true);
  }
  function hideTooltip() {
    setTooltip(false);
  }

  setInterval(() => {
    setShowNow("visible");
  }, 5400);

  return (
    <div
      className={`${showNow == "visible" && "navbar"} mt-5`}
      style={{ visibility: showNow, position: "fixed" }}
    >
      <div className="container d-flex justify-content-between">
        <span
          style={{ fontFamily: "Asap, sans-serif" }}
          className={`px-3 ${tool ? "Tool-tipShow" : "Tool-tipHide"}`}
        >
          Know About Me !
        </span>
        <a
          id="profileAnchor"
          onMouseOver={showTooltip}
          onMouseOut={hideTooltip}
          href="#"
        >
          <img id="profile" src={avatar} />
        </a>

        <div className="d-flex align-items-center gap-4">
          <a
            id="linked-in"
            className="social-sites"
            href="https://www.linkedin.com/in/smehta26/"
            target="_blank"
          >
            <IconContext.Provider value={{ color: "gray", size: 30 }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a
            id="github"
            className="social-sites"
            href="https://github.com/Mankumanki"
            target="_blank"
          >
            <IconContext.Provider value={{ color: "gray", size: 30 }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
          <Squash size={20} color="gray" />
        </div>
      </div>
    </div>
  );
}

export default Header;
