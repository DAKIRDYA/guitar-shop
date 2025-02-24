export type ProductType = {
  name: string,
  description: string,
  createdDate: Date,
  foto: string,
  typeGuitar: GuitarType,
  article: string,
  guitarStringCount: GuitarStringCount,
  price: number,
  id: string;
};

export enum GuitarType  {
  Acoustic= 'Акустическая гитара',
  Electric= 'Электрогитара',
  Ukulele= 'Укулеле',
}
export enum GuitarStringCount {
  Four= 4,
  Six= 6,
  Seven= 7,
  Twelve= 12,
}


