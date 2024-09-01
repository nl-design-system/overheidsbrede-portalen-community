import '@vng/design-tokens/dist/index.css';
import type { Preview } from '@storybook/react';
import { ParametersArgsDecorator } from './ParametersArgsDecorator';

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    options: { panelPosition: 'right' },
  },
  decorators: [ParametersArgsDecorator],
};

export default preview;
