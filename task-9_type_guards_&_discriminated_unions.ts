// Задача 9:

// Создай тип ApiResponse, который может быть:

// Успешным ответом: { status: "success"; data: T }

// Ошибкой: { status: "error"; message: string }

// Напиши type guard isSuccessResponse, проверяющий успешность ответа

type SuccessResponse<T> = {
    status: "success";
    data: T;
  }
  
  type ErrorResponse = {
    status: "error";
    message: string
  }
  
  type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
  
  function isSuccessResponse<T>(response: ApiResponse<T>): response is SuccessResponse<T> {
    return response.status === "success";
  }