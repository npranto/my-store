import React from "react";

const SideMenu = ({ menu = [], onItemClick = () => {} }) => {
  return (
    <div className="flex flex-col justify-between bg-white">
      <ul className="gap-2 overflow-auto flex flex-row items-center lg:flex-col">
        {menu.map((item) => (
          <li key={item.name} className="w-full flex-grow text-nowrap">
            <button
              onClick={() => onItemClick(item.name)}
              className={`w-full text-left rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700 ${
                item.active ? "bg-gray-100 text-gray-700" : "text-gray-500"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
