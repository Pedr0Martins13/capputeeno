"use client";
import { InputForm } from "@/app/components/auth/input-form";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { sariaStencilOne } from "@/app/components/header/logo";
import { CiCoffeeCup } from "react-icons/ci";
import Link from "next/link";
import { SubmitButton } from "@/app/components/auth/submit-button";
import { useFormState } from "react-dom";
import { login } from "@/actions/auth";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch}>
      <div className=" bg-zinc-200 shadow-lg flex flex-col space-y-5 px-2 md:px-5 pt-5 pb-3 rounded-md">
        <div className=" inline-flex gap-1.5 items-center">
          <h1
            className={`${sariaStencilOne.className} text-3xl font-bold text-zinc-600`}>
            LogIn
          </h1>
          <CiCoffeeCup size={28} className="text-zinc-700" />
        </div>
        <InputForm
          type="email"
          name="email"
          message="Insira seu email"
          placeholder="Insira seu Email..."
          icon={MdOutlineMail}
          required
        />
        <InputForm
          type="password"
          name="password"
          message="Insira sua senha"
          placeholder="Insira sua senha..."
          icon={RiLockPasswordLine}
          required
        />
        {errorMessage && (
          <div className=" inline-flex items-center gap-2">
            <BsFillExclamationCircleFill className="h-5 w-5 text-red-500" />
            <p className="text-[10px] text-red-500 font-semibold">
              {errorMessage.message}
            </p>
          </div>
        )}
        <SubmitButton label="Entra" />
        <div className="inline-flex">
          <p className="text-sm font-semibold text-zinc-500">
            Ainda não tem uma conta ?
          </p>
          <Link
            href="/register"
            className="ml-2 text-zinc-800 hover:underline text-sm font-bold">
            Click aqui
          </Link>
        </div>
      </div>
    </form>
  );
};
