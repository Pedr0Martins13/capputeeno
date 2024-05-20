"use client";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="inline-flex py-2 bg-zinc-600 text-zinc-100 rounded-md items-center justify-center ">
      {pending ? " carregando..." : label}
    </button>
  );
};
