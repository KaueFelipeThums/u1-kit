import { mergeProps, useRender } from '@base-ui-components/react';
import * as InputPrimitive from '@base-ui-components/react/input';
import * as React from 'react';
import { useControllableState } from '@/hooks/use-controllable-state';
import { composeEventHandlers } from '@/utils/compose-event-handlers';

type InputPasswordContextProps = Required<Pick<InputPasswordProps, 'visible' | 'onVisibleChange'>>;

const InputPasswordContext = React.createContext<InputPasswordContextProps>({
  visible: false,
  onVisibleChange: () => {},
});

export const useInputPasswordContext = () => React.useContext(InputPasswordContext);

type InputPasswordProps = {
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  children?: React.ReactNode;
};

const InputPassword = ({
  visible: visibleProp,
  defaultVisible = false,
  onVisibleChange,
  children,
}: InputPasswordProps) => {
  const [visible = false, setVisible] = useControllableState({
    prop: visibleProp,
    defaultProp: defaultVisible,
    onChange: onVisibleChange,
  });

  return (
    <InputPasswordContext.Provider
      value={{
        visible,
        onVisibleChange: setVisible,
      }}
    >
      {children}
    </InputPasswordContext.Provider>
  );
};

const InputInputPassword = (props: React.ComponentProps<typeof InputPrimitive.Input>) => {
  const { visible } = useInputPasswordContext();
  return <InputPrimitive.Input type={visible ? 'text' : 'password'} {...props} />;
};

type InputPasswordToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & useRender.ComponentProps<'button'>;

const InputPasswordToggle = ({ onClick, render, ...props }: InputPasswordToggleProps) => {
  const { visible, onVisibleChange } = useInputPasswordContext();
  const defaultProps = {
    type: 'button',
    onClick: composeEventHandlers(onClick, () => onVisibleChange(!visible)),
    'data-slot': 'button',
    'data-state': visible ? 'visible' : 'hidden',
  } as const;

  const element = useRender({
    defaultTagName: 'button',
    render,
    props: mergeProps<'button'>(defaultProps, props),
  });

  return element;
};
const InputPasswordIndicator = (props: React.ComponentProps<'span'>) => {
  const { visible } = useInputPasswordContext();
  return <span inert data-state={visible ? 'visible' : 'hidden'} {...props} />;
};

const Root = InputPassword;
const Input = InputInputPassword;
const Toggle = InputPasswordToggle;
const Indicator = InputPasswordIndicator;

export { Root, Input, Toggle, Indicator };
