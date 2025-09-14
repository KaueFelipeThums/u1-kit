import type { ReactElement, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import type { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName> & {
  label?: ReactNode;
  description?: ReactNode;
  className?: string;
  hideErrorMessage?: boolean;
  formControlClassName?: string;
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  className,
  rules,
  disabled = false,
  hideErrorMessage = false,
  defaultValue,
  render,
}: FormFieldProps<TFieldValues, TName>): ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      disabled={disabled}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => (
        <div className={cn('space-y-2', className)}>
          {label && (
            <Label>
              {label} {rules?.required && <span className="text-destructive">*</span>}
            </Label>
          )}
          {render({ field, fieldState, formState })}
          {description && <span className="text-muted-foreground text-sm">{description}</span>}
          {!hideErrorMessage && fieldState.error?.message && (
            <span className="text-destructive text-xs flex items-center gap-1">{fieldState.error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export { FormField };
