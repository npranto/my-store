import React from "react";

export default function PageHeader({ header = "", description = "" }) {
  if (!header) return null;

  return (
    <div className="py-4 sm:py-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {header}
          </h1>

          {description && (
            <p className="mt-1.5 text-sm text-gray-500">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
