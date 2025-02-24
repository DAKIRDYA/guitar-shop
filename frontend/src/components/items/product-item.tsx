import React, { PropsWithChildren } from "react";

import dayjs from "dayjs";
import { ProductPreviewType } from "../../common/types/product-preview-type";
import { AppRoute } from "../../common/constants/const";
import { Link } from "react-router-dom";

type ProductItemProps = {
  product: ProductPreviewType
  handleDeleteProductClick : any
}


function ProductItem({product,handleDeleteProductClick}: PropsWithChildren<ProductItemProps>):JSX.Element {
  return (
     <React.Fragment>
          <li className="catalog-item">
               <div className="catalog-item__data">
                <img
                  src={product.foto}
                  srcSet={product.foto} width="36" height="93" alt="Картинка гитары"></img>
                 <div className="catalog-item__data-wrapper">
                   <Link to={`${AppRoute.Card}${product.id} `} className="link" ><p className="catalog-item__data-title">{product.name}</p>
                   </Link>
                    <br/>
                    <p className="catalog-item__data-date">Дата добавления {dayjs(product.createdDate).format("DD.MM.YYYY")}</p>
                    <p className="catalog-item__data-price">{product.price} ₽</p>
                  </div>
               </div>
              <div className="catalog-item__buttons">
               <Link to={`${AppRoute.Edit}/${product.id} `} className="button button--small button--black-border" aria-label="Редактировать товар">Редактировать</Link>
              <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар"
                onClick={() =>handleDeleteProductClick(product)}
              >Удалить</button>
             </div>
           </li>
      </React.Fragment>
  )
}
export default ProductItem;
