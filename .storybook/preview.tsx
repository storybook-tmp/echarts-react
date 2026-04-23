import type { Preview } from '@storybook/react-vite';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import { echarts } from '../src/shared.js';

// Register renderers with echarts
echarts.use([CanvasRenderer, SVGRenderer]);

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
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
