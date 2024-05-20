import { IProduct } from "@/models/IProducts";

export interface IProductsResponse {
  data: {
    allProducts: IProduct[];
    _allProductsMeta: {
      count: number;
    };
  };
}
