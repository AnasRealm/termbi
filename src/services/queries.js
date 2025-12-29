import { useQuery } from '@tanstack/react-query';
import ProductsServices from './products';

export function useGetProductsQuery({ sort = 'name', category_id = 1 } = {}) {
  return useQuery({
    queryKey: ['products', sort, category_id],
    queryFn: () => ProductsServices.getAllProducts({ sort, category_id }),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}

export function useGetCategoriesQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => ProductsServices.getAllCategories(),
    staleTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}