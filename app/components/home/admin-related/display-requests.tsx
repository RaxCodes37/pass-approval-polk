import { PassRequest } from "@/utils/interfaces";
import React from "react";

interface Props {
  requests: PassRequest[];
  setRequests: React.Dispatch<React.SetStateAction<PassRequest[]>>;
  acceptRequestFunction: (passId: string) => void;
  denyRequestFunction: (passId: string) => void;
}

export default function DisplayRequests({
  requests,
  setRequests,
  acceptRequestFunction,
  denyRequestFunction,
}: Props) {
  return (
    <div
      className="mt-30 w-80 h-fit sm:w-100 border-2 border-[#5abbfc] bg-[#2b5d86] rounded-md flex flex-col items-center text-center"
      id="requests-display"
    >
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-3 rounded-t-sm bg-[#4F98C8] shadow-1md">
        All Requests
      </h1>
      <div className="min-h-80 h-fit w-full p-2 flex flex-col gap-2">
        {requests.map((request) => (
          <div
            key={request.passId}
            className="flex flex-col border border-[#64bffb] bg-[#4F98C8] px-2 py-1 rounded-md"
          >
            <div className="flex justify-between">
              <p className="underline">{request.studentName}</p>

              <div>
                <p className="text-[#2e6795]">
                  From{" "}
                  <span className="underline">{request.classDepartedFrom}</span>{" "}
                  to <span className="underline">{request.destination}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-left">{request.reason}</p>
              <p className="text-right text-[#2e6795]">{request.status}</p>
            </div>

            <div className="mt-2 mb-1 flex justify-between gap-4 self-center w-[60%]">
              <button
                className="accept-request-btn"
                onClick={() => acceptRequestFunction(request.passId)}
              >
                Accept
              </button>
              <button
                className="deny-request-btn"
                onClick={() => denyRequestFunction(request.passId)}
              >
                Deny
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
