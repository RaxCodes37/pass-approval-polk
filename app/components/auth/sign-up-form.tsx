import { signUpAction } from "@/app/api/auth";

export default function SignUpForm() {
  return (
    <form
      action={signUpAction}
      className="mt-30 w-80 h-fit sm:w-100 border-2 border-[#5abbfc] bg-[#2b5d86] rounded-md flex flex-col items-center text-center"
      id="auth-form"
    >
      <h1 className="text-xl font-semibold sm:text-2xl w-full py-3 rounded-t-sm bg-[#4F98C8] shadow-1md">
        Sign Up
      </h1>

      <div className="mt-3 flex flex-col gap-3">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="border rounded-md border-[#5abbfc] bg-[#39769f] px-2 py-1"
        />
        <input
          type="text"
          name="email"
          required
          placeholder="Student email"
          className="border rounded-md border-[#5abbfc] bg-[#39769f] px-2 py-1"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="border rounded-md border-[#5abbfc] bg-[#39769f] px-2 py-1"
        />
      </div>

      <button
        type="submit"
        className="my-3 border rounded-md border-[#5abbfc] bg-[#39769f] px-2 py-1"
      >
        Sign Up
      </button>
    </form>
  );
}
