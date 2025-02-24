
import { AppRoute, PageTitles, SortDirection, SortVariants, SuccessMessage } from "../common/constants/const";
import SocialIcons from "../components/social-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import ProductItem from "../components/items/product-item";
import { Link,  useParams } from "react-router-dom";
import { productsActions, productsSelectors } from "../store/slices/product/product-slice";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import React from "react";
import { calculateThreePages, getProductPreviews } from "../common/utils/common";
import { useAppSelector } from "../store/hooks/useAppSelector";

import { GetClassNameForSortDirection, GetClassNameForSortVariant } from "../common/utils/class-names";
import { GuitarStringCount, GuitarType } from "../common/types/product-type";
import TypeGuitarFilter from "../components/product-list/type-guitar-filter";
import StringCountFilter from "../components/product-list/string-count-filter";
import { ProductPreviewType } from "../common/types/product-preview-type";
import Error404Page from "./error-404-page";
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions } from "../store/slices/user/user-slice";
import { toast } from "react-toastify";




export default function ProductListPage():JSX.Element {
  const dispatch = useAppDispatch();
 //Прочитать products из хранилища
  const products = [...useAppSelector(productsSelectors.products)]
  const {unAuthorize} = useActionCreators(userActions);


  //Прочитать номер текущей страницы из строки параметров
  const {page} = useParams();
  let pageNum = page ? parseInt(page) : 0;
  //запишем его в хранилище
  dispatch(productsActions.changeCurrentPage(pageNum));

  //Прочитать текущие параметры фильтрации и сортировки из хранилища
  const sortVariant = useAppSelector(productsSelectors.sortVariant);
  const sortDirection = useAppSelector(productsSelectors.sortDirection);

  const filterGuitarTypes = useAppSelector(productsSelectors.filterGuitarType);
  const filterGuitarStringCounts = useAppSelector(productsSelectors.filterGuitarStringCount);



    if (!products ) {return <></>}

  //Фильтрация
  const filteredProducts = products.filter(product => {
    return filterGuitarTypes.includes(product.typeGuitar) && filterGuitarStringCounts.includes(product.guitarStringCount);
    })
  //Сортировка
  const sortedProducts = filteredProducts.sort((a,b) => {
    if (sortDirection === SortDirection.Up) {
    return a[sortVariant] > b[sortVariant] ? 1 : -1;
    } else {
      return a[sortVariant] < b[sortVariant] ? 1 : -1;
    }
  });
    const productsPreview = getProductPreviews(sortedProducts);
    //Для пагинации
    const countPages = productsPreview.length > 0 ? productsPreview[productsPreview.length-1].paginationPage+1 : 1;
    if ( isNaN(pageNum))  {
      return (<Error404Page></Error404Page>)
    }
    //pageNum = pageNum > countPages-1 ? countPages-1 : pageNum;
    // Номера видимых страниц (3 номера)
    const visiblePages = calculateThreePages(pageNum,countPages)






    const handleResetFilters = () => {
      dispatch(productsActions.resetFilters());
   };


  //Изменяет текущий вариант фильтрации по типам гитар
  const handleChangefilterGuitarTypeClick = (filterGuitarType : GuitarType) => {
    let filters = [...filterGuitarTypes];
    filters.includes(filterGuitarType) ? filters.splice(filters.indexOf(filterGuitarType),1) : filters.push(filterGuitarType);
    dispatch(productsActions.changeFilterGuitarType(filters));
  };

  //Изменяет текущий вариант фильтрации по количеству струн
  const handleChangefilterStringCountClick = (filterStringCount : GuitarStringCount) => {
    let filters = [...filterGuitarStringCounts];
    filters.includes(filterStringCount) ? filters.splice(filters.indexOf(filterStringCount),1) : filters.push(filterStringCount);
    dispatch(productsActions.changeFilterGuitarStringCount(filters));
  };

  //Изменяет текущий вариант сортировки
  const handleChangeSortVariantClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(productsActions.changeSortVariant(e.currentTarget.name as SortVariants));
  };
  //Изменяет направление сортировки
  const handleChangeSortDirectionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(productsActions.changeSortDirection(e.currentTarget.name as SortDirection));
  };

  //Удаляет продукт
  const handleDeleteProductClick = (product : ProductPreviewType) => {
    dispatch(productsActions.deleteProduct(product.id));
    toast.success(SuccessMessage.SuccessDeleteProduct);
  };

  return (
    <React.Fragment>
     <Helmet>
        <title>{PageTitles.ProductListPageTitle}</title>
     </Helmet>

      <div>
        <SocialIcons/>
        <div className="wrapper">
        <Header/>
        <main className="page-content">
        <section className="product-list">
          <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Login }`} onClick={() => unAuthorize()}  className="link">Вход</Link>
              </li>
              <li className="breadcrumbs__item"><a className="link">Товары</a>
              </li>
            </ul>
            <div className="catalog">
              <form className="catalog-filter" action="#" method="post">
                <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Тип гитар</legend>
                  <TypeGuitarFilter
                      key='types'
                      handleChangefilterGuitarTypeClick={handleChangefilterGuitarTypeClick}
                      filterGuitarTypes = {filterGuitarTypes}
                    />

                </fieldset>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Количество струн</legend>
                  <StringCountFilter
                      key='strings'
                      handleChangefilterStringCountClick={handleChangefilterStringCountClick}
                      filterGuitarStringCounts = {filterGuitarStringCounts}
                      />


                </fieldset>
                <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset"
                  onClick={handleResetFilters}
                >Очистить</button>
              </form>
              <div className="catalog-sort">
                <h2 className= "catalog-sort__title">Сортировать:</h2>
                <div className="catalog-sort__type">
                  <button className={GetClassNameForSortVariant(sortVariant,SortVariants.createdDate)} name='createdDate' aria-label="по дате"
                    onClick={handleChangeSortVariantClick}>по дате</button>
                  <button className={ GetClassNameForSortVariant(sortVariant,SortVariants.price)} name='price' aria-label="по цене"
                    onClick={handleChangeSortVariantClick}>по цене</button>
                </div>
                <div className="catalog-sort__order">
                  <button className={GetClassNameForSortDirection(sortDirection,SortDirection.Up)} name='Up' aria-label="По возрастанию"
                    onClick={ handleChangeSortDirectionClick}
                  ></button>
                  <button className={GetClassNameForSortDirection(sortDirection,SortDirection.Down)} name='Down' aria-label="По убыванию"
                    onClick={handleChangeSortDirectionClick}
                  ></button>
                </div>
              </div>
              <div className="catalog-cards">
                <ul className="catalog-cards__list">
                  {
                    productsPreview.map((product,index) => (
                      pageNum === product.paginationPage ?
                      <ProductItem
                        key={index}
                        product = {product}
                        handleDeleteProductClick ={handleDeleteProductClick}
                        >
+                    </ProductItem>
                      : null
                    )
                    )
                  }
                </ul>
              </div>
            </div>
            <Link to={AppRoute.Add}>
              <button className="button product-list__button button--red button--big">
                Добавить новый товар
              </button>
            </Link>
            <div className="pagination product-list__pagination">
              <ul className="pagination__list">


                  {pageNum > 2 ?
                  <li className="pagination__page pagination__page--next" id="next">
                  <Link to={`${AppRoute.Root}${visiblePages[0]-1}`} className="link pagination__page-link">
                    Назад
                   </Link>
                  </li>
                 : null
                  }
                  {
                    visiblePages.map((page,index) => (
                      page <= countPages && page >= 0 ?
                      <li className={page === pageNum ? "pagination__page pagination__page--active":"pagination__page" }key ={index}>
                          <Link to={`${AppRoute.Root}${page} `} className="link pagination__page-link" key ={index}>
                            {page+1}
                          </Link>

                      </li>
                      : null

                    ))
                  }
                  {pageNum < countPages && countPages > 3 ?
                    <li className="pagination__page pagination__page--next" id="next">
                    <Link to={`${AppRoute.Root}${visiblePages[2]+1}`} className="link pagination__page-link">
                      Далее
                    </Link>
                    </li>
                      : null
                  }

              </ul>
            </div>
          </div>
        </section>
      </main>
              <Footer/>
            </div>
      </div>
    </React.Fragment>

);

}


