import React, { useRef, useState } from "react";
import { AppRoute, PageTitles, SuccessMessage } from "../common/constants/const";
import Footer from "../components/footer";
import Header from "../components/header";
import SocialIcons from "../components/social-icons";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { productsActions, productsSelectors } from "../store/slices/product/product-slice";
import { GuitarStringCount, GuitarType, ProductType } from "../common/types/product-type";
import dayjs from "dayjs";
import { toast} from "react-toastify";
import { validateInput } from "../common/utils/validation";
import generateGuid from "../common/utils/uuid";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions } from "../store/slices/user/user-slice";


function ProductAddPage() {
  const currentListPage = useAppSelector(productsSelectors.currentPage);
  const [newProduct, setProductData] = useState({
    name:'',
    description:'',
    article:'',
    foto:'',
    typeGuitar: GuitarType.Acoustic,
    guitarStringCount: GuitarStringCount.Four,
    createdDate:new Date(),
    price:0,
    id:generateGuid()
  } as ProductType);
  const [newDate, setDate] = useState(dayjs(new Date()).format("DD.MM.YYYY"));
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const {unAuthorize} = useActionCreators(userActions);

  //Обработчик кнопки добавления фото
  const handleFileButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;
    inputRef.current.click();
  };

  //Добавление фото
  const handleFileImageChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    setProductData({...newProduct, foto: URL.createObjectURL(file)});
    }

  //Обработчик добавления текстовых полей
  const handleTextChange = (evt: { target: { name: string; value: string } }) => {
    const {name,value} = evt.target;
    if (name === 'created-date') {
      setDate(value);
    } else  {
      setProductData({...newProduct, [name]: value});
    }
    }

  //Обработчик добавления типа гитары
  const handleTypeGuitarChanged =(evt: { target: { name: string; value: string } }) =>{
      const {value} = evt.target;
      if (['guitar','el-guitar','ukulele'].includes(value)) {
        switch (value) {
          case 'guitar': setProductData({...newProduct, typeGuitar: GuitarType.Acoustic});break
          case 'el-guitar': setProductData({...newProduct, typeGuitar: GuitarType.Electric});break
          case 'ukulele': setProductData({...newProduct, typeGuitar: GuitarType.Ukulele});break
          default: break
        }

      }
    }
  //Обработчик добавления количества струн
  const handleStringCountChanged =(evt: { target: { name: string; value: string } }) =>{
    const {value} = evt.target;
    setProductData({...newProduct, guitarStringCount: parseInt(value)});
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validateInput(newProduct,newDate);
    if (errors.length === 0) {
      setProductData({...newProduct, createdDate: new Date(newDate)});
      dispatch(productsActions.addProduct(newProduct));
      toast.success(SuccessMessage.SuccessAddProduct);
    } else {
      errors.forEach((error) => {
        toast.error(error);
      });


    }
  }
  return (
     <React.Fragment>
     <Helmet>
        <title>{PageTitles.ProductAddPageTitle}</title>
     </Helmet>

      <div>
        <SocialIcons/>
        <div className="wrapper">
            <Header/>
            <main className="page-content">
                <section className="add-item">
                  <div className="container">
                    <h1 className="add-item__title">Новый товар</h1>
                    <ul className="breadcrumbs">
                      <li className="breadcrumbs__item"><Link to={`${AppRoute.Login}`} onClick={() => unAuthorize() }className="link" >Вход</Link>
                      </li>
                      <li className="breadcrumbs__item"><Link to={`${AppRoute.Root}${currentListPage}`} className="link">Товары</Link>
                      </li>
                      <li className="breadcrumbs__item"><a className="link">Новый товар</a>
                      </li>
                    </ul>
                    <form className="add-item__form" action="#" method="get">
                      <div className="add-item__form-left">
                        <div className="edit-item-image add-item__form-image">
                          <div className="edit-item-image__image-wrap">
                          <input type="file"
                            style={{display: 'none'}}
                            ref={inputRef}
                            onChange={handleFileImageChange} className="filetype" >
                          </input>

                          <img alt="preview image" src={newProduct.foto}
                           style={{maxHeight:'100%', maxWidth:'100%'}}
                           />
                          </div>
                          <div className="edit-item-image__btn-wrap">
                            <button className="button button--small button--black-border edit-item-image__btn"
                              onClick={handleFileButtonClick}
                            >Добавить
                            </button>
                            <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
                          </div>
                        </div>
                        <div className="input-radio add-item__form-radio"><span>Выберите тип товара</span>
                          <input type="radio" id="guitar" name="item-type" value="guitar"
                           checked = {newProduct.typeGuitar === GuitarType.Acoustic}
                           onChange={handleTypeGuitarChanged}
                          ></input>
                          <label htmlFor="guitar">Акустическая гитара</label>
                          <input type="radio" id="el-guitar" name="item-type" value="el-guitar"
                           checked = {newProduct.typeGuitar === GuitarType.Electric}
                           onChange={handleTypeGuitarChanged}
                          ></input>
                          <label htmlFor="el-guitar">Электрогитара</label>
                          <input type="radio" id="ukulele" name="item-type" value="ukulele"
                           checked = {newProduct.typeGuitar === GuitarType.Ukulele}
                           onChange={handleTypeGuitarChanged}
                          ></input>
                          <label htmlFor="ukulele">Укулеле</label>
                        </div>
                        <div className="input-radio add-item__form-radio"><span>Количество струн</span>
                          <input type="radio" id="string-qty-4" name="string-qty" value="4"
                           checked = {newProduct.guitarStringCount === GuitarStringCount.Four}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-4">4</label>
                          <input type="radio" id="string-qty-6" name="string-qty" value="6"
                           checked = {newProduct.guitarStringCount === GuitarStringCount.Six}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-6">6</label>
                          <input type="radio" id="string-qty-7" name="string-qty" value="7"
                           checked = {newProduct.guitarStringCount === GuitarStringCount.Seven}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-7">7</label>
                          <input type="radio" id="string-qty-12" name="string-qty" value="12"
                           checked = {newProduct.guitarStringCount === GuitarStringCount.Twelve}
                           onChange={handleStringCountChanged}
                          ></input>
                          <label htmlFor="string-qty-12">12</label>
                        </div>
                      </div>
                      <div className="add-item__form-right">
                        <div className="custom-input add-item__form-input">
                          <label><span>Дата добавления товара</span>
                            <input type="text"
                              name="created-date"
                              value={newDate}
                              onChange={handleTextChange}
                              placeholder={`${dayjs(new Date()).format("DD.MM.YYYY")}`}

                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-input add-item__form-input">
                          <label><span>Введите наименование товара</span>
                            <input type="text" name="name" value={newProduct.name} placeholder="Наименование"
                            onChange={handleTextChange}
                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
                          <label><span>Введите цену товара</span>
                            <input type="number" name="price" value={newProduct.price} placeholder="Цена в формате 00 000"
                            onChange={handleTextChange}
                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-input add-item__form-input">
                          <label><span>Введите артикул товара</span>
                            <input type="text" name="article" value={newProduct.article} placeholder="Артикул товара"
                            onChange={handleTextChange}
                            ></input>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                        <div className="custom-textarea add-item__form-textarea">
                          <label><span>Введите описание товара</span>
                            <textarea name="description" placeholder=""
                            onChange={handleTextChange}
                            value = {newProduct.description}></textarea>
                          </label>
                          <p>Заполните поле</p>
                        </div>
                      </div>
                      <div className="add-item__form-buttons-wrap">
                          <button className="button button--small add-item__form-button" type="submit"
                          onClick={handleFormSubmit}
                          >Сохранить изменения</button>
                        <Link to={`${AppRoute.Root}${currentListPage}`}>
                          <button className="button button--small add-item__form-button" type="button">Вернуться к списку товаров</button>
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
export default ProductAddPage;
