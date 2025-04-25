// Задача 6:
// Создай тип BookPreview, который:

// Берет из Book только title и authors,

// Делает authors необязательным.

// Дополнительно:
// Сделай так, чтобы authors, если указан, не мог быть пустым массивом

interface Book4 {
    title: string;
    authors: string[];
    publishYear: number;
    genres: string[];
  }
  
  type NonEmptyArray2<T> = [T, ...T[]]
  type BookPreview = Pick<Book4, 'title'> & {
    authors?: NonEmptyArray2<string>;
  };

// Вариант 2:
// type BookPreviewWithoutAuthors = Pick<Book4, 'title'>;
// type BookPreviewWithAuthors = Pick<Book4, 'title'> & { authors: NonEmptyArray2<string> };

// type BookPreview = BookPreviewWithoutAuthors | BookPreviewWithAuthors;