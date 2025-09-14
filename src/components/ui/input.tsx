import * as InputPrimitive from '@base-ui-components/react/input';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { composeEventHandlers } from '@/utils/compose-event-handlers';
import { composeRefs } from '@/utils/compose-refs';

export type InputContextProps = Pick<InputProps, 'autoFocus' | 'disabled'> & {
  controlRef: React.RefObject<HTMLElement | null>;
  onFocusedChange: (focused: boolean) => void;
};

const InputContext = React.createContext<InputContextProps>({
  autoFocus: false,
  controlRef: { current: null },
  disabled: false,
  onFocusedChange: () => {},
});

function useInput() {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error('useInput must be used within a <Input />.');
  }

  return context;
}

type InputProps = React.ComponentProps<'div'> & {
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
};

function Input({ autoFocus, disabled, className, onClick, error, ...props }: InputProps) {
  const [focused, setFocused] = React.useState(false);
  const controlRef = React.useRef<HTMLElement>(null);

  return (
    <InputContext.Provider
      value={{
        autoFocus,
        controlRef,
        disabled,
        onFocusedChange: setFocused,
      }}
    >
      <div
        data-slot="input"
        onClick={composeEventHandlers(onClick, (event) => {
          if (controlRef.current && event.currentTarget === event.target) {
            controlRef.current.focus();
          }
        })}
        className={cn(
          'border-input selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex min-h-9 cursor-text items-center gap-2 rounded-md border bg-transparent px-3 py-1 text- shadow-xs transition-[color,box-shadow] outline-none md:text-sm',
          disabled && 'pointer-events-none cursor-not-allowed opacity-50',
          focused && 'border-ring ring-ring/50 ring-[3px]',
          error && 'ring-destructive/20 dark:ring-destructive/40 border-destructive',
          className,
        )}
        {...props}
      />
    </InputContext.Provider>
  );
}

function InputFlexWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="input-flex-wrapper" className={cn('flex flex-1 flex-wrap', className)} {...props} />;
}

type InputAdornmentProps = React.ComponentProps<'div'>;

function InputAdornment({ className, children, ...props }: InputAdornmentProps) {
  return (
    <div
      data-slot="input-adornment"
      className={cn(
        "text-muted-foreground flex items-center [&_svg:not([class*='size-'])]:size-4",
        '[&:not(:has(button))]:pointer-events-none',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function InputAdornmentButton({
  type = 'button',
  variant = 'ghost',
  size = 'icon',
  disabled: disabledProp,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { disabled } = useInput();

  return (
    <Button
      data-slot="input-adornment-button"
      type={type}
      variant={variant}
      size={size}
      disabled={disabled || disabledProp}
      className={cn('size-6', className)}
      {...props}
    />
  );
}

function InputInput({
  className,
  ref,
  onFocus,
  onBlur,
  disabled: disabledProp,
  ...props
}: React.ComponentProps<typeof InputPrimitive.Input>) {
  const { controlRef, autoFocus, disabled, onFocusedChange } = useInput();
  const isDisabled = disabled || disabledProp;

  return (
    <InputPrimitive.Input
      ref={composeRefs(ref, controlRef)}
      autoFocus={autoFocus}
      onFocus={composeEventHandlers(onFocus, () => onFocusedChange(true))}
      onBlur={composeEventHandlers(onBlur, () => onFocusedChange(false))}
      disabled={isDisabled}
      data-slot="input-input"
      className={cn(
        'placeholder:text-muted-foreground file:text-foreground w-full flex-1 dark:bg-input/30 file:border-0 file:text-sm file:font-medium focus:outline-none disabled:pointer-events-none',
        className,
      )}
      {...props}
    />
  );
}

export { Input, InputFlexWrapper, InputAdornment, InputAdornmentButton, InputInput, useInput };
