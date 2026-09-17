"use server";

import { db } from "@/lib";
import { passesTable } from "@/schema";
import { getPassRequests, RequestingPass } from "./interfaces";
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

export const getPassRequest = async ({ teacherName }: getPassRequests) => {
  const requests = await db
    .select()
    .from(passesTable)
    .where(
      and(
        eq(passesTable.classDepartedFrom, teacherName),
        eq(passesTable.status, "not approved"),
      ),
    );

  return requests as RequestingPass[];
};
