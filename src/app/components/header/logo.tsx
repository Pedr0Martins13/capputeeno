import { Saira_Stencil_One } from "next/font/google";
import Link from "next/link";

export const sariaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <>
      <h1
        className={`${sariaStencilOne.className} hidden md:block text-zinc-600 md:text-[40px] text-3xl`}>
        <Link href={"/"}>CAPPUTEENO</Link>
      </h1>
    </>
  );
};
