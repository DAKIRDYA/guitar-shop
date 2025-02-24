


export const PageTitles = {
  LoginPageTitle: 'Авторизация — Guitar-shop',
  RegistrationPageTitle: 'Регистрация — Guitar-shop',
  ProductCardPageTitle: 'Guitar-shop — описание',
  ProductListPageTitle: 'Просмотр товаров — Guitar-shop',
  ProductAddPageTitle: 'Добавление товара — Guitar-shop',
  ProductEditPageTitle: 'Редактирование товара — Guitar-shop',
  Error404Title: 'Страница не найдена'
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Registration = '/registration',
  Add = '/add',
  Edit = '/edit',
  EditId = '/edit/:id',
  List = '/list',
  ListPage = '/:page',
  Card = '/card/',
  CardId = '/card/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_PRODUCT_ITEMS_PER_PAGE = 7;
export const DEFAULT_CURRENT_PAGE = 1;

export enum SortVariants {
  createdDate ='createdDate',
  price = 'price',
}

export enum SortDirection {
  Up = 'Up', //Сортировка по увеличению значений
  Down= 'Down', //Сортировка по уменьшению значений
}


export const AUTH_TOKEN = 'guitar-shop-auth-token';
export const BACKEND_URL = 'http://localhost:3000';
export const REQUEST_TIMEOUT = 5000;

//Заглушка вместо ответа бэкенда
export const TOKEN = 'token'

export enum DataPathUrl {
  Products = '/products',
  Login = '/login',
  Logout = '/logout',
  addUser = '/addUser',
}


export const MIN_NAME_LENGTH = 10;
export const MAX_NAME_LENGTH = 100; //Максимальная длина имени

export const MIN_DESCRIPTION_LENGTH = 20;
export const MAX_DESCRIPTION_LENGTH = 1024; //Максимальная длина описания

export const MIN_ARTICLE_LENGTH = 5;
export const MAX_ARTICLE_LENGTH = 40;

export const MIN_USER_NAME_LENGTH = 1;
export const MAX_USER_NAME_LENGTH = 15;

export const MIN_PRICE = 100;
export const MAX_PRICE = 1000000;


export const textError = {
  textErrorValidationForm: 'Email или пароль некорректны (пароль должен состоять как минимум из 1 буквы and  1 цифры)',
  textSuccessAuthorization: 'Вы успешно авторизованы',
  textFailedAuthorization: 'Ошибка авторизации',

  textErrorValidationProductName: 'Неверная длина наименования товара. Длина должна быть от ' + MIN_NAME_LENGTH + ' до ' + MAX_NAME_LENGTH,
  textErrorValidationProductPrice: 'Неверная цена товара. Длина должна быть от ' + MIN_PRICE + ' до ' + MAX_PRICE,
  textErrorValidationProductArticle: 'Неверная длина артикула товара. Длина должна быть от ' + MIN_ARTICLE_LENGTH + ' до ' + MAX_ARTICLE_LENGTH,
  textErrorValidationProductDescription: 'Неверная длина описания товара. Длина должна быть от ' + MIN_DESCRIPTION_LENGTH + ' до ' + MAX_DESCRIPTION_LENGTH,
  textErrorValidationEmail: 'Неверный email',
  textErrorValidationTypeGuitar: 'Выберите тип гитары',
  textErrorValidayionGuitarStringCount: 'Выберите количество струн гитары',
  textErrorValidationDate: "Дата должна быть в формате DD.MM.YYYY, также проверьте значения",
  textErrorValidationUserName: 'Неверный длина имени пользователя. Длина должна быть от ' + MIN_USER_NAME_LENGTH + ' до ' + MAX_USER_NAME_LENGTH,
};


export const REGULAR_NAME = /\w{1,15}$/i;
export const REGULAR_MAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
export const REGULAR_PASS = /^[a-zA-Z]+\d+|\d+[a-zA-Z]+$/i;
