import { prisma } from "@/libs/prisma";
import { compare, hash } from "bcryptjs";

export async function validateUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    throw new Error("Email já está sendo usado por outro usuário");
  }
}

export async function createUser(userData: {
  name: string;
  email: string;
  password: string;
}) {
  const { name, email, password } = userData;
  const passwordHash = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
    },
  });

  return {
    user,
  };
}

export async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return { user };
}

export async function passwordIsMatch(password: string, hash: string) {
  if (!(await compare(password, hash))) {
    throw new Error("Email ou senha inválidos");
  }
  return;
}
