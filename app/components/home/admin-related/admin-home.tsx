import AdminNavbar from "./admin-navbar";
import DisplayRequests from "./display-requests";

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
