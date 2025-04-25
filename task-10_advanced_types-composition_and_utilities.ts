// Часть 1: Базовые типы
// Создай:

// Тип FormField<T> для поля формы:

// value: T (значение)

// isRequired: boolean

// validator?: (value: T) => boolean

// Тип FormSchema, который представляет объект с динамическими ключами, где каждое значение — FormField<any>

// Часть 2: Валидация (усложнение)
// Создай:

// Тип ValidationResult, который для каждого поля формы возвращает:

// isValid: boolean

// errors: string[]

// Функцию validateForm, принимающую FormSchema и возвращающую ValidationResult

// Часть 3: Условные поля (мастер-уровень)
// Сделай так, чтобы:

// Поле confirmPassword было обязательно, только если password не пустое

type FormField<T = unknown> = {
    value: T;
    isRequired: boolean;
    validator?: (value: T) => boolean | string;
    requiredIf?: {
      field: string;
      condition: (value: any) => boolean
    }
  }
  
  type FormSchema = Record<string, FormField>
  
  type ValidationResult = {
    isValid: boolean;
    errors: Record<string, string[]>;
  }
  
  function validateField(fieldName: string, field: FormField, schema: FormSchema): string[] {
    const errors: string[] = [];
    if (field.isRequired && isEmpty(field.value)) {
      errors.push('Обязательное поле')
    }
  
    if (field.validator) {
      const validationResult = field.validator(field.value);
      if (validationResult !== true) {
        errors.push(typeof validationResult === 'string' ? validationResult : 'неверное значение')
      }
    }
  
    if (field.requiredIf) {
      const dependency = field.requiredIf;
      const dependentFieldValue = schema[dependency.field]?.value
  
      if (dependency.condition(dependentFieldValue)) {
        if (isEmpty(field.value)) {
          errors.push(`Поле обязательно, так как ${dependency.field} удовлетворяет условию`)
        }
      }
    }
  
    return errors;
  }
  
  function isEmpty(value: any): boolean {
    return value === undefined || value === null || value === '';
  }
  
  function validateForm(schema: FormSchema): ValidationResult {
    let result: ValidationResult = {
      isValid: true,
      errors: {}
    };
  
    for (const [fieldName, field] of Object.entries(schema)) {
      const fieldErrors = validateField(fieldName, field, schema)
  
      if (fieldErrors.length > 0) {
        result.errors[fieldName] = fieldErrors;
        result.isValid = false
      }
    }
  
    return result
  }
  
  type DependentField<T extends FormSchema> = {
    [K in keyof T]: T[K] & {
      requiredIf?: {
        field: keyof T;
        condition: (value: any) => boolean;
      };
    };
  };