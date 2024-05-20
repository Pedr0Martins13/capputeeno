import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";
import { sariaStencilOne } from "./logo";

export const MobileLogo = () => {
  return (
    <div className="block md:hidden">
      <Link
        href="/"
        className={`${sariaStencilOne.className} inline-flex items-end text-zinc-600 text-sm leading-relaxed`}>
        <CiCoffeeCup size={30} className="text-zinc-600" />
        CAPPUTEENO
      </Link>
    </div>
  );
};
