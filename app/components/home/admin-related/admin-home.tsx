"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "./admin-navbar";
import DisplayRequests from "./display-requests";
import {
  acceptRequest,
  denyRequest,
  getActiveRequest,
  getPassRequest,
} from "@/utils/db-actions";
import { PassRequest } from "@/utils/interfaces";
import ActivePass from "./active-pass";
import { socket } from "@/lib/socket-client";

interface Props {
  teacherName: string;
}

export default function AdminHome({ teacherName }: Props) {
  const [requests, setRequests] = useState<PassRequest[]>([]);
  const [activeRequests, setActiveRequests] = useState<PassRequest[]>([]);

  useEffect(() => {
    const getStudentRequests = async () => {
      setRequests(await getPassRequest(teacherName));
      setActiveRequests(await getActiveRequest(teacherName));
    };

    socket.on("pass-request", (data) => {
      setRequests((prev) => [...prev, data]);
    });

    socket.emit("join-class", teacherName);

    getStudentRequests();

    return () => {
      socket.off("pass-request");
    };
  }, []);

  const acceptRequestFunction = async (
    studentName: string,
    classDepartedFrom: string,
    destination: string,
  ) => {
    setRequests(
      requests.filter(
        (r) =>
          r.studentName !== studentName &&
          r.classDepartedFrom !== classDepartedFrom &&
          r.destination !== destination,
      ),
    );

    const info = {
      studentName,
      classDepartedFrom,
      requestStatus: "approved",
    };

    try {
      await acceptRequest(studentName, classDepartedFrom, destination);

      socket.emit("approve-request", info);
    } catch (error) {
      console.error(error);
    } finally {
      location.reload();
    }
  };

  const denyRequestFunction = async (
    studentName: string,
    classDepartedFrom: string,
    destination: string,
  ) => {
    setRequests(
      requests.filter(
        (r) =>
          r.studentName !== studentName &&
          r.classDepartedFrom !== classDepartedFrom &&
          r.destination !== destination,
      ),
    );

    const info = {
      classDepartedFrom,
      requestStatus: "denied",
    };

    try {
      await denyRequest(studentName, classDepartedFrom, destination);

      socket.emit("deny-request", info)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AdminNavbar />

      <div className="flex flex-col items-center">
        <DisplayRequests
          requests={requests}
          acceptRequestFunction={acceptRequestFunction}
          denyRequestFunction={denyRequestFunction}
        />

        <ActivePass
          activeRequests={activeRequests}
          setActiveRequests={setActiveRequests}
        />
      </div>
    </div>
  );
}
