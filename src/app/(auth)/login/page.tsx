import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" mx-auto w-full max-w-[400px] ">
        <LoginForm />
      </div>
    </div>
  );
}
