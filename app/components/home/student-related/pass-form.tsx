"use client";

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
      className="w-fit h-fit sm:w-80 mt-30 border-2 rounded-md flex flex-col items-center px-5 py-3 pb-5"
      id="pass-form"
    >
      <h1 className="text-xl sm:text-2xl font-bold">Request a Pass</h1>
      <form
        onSubmit={sendPassRequestFunction}
        className="mt-2 flex flex-col items-center gap-2"
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
          className="py-1 px-2 bg-[#2b397b] border-2 border-[#4556a7] rounded-md text-[1.2rem]"
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
