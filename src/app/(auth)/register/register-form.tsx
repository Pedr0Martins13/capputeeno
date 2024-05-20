"use client";
import { registerUser } from "@/actions/auth";
import { InputForm } from "@/app/components/auth/input-form";
import { sariaStencilOne } from "@/app/components/header/logo";
import { useFormState } from "react-dom";
import { CiCoffeeCup } from "react-icons/ci";

import { BsFillExclamationCircleFill } from "react-icons/bs";

import { SubmitButton } from "@/app/components/auth/submit-button";

export const RegisterForm = () => {
  const [errorMessage, dispatch] = useFormState(registerUser, undefined);

  return (
    <form action={dispatch}>
      <div className=" bg-zinc-200 shadow-lg flex flex-col space-y-5 px-2 md:px-5 pt-5 pb-3 rounded-md">
        <div className=" inline-flex gap-1.5 items-center">
          <h1
            className={`${sariaStencilOne.className} text-3xl font-bold text-zinc-600`}>
            Registrar
          </h1>
          <CiCoffeeCup size={28} className="text-zinc-700" />
        </div>
        <InputForm
          type="text"
          name="name"
          message="Insira seu nome"
          placeholder="Insira seu nome..."
          autoComplete="username"
          required
        />
        <InputForm
          type="email"
          name="email"
          message="Insira seu email"
          placeholder="Insira seu Email..."
          autoComplete="username"
          required
        />
        <InputForm
          type="password"
          name="password"
          message="Insira sua senha"
          placeholder="Insira sua senha..."
          required
          autoComplete="current-password"
        />
        {errorMessage && (
          <div className=" inline-flex items-center gap-2">
            <BsFillExclamationCircleFill className="h-5 w-5 text-red-500" />
            <p className="text-[10px] text-red-500 font-semibold">
              {errorMessage.message}
            </p>
          </div>
        )}

        <SubmitButton label="Registrar" />
      </div>
    </form>
  );
};
