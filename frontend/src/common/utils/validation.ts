
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { MAX_ARTICLE_LENGTH, MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH, MAX_PRICE, MAX_USER_NAME_LENGTH, MIN_ARTICLE_LENGTH, MIN_DESCRIPTION_LENGTH, MIN_NAME_LENGTH, MIN_PRICE, MIN_USER_NAME_LENGTH, TextError } from "../constants/const";
import {  ProductType } from "../types/product-type";
import { User } from "../types/user-type";


function validateInput(product: ProductType,newDate:string): string[] {
  let errors = [];

  dayjs.extend(customParseFormat);
 if(product.name.length < MIN_NAME_LENGTH || product.name.length > MAX_NAME_LENGTH){
    errors.push(TextError.ValidationProductName);
  }
  if(product.price < MIN_PRICE || product.price > MAX_PRICE){
    errors.push(TextError.ValidationProductPrice);
  }
  if(product.article.length < MIN_ARTICLE_LENGTH || product.article.length > MAX_ARTICLE_LENGTH){
    errors.push(TextError.ValidationProductArticle);
  }
  if(product.description.length < MIN_DESCRIPTION_LENGTH || product.description.length > MAX_DESCRIPTION_LENGTH){
    errors.push(TextError.ValidationProductDescription);
  }
  if(!product.typeGuitar){
    errors.push(TextError.ValidationTypeGuitar);
  }
  if(!product.guitarStringCount){
    errors.push(TextError.ValidayionGuitarStringCount);
  }
  if(dayjs(newDate, 'DD.MM.YYYY', true).isValid() === false){ // проверка на корректность даты
    console.log(newDate);
    errors.push(TextError.ValidationDate);
  }
  return errors;
}

function validateUserName(user: User): string[] {
  let errors = [];
  if(user.name.length < MIN_USER_NAME_LENGTH || user.name.length > MAX_USER_NAME_LENGTH){
    errors.push(TextError.ValidationUserName);
  }
  return errors;
}
export { validateInput,validateUserName };



