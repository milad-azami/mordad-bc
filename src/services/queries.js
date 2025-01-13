import { useQuery } from "@tanstack/react-query";

import api from "../config/api";

const useGetAllProducts = (page) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10`);
  const queryKey = ["all-products", page];

  return useQuery({ queryFn, queryKey });
};

export { useGetAllProducts };
