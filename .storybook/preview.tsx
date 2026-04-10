import type { Preview } from '@storybook/react-vite';
import { CanvasRenderer, SVGRenderer, echarts } from '@fanciers/echarts-react';
import {
  BrushComponent,
  CalendarComponent,
  DatasetComponent,
  DataZoomComponent,
  GeoComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  MatrixComponent,
  PolarComponent,
  SingleAxisComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';
import { AxisBreak as AxisBreakFeature } from 'echarts/features';

echarts.use([
  AxisBreakFeature,
  BrushComponent,
  CalendarComponent,
  CanvasRenderer,
  DatasetComponent,
  DataZoomComponent,
  GeoComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  MatrixComponent,
  PolarComponent,
  SingleAxisComponent,
  SVGRenderer,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
]);

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          padding: '24px',
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
        }}
      >
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
