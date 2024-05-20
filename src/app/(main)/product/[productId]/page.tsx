import { Container } from "@/app/components/container";

import { ProductDetails } from "./product-details";
import { BackButton } from "@/app/components/back-button";

interface IParams {
  productId: string;
}

export default function Products({ params }: { params: IParams }) {
  return (
    <>
      <div className=" py-20">
        <Container>
          <div className=" w-full h-[71px] flex items-center">
            <BackButton label="Voltar" />
          </div>
          <ProductDetails productId={params.productId} />
        </Container>
      </div>
    </>
  );
}
