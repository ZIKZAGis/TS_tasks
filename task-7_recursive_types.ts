// Задача 7:
// Создай тип Category, описывающий структуру категорий товаров:

// name (строка),

// subcategories (массив Category или undefined, если подкатегорий нет).

// Дополнительно:
// Сделай так, чтобы:

// Глубина вложенности не превышала 3 уровня (т.е. нельзя создать subcategories у категорий уровня 3).

// Поле subcategories было обязательным для уровней 1 и 2.

type CategoryLevel3 = {
    name: string;
    subcategories?: undefined
  }
  
  type CategoryLevel2 = {
    name: string;
    subcategories: CategoryLevel3[]
  }
  
  type CategoryLevel1 = {
    name: string;
    subcategories: (CategoryLevel2 | CategoryLevel3)[]
  }
  
  type Category = {
    name: string;
    subcategories: (CategoryLevel1 | CategoryLevel2 | CategoryLevel3)[]
  }

// вариант 2:

// type BaseCategory = {
//     name: string;
//   };
  
//   type Category<T extends number = 1> = BaseCategory & (
//     T extends 3 ? { subcategories?: undefined } :
//     T extends 2 ? { subcategories: Category<3>[] } :
//     T extends 1 ? { subcategories: Category<2 | 3>[] } :
//     never
//   );