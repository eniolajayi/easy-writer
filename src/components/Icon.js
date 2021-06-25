import React from "react";

const getIconPath = (iconType) => {
  if (iconType === "bold") {
    return "M43.2,29.3c5.1-1.9,8-6.7,8-12.8c0-4.8-1.3-8.8-5.1-11.7C42.9,1.3,38.4,0,33.3,0H10.7C9.3,0,8,1.3,8,2.7v58.7	c0,1.6,1.3,2.7,2.7,2.7h25.9c5.6,0,10.4-1.9,13.9-5.6c3.7-3.7,5.6-8,5.6-13.6C56,36.8,51.2,30.7,43.2,29.3z M21.3,13.3h9.1	c4.3,0,7.2,2.9,7.2,6.7s-2.9,6.7-7.2,6.7h-9.1V13.3z M34.1,53.3H21.3v-16h12.8c5.1,0,8.8,3.2,8.8,7.7C42.9,49.9,39.2,53.3,34.1,53.3	z";
  } else if (iconType === "italic") {
    return "";
  } else if (iconType === "underline") {
    return "";
  }
};

const Icon = ({ type }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enable-background="new 0 0 64 64"
      version="1.1"
      viewBox="0 0 64 64"
    >
      <path d={getIconPath(type)} />
    </svg>
  );
};

export default Icon;