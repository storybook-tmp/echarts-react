import type { Preview } from '@storybook/react-vite';
import { echarts, CanvasRenderer } from '@fanciers/echarts-react';

// Register the canvas renderer globally for all stories
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
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
