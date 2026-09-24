import QrCodePageClient from "@/app/components/qrcode/qrcode-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type AdminPageParams = {
  params: Promise<{teacherName: string}>
}

export default async function QRCodePage({params}: AdminPageParams) {
  const { teacherName } = await params
  const session = await getSession();
  if(!session) redirect("/sign-in")

  return <QrCodePageClient teacherName={teacherName}/>;
}
