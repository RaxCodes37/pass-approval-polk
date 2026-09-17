import AdminNavbar from "./admin-navbar";
import DisplayRequests from "./display-requests";

interface Props {
  teacherName: string
}

export default function AdminHome({teacherName}: Props) {
  return (
    <div>
      <AdminNavbar />

      <div className="flex justify-center ">
        <DisplayRequests />
      </div>
    </div>
  );
}
