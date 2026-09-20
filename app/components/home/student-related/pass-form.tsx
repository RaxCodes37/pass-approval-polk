"use client";

import { socket } from "@/lib/socket-client";
import { sendPassRequest } from "@/utils/db-actions";
import { RequestingPass } from "@/utils/interfaces";
import React, { useState } from "react";

interface Props {
  studentName: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

export default function PassForm({ studentName, setMessage }: Props) {
  const [classDepartedFrom, setClassDepartedFrom] = useState<string>("");
  const [destination, setDestination] = useState<string>("none");
  const [reason, setReason] = useState<string>("");

  const sendPassRequestFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    const info: RequestingPass = {
      studentName,
      classDepartedFrom,
      destination,
      reason,
    };

    try {
      await sendPassRequest(info);
      socket.emit("pass-request", info);

      setMessage("Pass request sent successfully!");
    } catch (error) {
      console.error(error);
      setMessage(
        `Suffered an error while submitting your pass request, please try again later.`,
      );
    }
  };

  return (
    <div
      className="w-fit h-fit sm:w-80 mt-30 border-2 rounded-md flex flex-col items-center border-[#5abbfc] bg-[#2b5d86]"
      id="pass-form"
    >
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-3 rounded-t-sm bg-[#4F98C8] shadow-1md text-center">Request a Pass</h1>
      <form
        onSubmit={sendPassRequestFunction}
        className="mt-2 flex flex-col items-center gap-2 px-5 py-2.5 pb-5"
      >
        <input
          type="text"
          placeholder="Current Class"
          required
          value={classDepartedFrom}
          onChange={(e) => setClassDepartedFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reason"
          required
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <select
          className="border rounded-md border-[#5abbfc] bg-[#39769f] p-2 text-xl"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option value="none">Select Destination</option>
          <option value="Office">Office</option>
          <option value="Clinic">Clinic</option>
          <option value="Bathroom">Bathroom</option>
          <option value="water Fountain">Water Fountain</option>
        </select>
        <button>Submit Request</button>
      </form>
    </div>
  );
}
