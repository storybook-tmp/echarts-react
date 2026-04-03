import type { Preview } from '@storybook/react-vite';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

// Register the canvas renderer globally so all chart stories can render
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
