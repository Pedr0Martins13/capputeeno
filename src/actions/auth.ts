"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createSessionToken } from "./service/jwt";
import {
  createUser,
  getUser,
  passwordIsMatch,
  validateUserByEmail,
} from "./service/auth-services";

// schema to validade form data
const formSchema = z.object({
  name: z.string().min(3, { message: "O nome está invalido" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 dígitos" })
    .max(12, { message: "A senha precisa ter no máximo 12 dígitos" }),
});

export async function registerUser(
  _preventState: { message: string } | undefined,
  formData: FormData
) {
  // adding a delay
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = formSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!data.success) {
    return {
      message: `Erro no formulário. ${data.error.errors[0].message} `,
    };
  }
  const { name, email, password } = data.data;

  try {
    await validateUserByEmail(email);
    await createUser({ name, email, password });

    // console.log(user);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return {
        message: e.message,
      };
    }
    throw e;
  }
  redirect("/login/");
}

const authenticateSchema = formSchema.omit({ name: true });
export async function login(
  _preventState: { message: string } | undefined,
  formData: FormData
) {
  const data = authenticateSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!data.success) {
    return {
      message: "Email ou senha inválidos",
    };
  }

  const { email, password } = data.data;

  try {
    const { user } = await getUser(email);

    await passwordIsMatch(password, user.password);
    await createSessionToken({ sub: user.id, name: user.name });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    }
    throw error;
  }
  redirect("/");
}
