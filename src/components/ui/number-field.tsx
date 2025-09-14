import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import { MinusIcon, MoveHorizontalIcon, PlusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function NumberField({ className, children, ...props }: React.ComponentProps<typeof BaseNumberField.Root>) {
  const controllerClassName =
    'hover:border-ring/70 bg-input/30 flex size-9 items-center justify-center border transition-colors select-none disabled:opacity-50 disabled:pointer-events-none';

  return (
    <BaseNumberField.Root
      className={cn('flex flex-col items-start gap-1', className)}
      data-slot="number-field"
      {...props}
    >
      {children}
      <BaseNumberField.Group className="text-foreground flex rounded-md shadow-xs transition-shadow">
        <BaseNumberField.Decrement
          className={cn(controllerClassName, 'rounded-l-md')}
          data-slot="number-field-decrement"
        >
          <MinusIcon className="size-4" />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input
          className="hover:border-ring/70 h-9 w-20 border-y text-center text-sm tabular-nums transition-colors focus:z-1 focus:outline-[3px] focus:-outline-offset-1 disabled:pointer-events-none disabled:opacity-50"
          data-slot="number-field-input"
        />
        <BaseNumberField.Increment
          className={cn(controllerClassName, 'rounded-r-md')}
          data-slot="number-field-increment"
        >
          <PlusIcon className="size-4" />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}

function NumberFieldScrubArea({ className, ...props }: React.ComponentProps<typeof BaseNumberField.ScrubArea>) {
  return (
    <BaseNumberField.ScrubArea
      className={cn('cursor-ew-resize', className)}
      data-slot="number-field-scrub-area"
      {...props}
    >
      <BaseNumberField.ScrubAreaCursor className="drop-shadow-sm filter" data-slot="number-field-scrub-area-cursor">
        <MoveHorizontalIcon className="size-4.5" />
      </BaseNumberField.ScrubAreaCursor>
    </BaseNumberField.ScrubArea>
  );
}

export { NumberField, NumberFieldScrubArea };
