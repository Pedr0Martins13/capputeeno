import { Container } from "../container";
import { HeaderSearch } from "./header-search";
import { Cart } from "./cart-button";
import { Logo } from "./logo";
import { MobileLogo } from "./mobile-logo";

export const SiteHeader = () => {
  return (
    <>
      <header className=" fixed top-0 z-30 w-full h-20 py-[19px] bg-white border-b-zinc-300 shadow-sm">
        <Container>
          <nav className=" w-full flex items-center justify-between max-sm:space-x-1">
            <div>
              <Logo />
              <MobileLogo />
            </div>
            <div className=" flex w-fit justify-between items-center md:gap-6 max-sm:space-x-1">
              <div>
                <HeaderSearch />
              </div>
              <div>
                <Cart />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};
