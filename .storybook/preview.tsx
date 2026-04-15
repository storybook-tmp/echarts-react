import type { Preview } from '@storybook/react-vite';
import { CanvasRenderer, echarts } from '@fanciers/echarts-react';

echarts.use(CanvasRenderer);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
