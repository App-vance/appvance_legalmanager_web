import { useState } from "react";

type Errors<T> = Partial<Record<keyof T, string>>;

export const useFormValidation = <T extends Record<string, string>>(
  initialState: T,
  rules: Partial<Record<keyof T, (value: string) => string | null>>
) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<Errors<T>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (rules[name as keyof T]) {
      const error = rules[name as keyof T]?.(value);
      setErrors((prev) => ({ ...prev, [name]: error || undefined }));
    }
  };

  const validate = () => {
    const newErrors: Errors<T> = {};
    (Object.keys(rules) as (keyof T)[]).forEach((field) => {
      const error = rules[field]?.(values[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
  setValues(initialState);
  setErrors({});
};

  return { values, errors, handleChange, validate, setValues, resetForm };
};
