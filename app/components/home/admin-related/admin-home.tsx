"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "./admin-navbar";
import DisplayRequests from "./display-requests";
import { acceptRequest, denyRequest, getPassRequest } from "@/utils/db-actions";
import { PassRequest } from "@/utils/interfaces";

interface Props {
  teacherName: string;
}

export default function AdminHome({ teacherName }: Props) {
  const [requests, setRequests] = useState<PassRequest[]>([]);

  useEffect(() => {
    const getStudentRequests = async () => {
      setRequests(await getPassRequest(teacherName));
    };

    getStudentRequests();
  }, []);

  const acceptRequestFunction = async (passId: string) => {
    setRequests(requests.filter((r) => r.passId !== passId));

    try {
      await acceptRequest(passId);
    } catch (error) {
      console.error(error);
    }
  };

  const denyRequestFunction = async (passId: string) => {
    setRequests(requests.filter((r) => r.passId !== passId));

    try {
      await denyRequest(passId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AdminNavbar />

      <div className="flex justify-center">
        <DisplayRequests requests={requests} setRequests={setRequests} acceptRequestFunction={acceptRequestFunction} denyRequestFunction={denyRequestFunction}/>
      </div>
    </div>
  );
}
