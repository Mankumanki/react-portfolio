import React from "react";

function Footer() {
  return (
    <footer className="py-3 mt-5">
      <ul className="nav justify-content-center pb-3 mt-3 mb-4">
        <button className="btn btn-primary btn-lg btnStyle">
          Let's Connect!
        </button>
      </ul>
      <p className="text-center" style={{ color: "rgb(139, 139, 139)" }}>
        © {new Date().getFullYear()} Sarthak Mehta, All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
