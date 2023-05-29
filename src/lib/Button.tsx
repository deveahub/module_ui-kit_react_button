import { ComponentProps, styled } from '@deveahub/styled';

import { BaseButton } from './BaseButton';
import { makeSolidVariant } from './utils';

const _Button = styled(BaseButton, {
  defaultVariants: {
    variant: 'solid',
    size: 'sm',
    weight: 'medium',
  },
  variants: {
    variant: {
      solid: makeSolidVariant('primary'),
      'solid-error': makeSolidVariant('error'),
      'solid-warning': makeSolidVariant('warning'),
      'solid-success': makeSolidVariant('success'),
      'solid-info': makeSolidVariant('info'),
      'solid-foreground': makeSolidVariant('foreground'),
    },
    rounded: {
      true: {
        borderRadius: '50%',
        dimensions: 12,
        px: 0,
      },
    },
    size: {
      xs: {
        fontSize: '$-1',
        px: 4,
        height: 10,
        '&:svg': {
          dimensions: 3,
        },
      },
      sm: {
        height: 12,
        fontSize: '$1',
        px: 6,
        '& svg': {
          dimensions: 4,
        },
      },
      md: {
        fontSize: '$2',
        px: 8,
        height: 13,
      },
    },
    weight: {
      thin: {
        fontWeight: '$300',
      },
      medium: {
        fontWeight: '$500',
      },
      bold: {
        fontWeight: '$700',
      },
    },
  },
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontFamily: 'unset',
  textTransform: 'uppercase',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$1',
  borderRadius: '$3',
  transition: 'background-color $transitions$1',
  border: 'none',
  color: '$bg',
  width: 'fit-content',
  height: 'fit-content',

  '&:not(:disabled)': {
    cursor: 'pointer',
  },
});

export const buttonTestId = 'button-element';

export const Button = styled(_Button, {});

export type ButtonProps = ComponentProps<typeof Button>;

Button.defaultProps = {
  ...({ 'data-testid': buttonTestId } as ButtonProps),
};
