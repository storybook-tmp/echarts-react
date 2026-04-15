import type { Preview } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import {
  CalendarComponent,
  DatasetComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';
import { SVGRenderer, echarts } from '../src/index.js';

echarts.use([
  SVGRenderer,
  CalendarComponent,
  DatasetComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  TransformComponent,
  VisualMapComponent,
]);

const storyFrameStyle = {
  boxSizing: 'border-box',
  minHeight: '100vh',
  padding: '24px',
  background:
    'radial-gradient(circle at top, rgba(148, 163, 184, 0.15), transparent 38%), #ffffff',
} satisfies CSSProperties;

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={storyFrameStyle}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
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
