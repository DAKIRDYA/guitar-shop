import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCT_SLICE_NAME } from "../slice-names";
import { ProductState } from "../../types";
import { productMocks } from "../../../mocks/product-mocks";
import { DEFAULT_CURRENT_PAGE, SortDirection, SortVariants } from "../../../common/constants/const";
import { RequestStatus } from "../../../services/api";
import { fetchProductsAction } from './product-thunk';
import { GuitarStringCount, GuitarType, ProductType } from "../../../common/types/product-type";




const initialState: ProductState = {
  products: [...productMocks],
  currentPage: DEFAULT_CURRENT_PAGE,
  sortVariant: SortVariants.price,
  sortDirection: SortDirection.Down,
  filterGuitarType: [GuitarType.Acoustic],
  filterGuitarStringCount: [GuitarStringCount.Six],
  requestStatus: RequestStatus.Idle,
};





export const productsSlice = createSlice({
  name: PRODUCT_SLICE_NAME,
  initialState: initialState,
  reducers: {
    changeSortVariant(state, action:PayloadAction<SortVariants>) {
      state.sortVariant = action.payload;
    },
    changeSortDirection(state, action:PayloadAction<SortDirection>) {
      state.sortDirection = action.payload;
    },
    changeFilterGuitarType(state, action:PayloadAction<GuitarType[]>) {
      state.filterGuitarType = [...action.payload];
    },
    resetFilters(state) {
      state.filterGuitarType = [GuitarType.Acoustic];
      state.filterGuitarStringCount = [GuitarStringCount.Six]

    },
    changeFilterGuitarStringCount(state, action:PayloadAction<GuitarStringCount[]>) {
      state.filterGuitarStringCount = [...action.payload];
    },
    changeCurrentPage(state, action:PayloadAction<number>) {
      state.currentPage = action.payload;
    },

    //Заглушки на время отсутствия связи с бэкендом
    //--------------------------------------------------------------
    updateProducts: (state, action: PayloadAction<ProductType>) => {
      state.products= state.products.map((product) =>
        product.id === action.payload.id
          ? action.payload
          : product);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products= state.products.filter((product) => product.id !== action.payload);
   },
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload)
  }
  //--------------------------------------------------------------
},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProductsAction.pending,
        (state) => {
          state.requestStatus = RequestStatus.Loading;
        }
      )
      .addCase(
        fetchProductsAction.fulfilled,
        (state, action) => {
          state.products = action.payload;
          state.requestStatus = RequestStatus.Success;
        }
      ) .addCase(
        fetchProductsAction.rejected,
        (state) => {
          state.requestStatus = RequestStatus.Failed;
        }
      );
  },
  selectors: {
    products: (state:ProductState) => state.products,
    currentPage: (state:ProductState) => state.currentPage,
    sortVariant: (state:ProductState) => state.sortVariant,
    sortDirection: (state:ProductState) => state.sortDirection,
    resetFilters: (state:ProductState) => state,
    filterGuitarType: (state:ProductState) => state.filterGuitarType,
    filterGuitarStringCount: (state:ProductState) => state.filterGuitarStringCount,
    updateProducts: (state:ProductState) => state.products,
    deleteProduct: (state:ProductState) => state.products,
    addProduct: (state:ProductState) => state.products,
    requestStatus: (state:ProductState) => state.requestStatus
  }
});


export const productsSelectors = productsSlice.selectors;
export const productsActions = { ...productsSlice.actions, fetchProductsAction};



