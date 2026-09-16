import AdminNavbar from "./admin-related/admin-navbar";
import DisplayRequests from "./admin-related/display-requests";

export default function AdminHome() {
  //Check again, if not admin -> back to student page

  return (
    <div>
      <AdminNavbar />

      <div className="flex justify-center ">
        <DisplayRequests />
      </div>
    </div>
  );
}
