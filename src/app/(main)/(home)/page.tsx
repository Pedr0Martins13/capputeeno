import { Container } from "../../components/container";
import { ProductContainer } from "./product-container";

export default function Home() {
  return (
    <div>
      <Container>
        <ProductContainer />
      </Container>
    </div>
  );
}
