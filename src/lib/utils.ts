import { mediaQueries } from '@deveahub/styled';

export const makeSolidVariant = (color: string) => ({
  backgroundColor: `$${color}-4`,
  color: `$${color}-11`,
  borderColor: `$${color}-7`,

  '&:not(:disabled)': {
    [mediaQueries.hoverAvailable]: {
      '&:hover': {
        backgroundColor: `$${color}-5`,
        borderColor: `$${color}-8`,
      },
    },
    '&:focus-visible': {
      backgroundColor: `$${color}-5`,
      borderColor: `$${color}-8`,
    },
    '&:active': {
      color: `$${color}-4`,
      backgroundColor: `$${color}-11`,
    },
  },
});
