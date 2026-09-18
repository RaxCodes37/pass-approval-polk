"use client";

import { PassRequest } from "@/utils/interfaces";
import React from "react";

interface Props {
  activeRequests: PassRequest[];
  setActiveRequests: React.Dispatch<React.SetStateAction<PassRequest[]>>;
}

export default function ActivePass({activeRequests, setActiveRequests}: Props) {
  console.log(activeRequests);

  return <div></div>;
}
