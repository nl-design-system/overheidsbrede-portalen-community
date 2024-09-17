import '@vng.nl/design-tokens/dist/index.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    options: {
      panelPosition: 'right',
      storySort: {
        order: ['VNG', 'Templates'],
      },
    },
  },
};

export default preview;
