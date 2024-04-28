import React from "react";

export default function ShowLessBtn(props) {
  return (
    <button
      className={`py-4 text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 ${
        props.className || ""
      }`}
      {...props}
    >
      Show Less
    </button>
  );
}
