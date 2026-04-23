import type { Preview } from '@storybook/react-vite';
import { CanvasRenderer, SVGRenderer, echarts } from '../src/index';
import '../src/stories/button.css';
import '../src/stories/header.css';
import '../src/stories/page.css';

// The package README expects consumers to register a renderer before mounting a chart.
echarts.use([CanvasRenderer, SVGRenderer]);

const preview: Preview = {
  parameters: {
    layout: 'centered',
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
