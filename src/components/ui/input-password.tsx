import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

import * as InputPasswordBase from '@/components/primitives/input-password';
import { Input, InputAdornment, InputAdornmentButton, InputInput } from '@/components/ui/input';

import { cn } from '@/lib/utils';

type InputPasswordProps = React.ComponentPropsWithoutRef<typeof InputPasswordBase.Root> &
  React.ComponentProps<typeof Input>;

export const InputPassword = ({ visible, defaultVisible = false, onVisibleChange, ...props }: InputPasswordProps) => (
  <InputPasswordBase.Root visible={visible} defaultVisible={defaultVisible} onVisibleChange={onVisibleChange}>
    <Input {...props} />
  </InputPasswordBase.Root>
);

export const InputPasswordAdornment = InputAdornment;

export const InputPasswordAdornmentButton = InputAdornmentButton;

export const InputPasswordInput = (props: React.ComponentProps<typeof InputInput>) => (
  <InputInput {...props} render={(InputInputProps) => <InputPasswordBase.Input {...InputInputProps} />} />
);

export const InputPasswordAdornmentToggle = ({ ...props }: React.ComponentProps<typeof InputPasswordBase.Toggle>) => (
  <InputAdornment>
    <InputAdornmentButton
      {...props}
      render={({ className, ...props }) => (
        <InputPasswordBase.Toggle className={cn('group', className)} {...props}>
          <Eye className="hidden size-4 group-data-[state=visible]:block" />
          <EyeOff className="block size-4 group-data-[state=visible]:hidden" />
        </InputPasswordBase.Toggle>
      )}
    ></InputAdornmentButton>
  </InputAdornment>
);
