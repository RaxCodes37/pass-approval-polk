"use client";

import { PassRequest } from "@/utils/interfaces";

interface Props {
  allRequests: PassRequest[];
}

export default function displayAllRequests({ allRequests }: Props) {
  return (
    <table className="border-3 border-[#64bffb] bg-[#4F98C8] w-70 sm:w-90 text-center mt-5">
      <thead>
        <tr className="text-center p-2">
          <th className="border border-[#64bffb]">Student Name</th>
          <th className="p-2 border border-[#64bffb]">Destination</th>
          <th className="p-2 border border-[#64bffb]">Reason</th>
          <th className="p-2 border border-[#64bffb]">Status</th>
          {
            // ! This is giving a typing error, will fix later
            // <th className="p-2 border border-[#64bffb]">Departure Time</th>
            // <th className="p-2 border border-[#64bffb]">Return Time</th>
          }
        </tr>
      </thead>
      <tbody>
        {allRequests.map((request) => (
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
            {
              // ! Part of typing error.
              // <td className="border border-[#64bffb] bg-[#37739b] p-2">
              //   {request.timeOfDeparture}
              // </td>
              // <td className="border border-[#64bffb] bg-[#37739b]p-2">
              //   {request.timeOfReturn}
              // </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}
