"use client";

import { PassRequest } from "@/utils/interfaces";
import React from "react";

interface Props {
  activeRequests: PassRequest[];
  setActiveRequests: React.Dispatch<React.SetStateAction<PassRequest[]>>;
}

export default function ActivePass({
  activeRequests,
  setActiveRequests,
}: Props) {
  return (
    <div className="mt-20 w-78 sm:w-124 text-center">
      <h1 className="text-xl font-semibold sm:text-2xl w-117.25 py-3 rounded-t-sm bg-[#4F98C8] border-2 border-b border-[#64bffb]">
        Active Pass
      </h1>
      <table className="border-2 border-[#64bffb] bg-[#4F98C8] border-t-0 w-82.5 text-center">
        <thead>
          <tr className="text-center p-2">
            <th className="border border-[#64bffb] border-t-0">Student Name</th>
            <th className="p-2 border border-[#64bffb] border-t-0">
              Destination
            </th>
            <th className="p-2 border border-[#64bffb] border-t-0">Reason</th>
            <th className="p-2 border border-[#64bffb] border-t-0">Status</th>
            <th className="p-2 border border-[#64bffb]">Departure Time</th>
            <th className="p-2 border border-[#64bffb]">Return Time</th>
          </tr>
        </thead>
        <tbody>
          {activeRequests.map((request) => (
            <tr className="border border-[#64bffb] p-2" key={request.passId}>
              <td className="border border-[#64bffb] bg-[#37739b] p-2">
                {request.studentName}
              </td>
              <td className="border border-[#64bffb] bg-[#37739b] p-2">
                {request.destination}
              </td>
              <td className="border border-[#64bffb] bg-[#37739b] p-2">
                {request.reason}
              </td>
              <td className="border border-[#64bffb] bg-[#37739b] p-2">
                {request.status}
              </td>
              <td className="border border-[#64bffb] bg-[#37739b] p-2">
                {request.timeOfDeparture.substring(0, 16)}
              </td>
              {request.timeOfReturn === null ? (
                <td className="border border-[#64bffb] bg-[#37739b] p-2">
                  Null
                </td>
              ) : (
                <td className="border border-[#64bffb] bg-[#37739b] p-2">
                  {request.timeOfReturn.substring(0, 16)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
