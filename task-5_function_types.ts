// Задача 5:
// Создай тип BookFilter, который описывает функцию, принимающую:

// book (тип Book),

// options (объект с полями minYear?: number и maxYear?: number),
// и возвращающую boolean (подходит ли книга под условия).

// Дополнительно (если хочешь сложнее):
// Сделай так, чтобы хотя бы одно из полей (minYear или maxYear) было обязательным.

interface Book3 {
    title: string;
    authors: string[];
    publishYear: number;
    genres: string[];
  }
  
  interface EBook2<T extends "pdf" | "epub" | "mobi"> extends Book3 {
    format: T;
    downloadUrl: T extends "mobi" ? string | undefined : string; 
  }
  
  type Options = {
    minYear?: number;
    maxYear?: number;
  }
  
  type BookFilter = (book: Book3, options: Options) => boolean
  
// вариант с доп усложнением:

// type MinYearRequired = {
//     minYear: number;
//     maxYear?: number;
//   };
  
// type MaxYearRequired = {
//     maxYear: number;
//     minYear?: number;
// };

// type AtLeastOneYearOption = MinYearRequired | MaxYearRequired;


// type BookFilter = (book: Book3, options: AtLeastOneYearOption) => boolean;

// доп2
// type AtLeastOneYearOption<T = {}> = T extends { minYear?: number; maxYear?: number }
//   ? (keyof T extends never 
//       ? { error: "Должно быть указано minYear ИЛИ maxYear" } 
//       : T)
//   : never;

// type BookFilter = (book: Book, options: AtLeastOneYearOption) => boolean;

// filter(someBook, {});