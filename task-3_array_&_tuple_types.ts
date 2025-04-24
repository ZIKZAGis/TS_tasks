// Задача 3:
// Создай тип Book, который содержит:

// title (строка),

// authors (массив строк),

// publishYear (число),

// genres (массив строк, минимум 1 жанр).

// Затем создай тип Library, который представляет собой массив кортежей вида [Book, количество_копий].

// Дополнительно (если хочешь сложнее):
// Сделай так, чтобы genres нельзя было пустым (минимум 1 элемент).

type NonEmptyArray<T> = [T, ...T[]];

type Book = {
  title: string;
  authors: string[];
  publishYear: number;
  genres: NonEmptyArray<string>;
};

// вариант 2:
// type ValidateGenres<T extends string[]> = T extends [] 
//   ? ["Должен быть хотя бы один жанр"] 
//   : T;

// type Book<T extends string[] = string[]> = {
//   title: string;
//   authors: string[];
//   publishYear: number;
//   genres: ValidateGenres<T>;
// };