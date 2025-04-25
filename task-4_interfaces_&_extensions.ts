// Задача 4:

// Перепиши тип Book в виде interface.

// Создай новый interface EBook, который расширяет Book и добавляет:

// format (может быть "pdf" | "epub" | "mobi"),

// downloadUrl (строка).

// Дополнительно:
// Сделай так, чтобы downloadUrl был опциональным (string | undefined), но только если format === "mobi" (у Mobi может не быть ссылки).

interface Book2 {
    title: string;
    authors: string[];
    publishYear: number;
    genres: string[];
  }
  
  interface EBook extends Book2 {
    format: "pdf" | "epub" | "mobi";
    downloadUrl?: string;
  }
  
//   вариант 2:
//   interface PDFEpubBook extends Book2 {
//     format: "pdf" | "epub";
//     downloadUrl: string;
//   }
  
//   interface MobiBook extends Book2 {
//     format: "mobi";
//     downloadUrl?: string;
//   }
  
//   type EBook = PDFEpubBook | MobiBook;