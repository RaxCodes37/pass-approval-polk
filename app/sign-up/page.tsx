import AuthNavbar from "../components/auth/auth-navbar";
import SignUpForm from "../components/auth/sign-up-form";

export default function SignUp() {
  return (
    <div>
      <AuthNavbar />

      <div className="flex flex-col items-center">
        <SignUpForm />
      </div>
    </div>
  );
}
