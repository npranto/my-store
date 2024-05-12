import React from "react";

export default function ShowMoreBtn(props) {
  return (
    <button
      className={`py-4 text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 ${
        props.className || ""
      }`}
      data-component-id="show-more-btn"
      {...props}
    >
      Show More
    </button>
  );
}
