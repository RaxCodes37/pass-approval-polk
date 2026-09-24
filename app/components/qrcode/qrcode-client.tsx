"use client";

import { useState } from "react";
import QrCodePassForm from "./qrcode-pass-form";

interface Props {
  teacherName: string
}

export default function QrCodePageClient({teacherName}: Props) {
  const [message, setMessage] = useState<string>("");
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-6 rounded-b-md bg-[#4F98C8] text-center">
        Ask for a Pass From {teacherName}'s class
      </h1>

      <QrCodePassForm setMessage={setMessage} teacherName={teacherName}/>

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
