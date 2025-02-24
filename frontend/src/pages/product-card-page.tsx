import React from "react";
import { AppRoute, PageTitles } from "../common/constants/const";
import SocialIcons from "../components/social-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { productsSelectors } from "../store/slices/product/product-slice";
import clsx from "clsx";
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions } from "../store/slices/user/user-slice";

function ProductCardPage() {
const [isDescription, setIsDescription] = React.useState(false);

//Прочитать id из строки параметров
const {id} = useParams();
const {unAuthorize} = useActionCreators(userActions);
const currentListPage = useAppSelector(productsSelectors.currentPage);
const product = [...useAppSelector(productsSelectors.products)].filter(product => product.id === id)[0];
  return (
    <React.Fragment>
     <Helmet>
        <title>{PageTitles.ProductCardPageTitle}</title>
     </Helmet>

      <div>
        <SocialIcons/>
        <div className="wrapper">
        <Header/>
            <main className="page-content">
                <div className="container">
                  <h1 className="page-content__title title title--bigger">Товар</h1>
                  <ul className="breadcrumbs page-content__breadcrumbs">
                    <li className="breadcrumbs__item">
                      <Link to={`${AppRoute.Login}` } onClick={() => unAuthorize() }className="link" >Главная</Link>
                    </li>
                    <li className="breadcrumbs__item">
                      <Link to={`${AppRoute.Root}${currentListPage}`} className="link" >Каталог</Link>
                    </li>
                    <li className="breadcrumbs__item"><a className="link">Товар</a>
                    </li>
                  </ul>
                  <div className="product-container">
                    <img className="product-container__img"
                    src={product.foto}
                    srcSet={product.foto}
                    width="90" height="235" alt=""></img>
                    <div className="product-container__info-wrapper">
                      <h2 className="product-container__title title title--big title--uppercase">{product.name}</h2>
                      <div className="tabs">
                        <a
                        onClick={() => {setIsDescription(false);}}
                        className={clsx("button ", `${isDescription ? "button--black-border" : ""}`, " button--medium tabs__button")} href="#characteristics">Характеристики</a>
                        <a
                        onClick={() => {setIsDescription(true);}}
                        className={ clsx("button ", `${!isDescription ? "button--black-border" : ""}`, " button--medium tabs__button")} href="#description">Описание</a>
                        <div className="tabs__content" id="characteristics">
                          <table className={clsx( `${isDescription ? "hidden" : ""}`,"tabs__table")}>
                            <tr className="tabs__table-row">
                              <td className="tabs__title">Артикул:</td>
                              <td className="tabs__value">{product.article}</td>
                            </tr>
                            <tr className="tabs__table-row">
                              <td className="tabs__title">Тип:</td>
                              <td className="tabs__value">{product.typeGuitar}</td>
                            </tr>
                            <tr className="tabs__table-row">
                              <td className="tabs__title">Количество струн:</td>
                              <td className="tabs__value">{`${product.guitarStringCount} струнная`}</td>
                            </tr>
                          </table>
                          <p className={clsx( `${!isDescription ? "hidden" : ""}`," tabs__product-description")}>{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <Footer/>
            </div>
      </div>
    </React.Fragment>

);

}
export default ProductCardPage;
