import { httpClient } from '../lib/axios/axios';

class ProductsServices {
  async getAllProducts({ sort = 'name', category_id = 1 } = {}) {
    try {
      const response = await httpClient.get('/products', {
        params: {
          restaurant_admin_id: 8,
          sort_term: 'asc',
          sort_by: sort,
          category_id: category_id,
        },
      });
      return response.data?.data || [];
    } catch (error) {
      console.error('Products API Error:', error);
      return [];
    }
  }

  async getAllCategories() {
    try {
      const response = await httpClient.get(
        `/categories?with_products=1&restaurant_admin_id=8&sort_term=desc&sort_by=name`
      );
      return response.data?.data || [];
    } catch (error) {
      console.error('Categories API Error:', error);
      return [];
    }
  }
}

export default new ProductsServices();