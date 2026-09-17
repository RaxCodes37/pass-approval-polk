import AdminNavbar from "./admin-navbar";
import DisplayRequests from "./display-requests";

export default function AdminHome() {
  return (
    <div>
      <AdminNavbar />

      <div className="flex justify-center ">
        <DisplayRequests />
      </div>
    </div>
  );
}
