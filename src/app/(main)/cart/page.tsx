import { Container } from "../../components/container";
import { BackButton } from "../../components/back-button";

import { ProductsHeader } from "../../components/cart/products-header";
import { ProductSummary } from "./products-summary";
import { ProductsSection } from "./products-section";

export default function Cart() {
  return (
    <>
      <main className="mt-20">
        <Container>
          <div className=" w-full h-full flex flex-col  md:flex-row md:justify-between">
            <div className="w-full h-full flex flex-col">
              <div className=" w-full h-[71px] flex items-center">
                <BackButton label="Voltar" />
              </div>
              <ProductsHeader />
              <div>
                <ProductsSection />
              </div>
            </div>
            <div>
              <ProductSummary />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
