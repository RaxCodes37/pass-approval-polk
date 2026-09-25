"use client";

import { ApprovedRequest } from "@/utils/interfaces";
import { useEffect } from "react";

interface Props {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  teacherName: string;
  requestStatus: string;
  approvedRequestData: ApprovedRequest[];
}

export default function ApprovedPassPage({
  setMessage,
  teacherName,
  requestStatus,
  approvedRequestData,
}: Props) {
  useEffect(() => {
    setMessage("");
  }, []);

  return (
    <div>
      {approvedRequestData.map((request) => (
        <div
          className="mt-15 w-80 h-fit sm:w-100 border-2 border-[#5abbfc] bg-[#2b5d86] rounded-md flex flex-col items-center text-center"
          id="request-status-display"
          key={request.studentName}
        >
          <h1 className="text-xl font-semibold sm:text-2xl w-full py-3 rounded-t-sm bg-[#4F98C8] shadow-1md">
            Approved Pass for{" "}
            <span className="underline">{request.studentName}</span>
          </h1>

          <p>
            Student left <span className="underline">{teacherName}'s</span>{" "}
            class at{" "}
            <span className="underline">{request.timeOfDeparture}</span>
          </p>

          <p>Going to <span className="underline">{request.destination}</span></p>

          <p>Status: {requestStatus}</p>
        </div>
      ))}
    </div>
  );
}
