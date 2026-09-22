"use client";

import { useState } from "react";
import PassForm from "./pass-form";

interface Props {
  studentName: string;
}

export default function StudentHome({ studentName }: Props) {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-6 rounded-b-md bg-[#4F98C8] text-center">
        Welcome, <span className="underline">{studentName}</span>
      </h1>

      <PassForm studentName={studentName} setMessage={setMessage} />

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
