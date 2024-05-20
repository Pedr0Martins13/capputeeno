import { apiAxios } from "@/libs/axios";
import { IProduct } from "@/models/IProduct";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const handleProduct = (id: string): AxiosPromise<IProduct> => {
  //console.log(id);
  return apiAxios.post("/", {
    query: `query{
  Product(id: "${id}"){
    id,
    name,
    category,
    description,
    image_url,
    price_in_cents,
  }
}`,
  });
};

export function useGetProductById(productId: string) {
  const { data } = useQuery({
    queryFn: () => handleProduct(productId),
    queryKey: ["product", productId],
    staleTime: 1000 * 60 * 5,
  });

  const product = data?.data.data.Product;

  return product;
}
