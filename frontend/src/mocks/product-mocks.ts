import { GuitarType, ProductType } from "../common/types/product-type";

import generateGuid from "../common/utils/uuid";


export const productMocks : ProductType[] = [
  {
    name: "Электрогитара Честер Bass",
    description: "Отличная бас-гитара со множеством различных функций",
    createdDate: new Date('2025-02-23'),
    foto: 'http://localhost:5173/img/content/catalog-product-1.png',
    typeGuitar: GuitarType.Electric,
    article: "EO754565",
    guitarStringCount: 6,
    price: 300,
    id: generateGuid(),

  },
  {
    name: "Акустическая гитара YamahaF310",
    description: "Подходящий вариант для начинающих",
    createdDate: new Date('2023-04-16'),
    foto: 'http://localhost:5173/img/content/catalog-product-2.png',
    typeGuitar: GuitarType.Acoustic,
    article: "AO754564",
    guitarStringCount: 6,
    price: 200,
    id: generateGuid(),

  },

  {
    name: "Укулеле концерт FLIGHT NUC310",
    description: "Укулеле для тех, кому нужно больше, чем просто минимум!",
    createdDate: new Date('2021-08-06'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754567",
    guitarStringCount: 4,
    price: 170,
    id: generateGuid(),

  },

  {
    name: "FLIGHT Vanguard Tenor TBK электроукулеле, PRS, тенор, чехол",
    description: `Цельнокорпусная электроукулеле Flight Vanguard прозрачного черного цвета в размере тенор -
                  инструмент со стальными струнами и двойным вырезом для доступа к верхним ладам,
                  открывающий полный спектр звуковых возможностей настоящей электроукулеле от бренда Flight.
                  Эта укулеле из огненного клена с прозрачным фиолетовым покрытием и корпусом и грифом из красного дерева - настоящее произведение искусства.`,
    createdDate: new Date('2020-04-16'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754570",
    guitarStringCount: 4,
    price: 470,
    id: generateGuid(),

  },
  {
    name: "Электрогитара Честер Bass",
    description: "Отличная бас-гитара со множеством различных функций",
    createdDate: new Date('2022-01-22'),
    foto: 'http://localhost:5173/img/content/catalog-product-1.png',
    typeGuitar: GuitarType.Electric,
    article: "EO754565",
    guitarStringCount: 6,
    price: 300,
    id: generateGuid(),

  },
  {
    name: "Акустическая гитара YamahaF310",
    description: "Подходящий вариант для начинающих",
    createdDate: new Date('2016-03-11'),
    foto: 'http://localhost:5173/img/content/catalog-product-2.png',
    typeGuitar: GuitarType.Acoustic,
    article: "AO754564",
    guitarStringCount: 6,
    price: 200,
    id: generateGuid(),

  },

  {
    name: "Укулеле концерт FLIGHT NUC310",
    description: "Укулеле для тех, кому нужно больше, чем просто минимум!",
    createdDate: new Date('2016-05-11'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754567",
    guitarStringCount: 4,
    price: 170,
    id: generateGuid(),

  },

  {
    name: "FLIGHT Vanguard Tenor TBK электроукулеле, PRS, тенор, чехол",
    description: `Цельнокорпусная электроукулеле Flight Vanguard прозрачного черного цвета в размере тенор -
                  инструмент со стальными струнами и двойным вырезом для доступа к верхним ладам,
                  открывающий полный спектр звуковых возможностей настоящей электроукулеле от бренда Flight.
                  Эта укулеле из огненного клена с прозрачным фиолетовым покрытием и корпусом и грифом из красного дерева - настоящее произведение искусства.`,
    createdDate: new Date('2016-01-12'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754570",
    guitarStringCount: 4,
    price: 470,
    id: generateGuid(),

  },

  {
    name: "Электрогитара Честер Bass",
    description: "Отличная бас-гитара со множеством различных функций",
    createdDate: new Date('2019-02-11'),
    foto: 'http://localhost:5173/img/content/catalog-product-1.png',
    typeGuitar: GuitarType.Electric,
    article: "EO754565",
    guitarStringCount: 6,
    price: 300,
    id: generateGuid(),

  },
  {
    name: "Акустическая гитара YamahaF310",
    description: "Подходящий вариант для начинающих",
    createdDate: new Date('2018-01-11'),
    foto: 'http://localhost:5173/img/content/catalog-product-2.png',
    typeGuitar: GuitarType.Acoustic,
    article: "AO754564",
    guitarStringCount: 6,
    price: 200,
    id: generateGuid(),

  },

  {
    name: "Укулеле концерт FLIGHT NUC310",
    description: "Укулеле для тех, кому нужно больше, чем просто минимум!",
    createdDate: new Date('2024-01-11'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754567",
    guitarStringCount: 4,
    price: 170,
    id: generateGuid(),

  },

  {
    name: "FLIGHT Vanguard Tenor TBK электроукулеле, PRS, тенор, чехол",
    description: `Цельнокорпусная электроукулеле Flight Vanguard прозрачного черного цвета в размере тенор -
                  инструмент со стальными струнами и двойным вырезом для доступа к верхним ладам,
                  открывающий полный спектр звуковых возможностей настоящей электроукулеле от бренда Flight.
                  Эта укулеле из огненного клена с прозрачным фиолетовым покрытием и корпусом и грифом из красного дерева - настоящее произведение искусства.`,
    createdDate: new Date('2023-02-14'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754570",
    guitarStringCount: 4,
    price: 470,
    id: generateGuid(),

  },
  {
    name: "Электрогитара Честер Bass",
    description: "Отличная бас-гитара со множеством различных функций",
    createdDate: new Date('2023-02-24'),
    foto: 'http://localhost:5173/img/content/catalog-product-1.png',
    typeGuitar: GuitarType.Electric,
    article: "EO754565",
    guitarStringCount: 6,
    price: 300,
    id: generateGuid(),

  },
  {
    name: "Акустическая гитара YamahaF310",
    description: "Подходящий вариант для начинающих",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-2.png',
    typeGuitar: GuitarType.Acoustic,
    article: "AO754564",
    guitarStringCount: 6,
    price: 200,
    id: generateGuid(),

  },

  {
    name: "Укулеле концерт FLIGHT NUC310",
    description: "Укулеле для тех, кому нужно больше, чем просто минимум!",
    createdDate: new Date('2023-03-14'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754567",
    guitarStringCount: 4,
    price: 170,
    id: generateGuid(),

  },

  {
    name: "FLIGHT Vanguard Tenor TBK электроукулеле, PRS, тенор, чехол",
    description: `Цельнокорпусная электроукулеле Flight Vanguard прозрачного черного цвета в размере тенор -
                  инструмент со стальными струнами и двойным вырезом для доступа к верхним ладам,
                  открывающий полный спектр звуковых возможностей настоящей электроукулеле от бренда Flight.
                  Эта укулеле из огненного клена с прозрачным фиолетовым покрытием и корпусом и грифом из красного дерева - настоящее произведение искусства.`,
    createdDate: new Date('2021-03-13'),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754570",
    guitarStringCount: 4,
    price: 470,
    id: generateGuid(),

  },
  {
    name: "Электрогитара Честер Bass",
    description: "Отличная бас-гитара со множеством различных функций",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-1.png',
    typeGuitar: GuitarType.Electric,
    article: "EO754565",
    guitarStringCount: 6,
    price: 300,
    id: generateGuid(),

  },
  {
    name: "Акустическая гитара YamahaF310",
    description: "Подходящий вариант для начинающих",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-2.png',
    typeGuitar: GuitarType.Acoustic,
    article: "AO754564",
    guitarStringCount: 6,
    price: 200,
    id: generateGuid(),

  },

  {
    name: "Укулеле концерт FLIGHT NUC310",
    description: "Укулеле для тех, кому нужно больше, чем просто минимум!",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754567",
    guitarStringCount: 4,
    price: 170,
    id: generateGuid(),

  },

  {
    name: "FLIGHT Vanguard Tenor TBK электроукулеле, PRS, тенор, чехол",
    description: `Цельнокорпусная электроукулеле Flight Vanguard прозрачного черного цвета в размере тенор -
                  инструмент со стальными струнами и двойным вырезом для доступа к верхним ладам,
                  открывающий полный спектр звуковых возможностей настоящей электроукулеле от бренда Flight.
                  Эта укулеле из огненного клена с прозрачным фиолетовым покрытием и корпусом и грифом из красного дерева - настоящее произведение искусства.`,
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754570",
    guitarStringCount: 4,
    price: 470,
    id: generateGuid(),

  },
  {
    name: "Электрогитара Честер Bass",
    description: "Отличная бас-гитара со множеством различных функций",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-1.png',
    typeGuitar: GuitarType.Electric,
    article: "EO754565",
    guitarStringCount: 6,
    price: 300,
    id: generateGuid(),

  },
  {
    name: "Акустическая гитара YamahaF310",
    description: "Подходящий вариант для начинающих",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-2.png',
    typeGuitar: GuitarType.Acoustic,
    article: "AO754564",
    guitarStringCount: 6,
    price: 200,
    id: generateGuid(),

  },

  {
    name: "Укулеле концерт FLIGHT NUC310",
    description: "Укулеле для тех, кому нужно больше, чем просто минимум!",
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754567",
    guitarStringCount: 4,
    price: 170,
    id: generateGuid(),

  },

  {
    name: "FLIGHT Vanguard Tenor TBK электроукулеле, PRS, тенор, чехол",
    description: `Цельнокорпусная электроукулеле Flight Vanguard прозрачного черного цвета в размере тенор -
                  инструмент со стальными струнами и двойным вырезом для доступа к верхним ладам,
                  открывающий полный спектр звуковых возможностей настоящей электроукулеле от бренда Flight.
                  Эта укулеле из огненного клена с прозрачным фиолетовым покрытием и корпусом и грифом из красного дерева - настоящее произведение искусства.`,
    createdDate: new Date(),
    foto: 'http://localhost:5173/img/content/catalog-product-3.png',
    typeGuitar: GuitarType.Ukulele,
    article: "UO754570",
    guitarStringCount: 4,
    price: 470,
    id: generateGuid(),

  },
]
