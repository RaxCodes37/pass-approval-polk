"use server"

import { db } from "@/lib";
import { passesTable } from "@/schema";
import { RequestingPass } from "./interfaces";

export const sendPassRequest = async ({studentName, classDepartedFrom, destination, reason}: RequestingPass) => {
  const newRequest = await db.insert(passesTable).values({
    studentName,
    classDepartedFrom,
    destination,
    reason,
  });

  return newRequest as RequestingPass[];
}
