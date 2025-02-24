import { GuitarStringCount, GuitarType } from "./product-type";

export type ProductPreviewType = {
  name: string,
  createdDate: Date,
  foto: string,
  price: number,
  typeGuitar: GuitarType,
  guitarStringCount: GuitarStringCount,
  id: string;
  paginationPage: number,
};
