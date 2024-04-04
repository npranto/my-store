import React from "react";

export default function SettingsPage() {
  return (
    <div className="max-w-screen-xl p-4 sm:p-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Update user settings and preferences
          </p>
        </div>
      </div>
    </div>
  );
}
