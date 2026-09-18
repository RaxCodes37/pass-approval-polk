"use server";

import { db } from "@/lib";
import { passesTable } from "@/schema";
import { PassRequest, RequestingPass } from "./interfaces";
import { and, eq } from "drizzle-orm";

export const sendPassRequest = async ({
  studentName,
  classDepartedFrom,
  destination,
  reason,
}: RequestingPass) => {
  const newRequest = await db.insert(passesTable).values({
    studentName,
    classDepartedFrom,
    destination,
    reason,
  });

  return newRequest as RequestingPass[];
};

export const getPassRequest = async (teacherName: string) => {
  const requests = await db
    .select()
    .from(passesTable)
    .where(
      and(
        eq(passesTable.classDepartedFrom, teacherName),
        eq(passesTable.status, "pending"),
      ),
    );

  return requests as PassRequest[];
};

export const acceptRequest = async (passId: string) => {
  await db
    .update(passesTable)
    .set({ status: "approved" })
    .where(eq(passesTable.passId, passId));
};

export const denyRequest = async (passId: string) => {
  await db
    .update(passesTable)
    .set({ status: "denied" })
    .where(eq(passesTable.passId, passId));
};