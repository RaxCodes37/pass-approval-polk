"use client";

import { useEffect } from "react";

interface Props {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  teacherName: string;
}

export default function ApprovedPassPage({ setMessage, teacherName }: Props) {
  useEffect(() => {
    setMessage("");
  }, []);

  return (
    <div
      className="mt-15 w-80 h-fit sm:w-100 border-2 border-[#5abbfc] bg-[#2b5d86] rounded-md flex flex-col items-center text-center"
      id="request-status-display"
    >
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-3 rounded-t-sm bg-[#4F98C8] shadow-1md">
        Approved Pass
      </h1>

      <div>Will add: time of departure, and supposed destination</div>
    </div>
  );
}
