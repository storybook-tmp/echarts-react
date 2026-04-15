import type { Preview } from '@storybook/react-vite';
import { useInitialChartContext, ChartContext, echarts } from '../src/shared';
import { CanvasRenderer } from 'echarts/renderers';

// Register the canvas renderer globally
echarts.use(CanvasRenderer);

const preview: Preview = {
  decorators: [
    (Story) => {
      const ctx = useInitialChartContext();
      return (
        <ChartContext.Provider value={ctx}>
          <Story />
        </ChartContext.Provider>
      );
    },
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
