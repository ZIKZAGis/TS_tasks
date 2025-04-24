// Задача 2:
// Расширь тип User, добавив поле role, которое может быть только: "admin", "editor" или "user".
// Дополнительное задание (если хочешь сложнее):
// Сделай так, чтобы если isAdmin: true, то role мог быть только "admin".



type AdminUser = {
    name: string;
    age: number;
    isAdmin: true;
    role: "admin";
  };
  
  type RegularUser = {
    name: string;
    age: number;
    isAdmin: false; 
    role: "editor" | "user"; 
  };
  
  type User2 = AdminUser | RegularUser;

// Вариант 2:
//   type User<T extends boolean = boolean> = {
//     name: string;
//     age: number;
//     isAdmin: T;
//     role: T extends true ? "admin" : "editor" | "user";
//   };