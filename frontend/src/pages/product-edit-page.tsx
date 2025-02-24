import React, { useRef, useState } from "react";
import { AppRoute, PageTitles } from "../common/constants/const";
import Footer from "../components/footer";
import Header from "../components/header";
import SocialIcons from "../components/social-icons";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { GuitarType, GuitarStringCount, ProductType } from "../common/types/product-type";

import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { productsActions, productsSelectors } from "../store/slices/product/product-slice";
import { validateInput } from "../common/utils/validation";
import { toast } from "react-toastify";
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions } from "../store/slices/user/user-slice";

function ProductEditPage() {
  const {id} = useParams();
  const currentListPage = useAppSelector(productsSelectors.currentPage);
  const productForEdit = [...useAppSelector(productsSelectors.products)].filter(product => product.id === id)[0];

  const [editProduct, setProductData] = useState({
    name: productForEdit.name,
    description:productForEdit.description,
    article:productForEdit.article,
    foto:productForEdit.foto,
    typeGuitar: productForEdit.typeGuitar,
    guitarStringCount: productForEdit.guitarStringCount,
    createdDate:productForEdit.createdDate,
    price:productForEdit.price,
    id:productForEdit.id
  } as ProductType);
  const [newDate, setDate] = useState(dayjs(productForEdit.createdDate).format("DD.MM.YYYY"));
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const {unAuthorize} = useActionCreators(userActions);

  //Обработчик кнопки изменения фото
    const handleFileButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!inputRef || !inputRef.current) return;
      inputRef.current.click();
    };
    //Отмена замены фото
    const handleFileEscButtonClick = () => {
      setProductData({...editProduct, foto: productForEdit.foto});
    }
  //Добавление нового фото
    const handleFileImageChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    setProductData({...editProduct, foto: URL.createObjectURL(file)});
    }

    //Обработчик изменения текстовых полей
  const handleTextChange = (evt: { target: { name: string; value: string } }) => {
    const {name,value} = evt.target;
    if (name === 'created-date') {
      setDate(value);
      const [day, month, year] = value.split('.')
      const dateObj = new Date(+year, +month - 1, +day)
      setProductData({...editProduct, createdDate: dateObj});
    } else  {
      setProductData({...editProduct, [name]: value});
    }
    }
  //Обработчик изменения типа гитары
  const handleTypeGuitarChanged =(evt: { target: { name: string; value: string } }) =>{
    const {value} = evt.target;
    if (['guitar','el-guitar','ukulele'].includes(value)) {
      switch (value) {
        case 'guitar': setProductData({...editProduct, typeGuitar: GuitarType.Acoustic});break
        case 'el-guitar': setProductData({...editProduct, typeGuitar: GuitarType.Electric});break
        case 'ukulele': setProductData({...editProduct, typeGuitar: GuitarType.Ukulele});break
        default: break
      }

    }
  }
//Обработчик изменения количества струн
const handleStringCountChanged =(evt: { target: { name: string; value: string } }) =>{
  const {value} = evt.target;
  setProductData({...editProduct, guitarStringCount: parseInt(value)});
}

const handleFormSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const errors = validateInput(editProduct,newDate);
  if (errors.length === 0) {
    dispatch(productsActions.updateProducts(editProduct));
    toast.success("Товар успешно изменен");
  } else {
    errors.forEach((error) => {
      toast.error(error);
    });
  }
}


  return (
    <React.Fragment>
     <Helmet>
        <title>{PageTitles.ProductEditPageTitle}</title>
     </Helmet>

      <div>
        <SocialIcons/>
        <div className="wrapper">
            <Header/>
            <main className="page-content">
                <section className="edit-item">
                  <div className="container">
                    <h1 className="edit-item__title">{editProduct.name}</h1>
                    <ul className="breadcrumbs">
                      <li className="breadcrumbs__item">
                        <Link to={`${AppRoute.Login}`} onClick={() => unAuthorize() } className="link" >Вход</Link>
                      </li>
                      <li className="breadcrumbs__item">
                        <Link to={`${AppRoute.Root}${currentListPage}`} className="link">Товары</Link>
                      </li>
                      <li className="breadcrumbs__item"><a className="link">СURT Z30 Plus</a>
                      </li>
                    </ul>
                    <form className="edit-item__form" action="#" method="get">
                      <div className="edit-item__form-left">
                        <div className="edit-item-image edit-item__form-image">
                          <div className="edit-item-image__image-wrap">
                            <input type="file"
                              style={{display: 'none'}}
                              ref={inputRef}
                              onChange={handleFileImageChange} className="filetype" >
                            </input>

                            <img className="edit-item-image__image"
                              src={editProduct.foto}
                              srcSet={editProduct.foto}
                              width="133" height="332" alt={editProduct.name}
                            >
                            </img>
                          </div>
                          <div className="edit-item-image__btn-wrap">
                            <button className="button button--small button--black-border edit-item-image__btn"
                              onClick={handleFileButtonClick}
                            >Заменить
                            </button>
                            <button className="button button--small button--black-border edit-item-image__btn"
                              onClick={handleFileEscButtonClick}
                            >Удалить</button>
                          </div>
                        </div>
                        <div className="input-radio edit-item__form-radio"><span>Тип товара</span>
                          <input type="radio" id="guitar" name="item-type" value="guitar"
                           checked = {editProduct.typeGuitar === GuitarType.Acoustic}
                           onChange={handleTypeGuitarChanged}
                          ></input>
                          <label htmlFor="guitar">Акустическая гитара</label>
                          <input type="radio" id="el-guitar" name="item-type" value="el-guitar"
                           checked = {editProduct.typeGuitar === GuitarType.Electric}
                           onChange={handleTypeGuitarChanged}
                          ></input>
                          <label htmlFor="el-guitar">Электрогитара</label>
                          <input type="radio" id="ukulele" name="item-type" value="ukulele"
                           checked = {editProduct.typeGuitar === GuitarType.Ukulele}
                           onChange={handleTypeGuitarChanged}
                          ></input>
                          <label htmlFor="ukulele">Укулеле</label>
                        </div>
                        <div className="input-radio edit-item__form-radio"><span>Количество струн</span>
                          <input type="radio" id="string-qty-4" name="string-qty" value="4"
                           checked = {editProduct.guitarStringCount === GuitarStringCount.Four}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-4">4</label>
                          <input type="radio" id="string-qty-6" name="string-qty" value="6"
                           checked = {editProduct.guitarStringCount === GuitarStringCount.Six}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-6">6</label>
                          <input type="radio" id="string-qty-7" name="string-qty" value="7"
                           checked = {editProduct.guitarStringCount === GuitarStringCount.Seven}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-7">7</label>
                          <input type="radio" id="string-qty-12" name="string-qty" value="12"
                           checked = {editProduct.guitarStringCount === GuitarStringCount.Twelve}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-12">12</label>
                        </div>
                      </div>
                      <div className="edit-item__form-right">
                        <div className="custom-input edit-item__form-input">
                          <label><span>Дата добавления товара</span>
                            <input type="text"
                              name="created-date"
                              value={newDate}
                              onChange={handleTextChange}
                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-input edit-item__form-input">
                          <label><span>Наименование товара</span>
                            <input type="text" name="name" value={editProduct.name}
                            onChange={handleTextChange}
                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-input edit-item__form-input edit-item__form-input--price">
                          <label><span>Цена товара</span>
                            <input type="text" name="price" value={editProduct.price}
                              onChange={handleTextChange}
                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-input edit-item__form-input">
                          <label><span>Артикул товара</span>
                            <input type="text" name="article" value={editProduct.article} placeholder="Артикул товара"
                              onChange={handleTextChange}
                              ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-textarea edit-item__form-textarea">
                          <label><span>Описание товара</span>
                            <textarea name="description" placeholder=""
                              onChange={handleTextChange}
                              value = {editProduct.description}
                            >{editProduct.description}</textarea>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                      </div>
                      <div className="edit-item__form-buttons-wrap">
                        <button className="button button--small edit-item__form-button" type="submit"
                          onClick={handleFormSubmit}
                        >Сохранить изменения</button>
                        <Link to={`${AppRoute.Root}${currentListPage}`}>
                          <button className="button button--small edit-item__form-button" type="button">Вернуться к списку товаров</button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </section>
              </main>
              <Footer/>
            </div>
      </div>
    </React.Fragment>

);

}
export default ProductEditPage;
