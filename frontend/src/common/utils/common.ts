import { MAX_PRODUCT_ITEMS_PER_PAGE } from "../constants/const";
import { ProductPreviewType } from "../types/product-preview-type";
import { ProductType } from "../types/product-type";

function calculateThreePages(currentPage:number,countPages:number):number[]{
  if (currentPage < 3) {
    switch (countPages) {
      case 1:
        return [0,-1,-1];
      case 2:
        return [0,1,-1];
      default:
        return [0,1,2];

    }
  }else{
    if (currentPage === countPages) {
      return [Math.floor(currentPage/3)*3,Math.floor(currentPage/3)*3+1,Math.floor(currentPage/3)*3+2];
    }
    return [Math.floor(currentPage/3)*3,Math.floor(currentPage/3)*3+1,Math.floor(currentPage/3)*3+2];
  }

}




function getProductPreviews(products:ProductType[]):ProductPreviewType[]{
  let productPreviews:ProductPreviewType[] = [];
  for (let i=0;i<products.length;i++){
    const productPreview:ProductPreviewType = {
      name: products[i].name,
      createdDate : products[i].createdDate,
      foto: products[i].foto,
      price: products[i].price,
      typeGuitar: products[i].typeGuitar,
      guitarStringCount: products[i].guitarStringCount,
      id: products[i].id,
      paginationPage: Math.floor(i/MAX_PRODUCT_ITEMS_PER_PAGE)
    }
    productPreviews.push(productPreview);
  }
  return productPreviews
}

export {calculateThreePages,getProductPreviews};
