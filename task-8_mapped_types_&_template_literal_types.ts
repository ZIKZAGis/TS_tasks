// Задача 8:
// Создай:

// Базовый тип UserActions с 3 возможными действиями: "create" | "update" | "delete"

// Тип ActionHandlers, который преобразует UserActions в объект, где:

// Каждый ключ имеет вид ${действие}Handler (например, createHandler)

// Каждое значение — функция () => void

// Дополнительно:
// Сделай так, чтобы:

// Функции-обработчики принимали параметр id: number

// Добавить новый тип AsyncActionHandlers, где все функции возвращают Promise<void>

type UserActions = "create" | "update" | "delete";
type ActionHandlers = {
  [K in UserActions as `${K}Handler`]: () => void;
};