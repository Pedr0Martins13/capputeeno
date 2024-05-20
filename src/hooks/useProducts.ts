import { apiAxios } from "@/libs/axios";
import { AxiosPromise } from "axios";
import { IProductsResponse } from "../models/IProductsResponse";
import { useQuery } from "react-query";
import { FilterType } from "@/models/FilterTypes";
import { PriorityType } from "@/models/PriorityType";
import { convertPriority } from "@/utils/convertPriority";
import { useDeferredValue } from "react";
import { useSearchParams } from "next/navigation";

interface IConstructorURL {
  filter: FilterType;
  priority: PriorityType;
  page: number;
  perPage: number;
}
// function to create custom query URL for different filters
const constructorUrl = ({
  filter,
  priority,
  page,
  perPage,
}: IConstructorURL) => {
  if (priority === "news" && filter === "all") {
    return `query{
  allProducts(page: ${
    page - 1
  } ,perPage: ${perPage} sortField: "created_at", sortOrder: "DLC"){
    id,
    name,
    image_url,
    price_in_cents,
    category,
    sales,
  }
  _allProductsMeta{
    count
  }
}`;
  }

  const priorityFilter = convertPriority(priority);
  const currentFilter = filter === "all" ? "" : filter;
  const _allProductsMeta = !currentFilter
    ? `_allProductsMeta{ count }`
    : `_allProductsMeta(filter: {category: "${currentFilter}"}){ count }`;
  return `query{
  allProducts(page: ${page - 1}, perPage: ${perPage}, ${
    currentFilter
      ? `filter: {category: "${currentFilter}"}, sortField: "${priorityFilter.sortField}", sortOrder: "${priorityFilter.sortOrder}"`
      : `sortField: "${priorityFilter.sortField}", sortOrder: "${priorityFilter.sortOrder}"`
  }){
    id,
    name,
    image_url,
    price_in_cents,
    category,
    sales,
  }
  ${_allProductsMeta}
}`;
};
//
const handleFetch = async (
  query: string
): Promise<AxiosPromise<IProductsResponse>> => {
  return await apiAxios.post("/", {
    query,
  });
};

export function useProducts() {
  const params = useSearchParams();

  const currentFilter = params.get("filter") as FilterType;
  const currentPriority = params.get("priority") as PriorityType;
  const currentPage = Number(params.get("page")) || 1;
  const search = params.get("query") || "";
  const searchDeferred = useDeferredValue(search);

  const query = constructorUrl({
    filter: currentFilter,
    priority: currentPriority,
    perPage: 8,
    page: currentPage,
  });

  const { data, isLoading } = useQuery({
    queryFn: async () => await handleFetch(query),
    queryKey: ["products", currentFilter, currentPriority, currentPage],
    staleTime: 1000 * 60 * 1,
  });

  const products = data?.data.data.allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  // console.log(data);
  const totalProducts = searchDeferred
    ? products?.length
    : data?.data.data._allProductsMeta.count;
  const totalPages = Math.ceil(totalProducts! / 8);
  return {
    products,
    isLoading,
    totalPages,
  };
}
