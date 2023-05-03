/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Button = ({ href, title, svg, className, download }) => {
  return (
    <a
      href={href}
      className={className}
      download={download}
      target="_blank"
      rel="noreferrer"
    >
      {title}
      <img src={svg} className="button__icon" />
    </a>
  );
};

export default Button;
