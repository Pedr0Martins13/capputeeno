import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="mx-auto w-full max-w-[400px]">
        <RegisterForm />
      </div>
    </div>
  );
}
