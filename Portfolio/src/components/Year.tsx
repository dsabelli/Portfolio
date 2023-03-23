import React from "react";

const Year = () => {
  const year: number = new Date().getFullYear();
  return (
    <div>
      {" "}
      <p className="text-sm font-mono">Copyright © {year} dansabelli.com</p>
    </div>
  );
};

export default Year;
