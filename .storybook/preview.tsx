import type { Preview } from '@storybook/react-vite';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

// Register CanvasRenderer with echarts globally
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
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
