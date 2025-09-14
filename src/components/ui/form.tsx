import type { ReactElement, ReactNode } from 'react';
import type { UseFormReturn, FieldValues, SubmitHandler } from 'react-hook-form';

type FormProps<T extends FieldValues> = React.HTMLAttributes<HTMLFormElement> & {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
  autoComplete?: string;
};

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  autoComplete = 'off',
  ...props
}: FormProps<T>): ReactElement => {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} {...props} autoComplete={autoComplete}>
      {children}
    </form>
  );
};

export { Form };
