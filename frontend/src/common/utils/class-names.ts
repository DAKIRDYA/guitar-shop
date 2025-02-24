import clsx from "clsx";
import { SortDirection, SortVariants } from "../constants/const";

function GetClassNameForSortVariant(currentSortVariant: SortVariants,sortVariant: SortVariants): string {
  return clsx(currentSortVariant === sortVariant ? 'catalog-sort__type-button--active' : '', ' catalog-sort__type-button')
}

function GetClassNameForSortDirection(currentSortDirection: SortDirection,sortDirection: SortDirection): string {
   let className = clsx(currentSortDirection === sortDirection ? 'catalog-sort__order-button--active' : '', ' catalog-sort__order-button')
   return clsx(sortDirection === SortDirection.Up ? `${className} catalog-sort__order-button--up` : `catalog-sort__order-button--down`, className);
}

export { GetClassNameForSortVariant,GetClassNameForSortDirection }
