import * as jose from "jose";
import { cookies } from "next/headers";

export async function openSessionToken(token: string) {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET_KEY);

  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
}

export async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET_KEY);
  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(secret);

  const { exp } = await openSessionToken(session);

  cookies().set("coffee-session", session, {
    maxAge: exp! * 1000,
    path: "/",
    httpOnly: true,
  });
}

export async function isSessionValid() {
  const sessionCookie = cookies().get("coffee-session");

  if (sessionCookie) {
    const { value } = sessionCookie;
    const { exp } = await openSessionToken(value);
    const now = new Date().getTime();
    return exp! * 1000 > now;
  }
  return false;
}

export function deleteToken() {
  cookies().delete("coffee-session");
}
