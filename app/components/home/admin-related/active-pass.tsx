"use client";

import { socket } from "@/lib/socket-client";
import { endActivePass } from "@/utils/db-actions";
import { PassRequest } from "@/utils/interfaces";
import React, { useState } from "react";

interface Props {
  activeRequests: PassRequest[];
  setActiveRequests: React.Dispatch<React.SetStateAction<PassRequest[]>>;
}

export default function ActivePass({
  activeRequests,
  setActiveRequests,
}: Props) {
  const [message, setMessage] = useState<string>("");

  const endActivePassFunction = async (passId: string, classDepartedFrom: string) => {
    setActiveRequests(activeRequests.filter((aR) => aR.passId !== passId));

    const info = {
      classDepartedFrom,
      requestStatus: "ended"
    }

    socket.emit("end-pass", info)

    try {
      await endActivePass(passId);

      setMessage("Pass ended successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Error while ending active pass, try again later");
    }
  };

  return (
    <div className="mt-20 w-78 sm:w-130 text-center">
      <h1 className="text-xl font-semibold sm:text-2xl w-ful py-3 rounded-t-sm bg-[#4F98C8] border-2 border-b border-[#64bffb]">
        Active Pass
      </h1>
      <table className="border-2 border-[#64bffb] bg-[#4F98C8] border-t-0 w-full text-center">
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
                  <button onClick={() => endActivePassFunction(request.passId, request.classDepartedFrom)} className="end-pass-btn">
                    End
                  </button>
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

      {message === "" ? (
        <div></div>
      ) : (
        <div className="mt-10">
          <p className="font-bold text-xl">{message}</p>
        </div>
      )}
    </div>
  );
}
