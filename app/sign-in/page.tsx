import AuthNavbar from "../components/auth/auth-navbar";
import SignInForm from "../components/auth/sign-in-form";

export default function SignIn() {
  return (
    <div>
      <AuthNavbar />
      <div className="flex flex-col items-center">
        <SignInForm />
      </div>
    </div>
  );
}
