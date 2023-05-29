import { Flex } from '@deveahub/react-flex';
import { ComponentProps, focus, styled } from '@deveahub/styled';
import { HTMLProps, forwardRef } from 'react';

const BaseButtonStack = styled(Flex, {
  padding: 0,
  background: 'transparent',
  border: 'none',
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '&:not(:disabled)': {
    '&:focus-visible': focus.outline,
  },
  borderRadius: '$3',

  variants: {
    pointer: {
      true: {
        '&:not(:disabled)': {
          cursor: 'pointer',
        },
      },
    },
  },
});

export type BaseButtonProps = ComponentProps<typeof BaseButtonStack> &
  HTMLProps<HTMLButtonElement>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => (
    <BaseButtonStack
      // TODO: change type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      {...({ ...props, as: 'button' } as ComponentProps<
        typeof BaseButtonStack
      >)}
    />
  )
);
