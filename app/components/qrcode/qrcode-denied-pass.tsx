"use client";

import { useEffect } from "react";

interface Props {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function DeniedPassPage({ setMessage }: Props) {
  useEffect(() => {
    setMessage("");
  }, []);

  return (
    <div
      className="mt-15 w-80 h-fit sm:w-100 border-2 border-[#5abbfc] bg-[#4F98C8] rounded-md flex flex-col items-center text-center"
      id="request-status-display"
    >
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-3">
        Pass request was <span className="text-[#b33636] underline">Denied</span>
      </h1>
    </div>
  );
}
