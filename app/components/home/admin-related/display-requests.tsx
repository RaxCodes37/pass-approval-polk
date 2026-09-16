import React from "react";

export default function DisplayRequests() {
  return (
    <div
      className="mt-30 w-80 h-fit sm:w-100 border-2 border-[#5abbfc] bg-[#2b5d86] rounded-md flex flex-col items-center text-center"
      id="requests-display"
    >
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-3 rounded-t-sm bg-[#4F98C8] shadow-1md">
        All Requests
      </h1>
      <div className="h-80 px-2">
        <p>All requests will be displayed here</p>
      </div>
    </div>
  );
}
