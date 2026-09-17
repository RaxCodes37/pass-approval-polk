"use client"

import { useState } from "react";
import PassForm from "./pass-form";

interface Props {
  studentName: string
}

export default function StudentHome({studentName}: Props) {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex flex-col items-center">
      <PassForm studentName={studentName} setMessage={setMessage}/>
    </div>
  );
}
