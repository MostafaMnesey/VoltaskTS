import { Spinner } from "flowbite-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
      <Spinner aria-label="Loading content" size="xl" color="info" />
      <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-200">
        Loading...
      </span>
    </div>
  );
}
