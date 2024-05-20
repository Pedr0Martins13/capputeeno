import { ProviderQueryClient } from "@/provider/ProviderQueryClient";
import { SiteHeader } from "../components/header/site-header";
import { CartProvider } from "@/provider/CartProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className=" flex flex-col min-h-screen ">
        <ProviderQueryClient>
          <CartProvider>
            <SiteHeader />
            <main>{children}</main>
          </CartProvider>
        </ProviderQueryClient>
      </div>
    </div>
  );
}
