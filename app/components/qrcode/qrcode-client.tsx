"use client";

import { useEffect, useState } from "react";
import QrCodePassForm from "./qrcode-pass-form";
import { socket } from "@/lib/socket-client";
import ApprovedPassPage from "./qrcode-approved-pass";
import DeniedPassPage from "./qrcode-denied-pass";
import { ApprovedRequest } from "@/utils/interfaces";

interface Props {
  teacherName: string;
}

export default function QrCodePageClient({ teacherName }: Props) {
  const [message, setMessage] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<string>("");
  const [approvedRequestData, setApprovedRequestData] = useState<
    ApprovedRequest[]
  >([]);

  useEffect(() => {
    socket.emit("join-class", teacherName);

    socket.on("approve-request", (data) => setRequestStatus(data));
    socket.on("approved-request-info", (data) => {
      setApprovedRequestData((prev) => [...prev, data]);
    });
    socket.on("deny-request", (data) => setRequestStatus(data));

    return () => {
      socket.off("approve-request");
      socket.off("approved-request-info");
      socket.off("deny-request");
    };
  }, []);

  console.log(approvedRequestData);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-6 rounded-b-md bg-[#4F98C8] text-center">
        Pass From {teacherName}'s class
      </h1>

      {requestStatus === "approved" ? (
        <ApprovedPassPage
          setMessage={setMessage}
          teacherName={teacherName}
          requestStatus={requestStatus}
          approvedRequestData={approvedRequestData}
        />
      ) : requestStatus === "denied" ? (
        <DeniedPassPage setMessage={setMessage} />
      ) : (
        <QrCodePassForm setMessage={setMessage} teacherName={teacherName} />
      )}

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
