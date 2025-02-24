import { SortVariants, AuthorizationStatus, SortDirection } from '../common/constants/const';
import { GuitarStringCount, GuitarType, ProductType } from '../common/types/product-type';
import { User } from '../common/types/user-type';
import { RequestStatus } from '../services/api';




export type ProductState = {
  products: ProductType[];
  currentPage: number;
  sortVariant: SortVariants;
  sortDirection: SortDirection;
  filterGuitarType: GuitarType[];
  filterGuitarStringCount: GuitarStringCount[];
  requestStatus:RequestStatus;
}


export type UserState = {
  info: User;
  status: AuthorizationStatus;
};


