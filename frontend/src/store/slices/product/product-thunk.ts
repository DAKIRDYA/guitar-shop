import { DataPathUrl } from '../../../common/constants/const';
import { ProductType } from '../../../common/types/product-type';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { PRODUCT_SLICE_NAME } from '../slice-names';


export const fetchProductsAction = createAppAsyncThunk<ProductType[], void>(
  `${PRODUCT_SLICE_NAME}/fetchProducts`,
  async (_, { extra: api },
  ) => {
    const { data } = await api.get<ProductType[]>(DataPathUrl.Products);
    return data;
  }
);

export const fetchProductAction = createAppAsyncThunk<ProductType, void>(
  `${PRODUCT_SLICE_NAME}/fetchProduct`,
  async (productId, {extra: api }) => {

    const response = await api.get<ProductType>(`${DataPathUrl.Products}/${productId}`);

    return response.data;
  });
