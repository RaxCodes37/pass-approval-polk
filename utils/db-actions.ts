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

export const getAllRequests = async (teacherName: string) => {
  const requests = await db
    .select()
    .from(passesTable)
    .where(eq(passesTable.classDepartedFrom, teacherName));

  return requests as PassRequest[];
};

export const getActiveRequest = async (teacherName: string) => {
  const activeRequest = await db
    .select()
    .from(passesTable)
    .where(
      and(
        eq(passesTable.classDepartedFrom, teacherName),
        eq(passesTable.status, "approved"),
      ),
    );

  return activeRequest as PassRequest[];
};

export const acceptRequest = async (
  studentName: string,
  classDepartedFrom: string,
  destination: string,
) => {
  await db
    .update(passesTable)
    .set({ status: "approved" })
    .where(
      and(
        eq(passesTable.studentName, studentName),
        eq(passesTable.classDepartedFrom, classDepartedFrom),
        eq(passesTable.destination, destination),
      ),
    );
};

export const denyRequest = async (
  studentName: string,
  classDepartedFrom: string,
  destination: string,
) => {
  await db
    .update(passesTable)
    .set({ status: "denied" })
    .where(
      and(
        eq(passesTable.studentName, studentName),
        eq(passesTable.classDepartedFrom, classDepartedFrom),
        eq(passesTable.destination, destination),
      ),
    );
};
