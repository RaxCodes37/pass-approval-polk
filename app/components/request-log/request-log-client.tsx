"use client"

import { getAllRequests } from "@/utils/db-actions";
import { PassRequest } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import DisplayAllRequests from "./display-all-requests";

interface Props {
  teacherName: string
}

export default function RequestLogClient({teacherName}: Props) {
  const [allRequests, setAllRequests] = useState<PassRequest[]>([]);
  
  useEffect(() => {
    const getAllRequestsFunction = async () => {
      setAllRequests(await getAllRequests(teacherName))
    }

    getAllRequestsFunction();
  }, [])
  
  return (
    <div>
      <DisplayAllRequests allRequests={allRequests}/>
    </div>
  )
}
